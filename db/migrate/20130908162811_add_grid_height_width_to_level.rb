class AddGridHeightWidthToLevel < ActiveRecord::Migration
  def change
    add_column :levels, :grid_width, :integer
    add_column :levels, :grid_height, :integer
  end
end
