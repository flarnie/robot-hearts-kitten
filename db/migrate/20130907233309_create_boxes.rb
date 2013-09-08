class CreateBoxes < ActiveRecord::Migration
  def change
    create_table :boxes do |t|
      t.string :contents
      t.integer :x
      t.integer :y
      t.integer :level_id

      t.timestamps
    end
    add_index :boxes, :level_id
  end
end
