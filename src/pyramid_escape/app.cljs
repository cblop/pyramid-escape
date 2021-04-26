(ns pyramid-escape.app
  (:require [pyramid-escape.util.threejs :as threejs]
            [threeagent.alpha.core :as th]
            [reagent.core :as r]
            ["howler" :as howler]
            ["three" :as three]))

(defonce state (th/atom {}))

(defonce music (new howler/Howl #js {:src (array "music/wahmbulance-full.mp3")
                                     :loop true}))

(defonce ^:private ^:dynamic *canvas-element* nil)

(defonce ^:private mouse-position (threejs/vec2 [0 0]))

(defonce ^:private wall-color 0xCC9900)
(defonce ^:private wall-material {:color wall-color
                                  :normalMap (threejs/texture "textures/sandstone_blocks_08_nor_2k.jpg")
                                  :aoMap (threejs/texture "textures/sandstone_blocks_08_ao_2k.jpg")
                                  ;; :specularMap (threejs/texture "textures/sandstone_blocks_08_spec_2k.jpg")
                                  ;; :roughnessMap (threejs/texture "textures/sandstone_blocks_08_rough_2k.jpg")
                                  :map (threejs/texture "textures/sandstone_blocks_08_diff_2k.jpg")})

(def stick-duration 4)

(def show-info? (r/atom true))
(def dead? (r/atom false))
(def restart? (r/atom false))
(def escaped? (r/atom false))

(defn vec-remove
  "remove elem in coll"
  [pos coll]
  (vec (concat (subvec coll 0 pos) (subvec coll (inc pos)))))

;; hardcoding these coords because time is running out and I can't get raycasting to work!
(def mouse-coords
  {:doors {:left [[-0.99 0] [-0.83 0] [-0.83 -0.75] [-0.99 -0.85]]
           :middle [[-0.13 0] [0.13 0] [0.13 -0.66] [-0.13 -0.66]]
           :bottom [[-0.23 -0.94] [0.23 -0.94] [0.23 -1] [-0.23 -1]]
           :right [[0.83 0] [1 0] [1 -0.85] [0.85 -0.76]]}
   :lamps {:left [[-0.44 -0.06] [-0.35 -0.06] [-0.39 -0.20] [-0.39 -0.20]]
           :middle [[-0.04 -0.07] [0.04 -0.07] [0 -0.19] [0 -0.19]]
           :right [[0.35 -0.07] [0.43 -0.06] [0.39 -0.19] [0.39 -0.19]]}
   :sticks {:left [[-0.5 -0.73] [-0.41 -0.8] [-0.42 -0.84] [-0.51 -0.76]]
            :middle [[-0.05 -0.85] [0.05 -0.85] [0.05 -0.89] [-0.05 -0.89]]
            :right [[0.40 -0.80] [0.51 -0.73] [0.52 -0.77] [0.42 -0.84]]}
   :inventory {0 [[-0.87 0.57] [-0.73 0.85] [-0.68 0.80] [-0.81 0.53]]
               1 [[-0.56 0.57] [-0.44 0.86] [-0.39 0.81] [-0.52 0.53]]
               2 [[-0.26 0.57] [-0.14 0.86] [-0.10 0.81] [-0.21 0.54]]
               3 [[0.05 0.57] [0.16 0.86] [0.20 0.82] [0.08 0.53]]
               4 [[0.35 0.56] [0.45 0.85] [0.49 0.83] [0.38 0.53]]
               5 [[0.64 0.56] [0.74 0.85] [0.79 0.84] [0.70 0.55]]}
   :floor {:left [[-1 -0.83] [-0.67 -0.65] [-0.28 -0.65] [-0.41 -1]]
           :middle [[-0.28 -0.65] [0.31 -0.64] [0.43 -1] [-0.41 -1]]
           :right [[0.29 -0.65] [0.67 -0.65] [1 -0.83] [0.41 -1]]}})


; left, middle, bottom, right
(def door-map
  [[:--x- :--xx :x-xx :x--x :x-x-]
   [:-xxx :xxx- :-x-x :x-x- :-xx-]
   [:-x-x :xxxx :x-x- :-xxx :xx--]
   [:---- :-x-x :xxxx :xxx- :--x-]
   [:--x- :---- :-xx- :-xxx :xx--]
   [:-x-x :x--x :xx-x :xx-x :x---]])

; left, middle, right
(def lamp-map
  (atom
   [[:--- :-l- :--- :--- :---]
    [:--- :--- :l-- :--- :---]
    [:--- :--- :--- :l-- :---]
    [:--- :l-- :--- :--l :---]
    [:--- :--- :--l :--- :---]
    [:l-- :--- :--- :--- :-l-]]))

; left, middle, right
(def stick-map
  (atom [[:--- :--- :-x- :--- :-x-]
         [:--- :--- :-xx :--- :--x]
         [:--- :x-- :--- :-x- :---]
         [:--- :--- :--- :-x- :---]
         [:x-- :--- :x-x :--- :--x]
         [:--x :--- :-x- :--- :---]]))

(defn- placement->index
  [type placement]
  (case placement
    :left 0
    :middle 1
    :bottom 2
    :right (if (= type :door) 3 2)))

(defn load-room
  []
  (let [room (:room @state)
        door-string (name (get-in door-map room))
        lamp-string (name (get-in @lamp-map room))
        stick-string (name (get-in @stick-map room))
        doors (->> door-string
                   (map-indexed (fn [i v]
                                  (when (= v \x)
                                    (case i
                                      0 :left
                                      1 :middle
                                      2 :bottom
                                      3 :right))))
                   (remove nil?)
                   (set))
        lamps (->> lamp-string
                   (map-indexed (fn [i v]
                                  (let [lit? (= v \l)
                                        unlit? (= v \x)]
                                    (when (or lit? unlit?)
                                      {:placement (case i
                                                    0 :left
                                                    1 :middle
                                                    2 :right)
                                       :lit? lit?}))))
                   (remove nil?)
                   (set))
        sticks (->> stick-string
                    (map-indexed (fn [i v]
                                   (let [lit? (> (int v) 0)
                                         burns-left (int v)
                                         unlit? (= v \x)]
                                     (when (or lit? unlit?)
                                       {:placement (case i
                                                     0 :left
                                                     1 :middle
                                                     2 :right)
                                        :lit? lit?
                                        :burns-left burns-left}))))
                    (remove nil?)
                    (set))]
    (swap! state assoc :doors doors :lamps lamps :sticks sticks)
    (println @state)))

(defn decrement-burns-left
  []
  (swap! state update :inventory (fn [sticks]
                                   (into []
                                         (map #(cond-> %
                                                 (= 1 (:burns-left %))
                                                 (assoc :lit? false)
                                                 (> (:burns-left %) 0)
                                                 (update :burns-left dec)) sticks)))))

(defn- die!
  []
  (js/setTimeout (fn []
                   (reset! dead? true)
                   (.fade music 1 0 2500)) 1000)
  (js/setTimeout (fn []
                   (reset! restart? true)) 2500))

(defn change-room
  [direction]
  (letfn [(move [index f]
            (when (and
                   (= "x" (nth (vec (name (get-in door-map (:room @state)))) (placement->index :door direction)))
                   (get-in door-map (:room (update-in @state [:room index] f))))
              (swap! state update-in [:room index] f)
              (decrement-burns-left)
              (load-room)))]
    (case direction
      :left (move 1 dec)
      :middle (move 0 dec)
      :bottom (move 0 inc)
      :right (move 1 inc)))
  (if (= (:room @state) [0 0]) (reset! escaped? true)
      (when (empty? (filter :lit? (concat (:inventory @state) (:sticks @state) (:lamps @state))))
        (die!))))

(defn walls []
  [:object {:position [0 0 -10]
            :scale [1.0 1.0 1]}
   ;; left wall
   [:plane {:position [-15 0 -10]
            :rotation [0 1 0]
            :scale [30 20 10]
            :material wall-material}]
   ;; right wall
   [:plane {:position [15 0 -10]
            :rotation [0 -1 0]
            :scale [30 20 10]
            :material wall-material}]
   ;; back wall
   [:plane {:position [0 0 -10]
            :scale [30 20 10]
            :material wall-material}]
   ;; ceiling
   [:plane {:position [0 10 -10]
            :rotation [1 0 0]
            :scale [50 20 10]
            :material wall-material}]
   ;; floor
   [:plane {:position [0 -10 -10]
            :rotation [-1 0 0]
            :scale [50 20 10]
            :material wall-material}]])

(defn door
  [placement]
  (let [placements {:left {:position [-22 -5 -9]
                           :rotation [0 1 0]
                           :scale [3 10 11]}
                    :middle {:position [0 -5 -11.4]
                             :rotation [0 0 0]
                             :scale [6 11 3]}
                    :bottom {:position [0 -15 -1.4]
                             :rotation [0 0 0]
                             :scale [6 11 3]}
                    :right {:position [22 -5 -9]
                            :rotation [0 -1 0]
                            :scale [3 10 11]}}]
    [:object {:position [0 0 -10]
              :scale [1.0 1.0 1]}
     [:box {:position (get-in placements [placement :position])
            :rotation (get-in placements [placement :rotation])
            :scale (get-in placements [placement :scale])
            :material {:color "black"
                       :specular 0}}]]))

(defn lamp
  [{:keys [placement lit?]}]
  (let [lamp-placements {:left {:position [-9 -2 -10]
                                :rotation [3 0 0]}
                         :middle {:position [0 -2 -10]
                                  :rotation [3 0 0]}
                         :right {:position [9 -2 -10]
                                 :rotation [3 0 0]}}
        light-placements {:left [-13 0 -1]
                          :middle [0 0 -1]
                          :right [13 0 -1]}]
    [:group
     [:object {:position [0 0 -10]
               :scale [1.0 1.0 1]}
      [:cone {:position (get-in lamp-placements [placement :position])
              :rotation (get-in lamp-placements [placement :rotation])
              :scale [0.2 0.2 0.2]
              :radius 5
              :height 10
              :material {:color (if lit? "yellow"
                                    "brown")}}]]
     (when lit?
       [:point-light {:intensity 1
                      :position (get light-placements placement)}])]))

(defn stick
  [{:keys [placement lit? burns-left]}]
  (let [placements {:left {:position [-8 -9 -5]
                           :rotation [2 0 2]}
                    :middle {:position [0 -10 -5]
                             :rotation [1 0 1]}
                    :right {:position [8 -9 -5]
                            :rotation [0 0 2]}}]

    [:object {:position [0 0 -10]
              :scale [1.0 1.0 1]}
     (when lit?
       [:point-light {:intensity 1
                      :distance 50
                      :position (assoc (get-in placements [placement :position]) 2 10)}])
     [:cylinder {:radius-top 1
                 :radius-bottom 1
                 :height 10
                 :position (get-in placements [placement :position])
                 :rotation (get-in placements [placement :rotation])
                 :open-ended? false
                 :scale [0.2 0.2 0.2]
                 :material {:color (if lit?
                                     (case burns-left
                                       4 0xffff80
                                       3 "yellow"
                                       2 "orange"
                                       1 "red"
                                       "brown")
                                       "brown")}}]]))

(defn inventory-item
  [index {:keys [lit? selected? burns-left]}]
  (let [placements [[-13 8 -5] [-8 8 -5] [-3 8 -5] [2 8 -5] [7 8 -5] [12 8 -5]]]
    [:object {:position [0 0 -10]
              :scale [1.0 1.0 1]}
     [:cylinder {:radius-top 1
                 :radius-bottom 1
                 :height 10
                 :position (nth placements index)
                 :rotation [3.0 0 0.5]
                 :open-ended? false
                 :scale [0.4 0.4 0.4]
                 :material {:color (cond
                                     selected? "green"
                                     lit? (case burns-left
                                            4 0xffff80
                                            3 "yellow"
                                            2 "orange"
                                            1 "red"
                                            "brown")
                                     :else "brown")}}]
     (when lit?
       [:point-light {:intensity (/ burns-left 2)
                      :distance 50
                      :position (assoc (nth placements index) 2 10)}])
     ]))

(defn- mouse-evt->screen-coords [evt]
  (let [rect (.getBoundingClientRect *canvas-element*)
        x (- (.-clientX evt) (.-left rect))
        y (- (.-clientY evt) (.-top rect))
        w (.-width rect)
        h (.-height rect)]
    [(- (* 2 (/ x w)) 1)
     (+ 1 (* 2 (- (/ y h))))]))

(defn- selected-stick-index
  []
  (->> (map-indexed (fn [i s]
                     (when (:selected? s)
                       i)) (:inventory @state))
       (remove nil?)
       (first)))

(defn- get-selected-stick
  []
  (get-in @state [:inventory (selected-stick-index)]))

(defn- get-item
  [type placement]
  (->> (get @state type)
       (filter #(= (:placement %) placement))
       (first)))

(defn- light-item
  [type placement]
  (swap! state update type (fn [items]
                               (map #(cond-> %
                                       (= placement (:placement %)) (assoc :lit? true))
                                    items))))

(defn- light-inv-stick
  [index]
  (swap! state assoc-in [:inventory index :burns-left] stick-duration)
  (swap! state assoc-in [:inventory index :selected?] false)
  (swap! state assoc-in [:inventory index :lit?] true))

(defn- change-room-stick
  [placement take?]
  (println "THIS STICK" (get-selected-stick))
  (println (str (:burns-left (get-selected-stick))))
  (letfn [(update-room [room-kw]
            (let [chars (vec (name room-kw))]
              (->>
               (assoc-in chars [(placement->index :stick placement)] (if take? "-" (str (:burns-left (get-selected-stick)))))
               (apply str)
               (keyword))))]
    (swap! stick-map update-in (:room @state) update-room)))

(defn- take-stick
  [placement]
  (let [my-sticks (:inventory @state)
        the-stick (first (filter #(= (:placement %) placement) (:sticks @state)))]
    (when (and the-stick (< (count my-sticks) 7))
      (swap! state update :sticks (fn [sticks] (remove #(= (:placement %) placement) sticks)))
      (swap! state update :inventory #(concat % [{:selected? false :lit? (:lit? the-stick) :burns-left (:burns-left the-stick)}]))
      (change-room-stick placement true))))

(defn- light-lamp
  [placement]
  (let [stick-index (selected-stick-index)
        selected-stick (nth (:inventory @state) stick-index)]
    (cond
      ;; (:lit? selected-stick) (do (light-item :lamps placement)
      ;;                            (swap! state assoc-in [:inventory stick-index :selected?] false))
      (:lit? (get-item :lamps placement)) (light-inv-stick stick-index))))

(defn- on-mouse-down [evt]
  (let [[x y] (mouse-evt->screen-coords evt)]
    (set! (.-x mouse-position) x)
    (set! (.-y mouse-position) y)
    (println "x:" (.toFixed x 2))
    (println "y:" (.toFixed y 2))
    (println (type (:inventory @state)) (:inventory @state))
    (doseq [key (keys mouse-coords)]
      (doseq [i-key (keys (get mouse-coords key))]
        (let [coords (get-in mouse-coords [key i-key])]
          (when (and (> x (apply min (map first coords)))
                     (< x (apply max (map first coords)))
                     (> y (apply min (map second coords)))
                     (< y (apply max (map second coords))))
            (cond
              (= key :doors) (change-room i-key)
              (= key :floor) (doseq [[i item] (map-indexed vector (:inventory @state))]
                               (when (and (:selected? item) (empty? (filter #(= (:placement %) i-key) (:sticks @state))))
                                 (change-room-stick i-key false)
                                 (swap! state update :inventory #(vec-remove i (into [] %)))
                                 (swap! state update :sticks #(clojure.set/union % #{{:placement i-key :lit? (:lit? item) :burns-left (:burns-left item)}}))
                                 ))
              (= key :sticks) (take-stick i-key)
              (= key :inventory) (swap! state update :inventory (fn [items]
                                                                  (into []
                                                                   (map-indexed (fn [i item]
                                                                                  (cond-> item
                                                                                    (not= i-key i) (assoc :selected? false)
                                                                                    (= i-key i) (update :selected? not)))
                                                                                items))))
              (= key :lamps) (light-lamp i-key))
            (println key i-key)))))))

(defn- render-doors []
  (for [d (:doors @state)]
    [door d]))

(defn- render-lamps []
  (for [l (:lamps @state)]
    [lamp l]))

(defn- render-sticks []
  (for [s (:sticks @state)]
    [stick s]))

(defn- render-inventory []
  (for [[index item] (map-indexed vector (:inventory @state))]
    [inventory-item index item]))

(defn root []
  [:object
   [walls]
   (render-doors)
   (render-lamps)
   (render-sticks)
   (render-inventory)])


(defn load-scene! []
  (let [scene-context (th/render [root]
                                 (.getElementById js/document "root"))]
    (swap! state assoc
           :room [5 0]
           :inventory [])
    (load-room)
    (swap! state assoc :scene-context scene-context)
    (swap! state assoc :camera (.-camera ^js scene-context))))

(declare init)

(defn- ui-root []
  [:div
   (when @escaped?
     [:div
      [:img {:src "img/desert.png"}]
      [:div#message
       [:p "Congratulations, you have escaped!"]]])
   (when @show-info?
     [:div#explanation {:on-click #(reset! show-info? false)}
      [:p "You find yourself underneath an ancient Egyptian pyramid."]
      [:p "Using the glowing rods, find your way out through the labyrinth."]
      [:p "Recharge them using the lamps, and leave them on the floor when needed."]
      [:p "Good luck!"]])
   (when @dead?
     [:div#message
      [:p "You have died"]
      (when @restart?
        [:a {:href ""
             :on-click init} "Click here to restart"])])])

(defn init []
  (set! *canvas-element* (.getElementById js/document "root"))
  ;; (set! (.-width *canvas-element*) (* (.-height *canvas-element*) 1.6))
  (th/render [root] (.getElementById js/document "root"))
  (doto (.getElementById js/document "root")
    (.addEventListener "mousedown" on-mouse-down false))
  (r/render [ui-root]
            (.getElementById js/document "ui-root"))
  (.play music)
  (reset! state {})
  (reset! show-info? true)
  (reset! dead? false)
  (reset! restart? false)
  (reset! escaped? false)
  (load-scene!))


(defn ^:dev/after-load reload []
  (th/render [root]
             (.getElementById js/document "root"))
  (r/render [ui-root]
            (.getElementById js/document "ui-root")))

