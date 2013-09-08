class DropBoxesTable < ActiveRecord::Migration
  def up
    drop_table :boxes
  end

  def down
  end
end
