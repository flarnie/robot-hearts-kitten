object @level
attributes :id, :title, :level_order, :grid_width, :grid_height

child(:boxes) do
  attributes :x, :y, :contents
end