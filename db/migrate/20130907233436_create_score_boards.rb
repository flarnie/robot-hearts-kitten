class CreateScoreBoards < ActiveRecord::Migration
  def change
    create_table :score_boards do |t|
      t.integer :level_id

      t.timestamps
    end
    add_index :score_boards, :level_id
  end
end
