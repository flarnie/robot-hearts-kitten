class FixColumnName < ActiveRecord::Migration
  def change
    rename_column :levels, :order, :level_order
  end

end
