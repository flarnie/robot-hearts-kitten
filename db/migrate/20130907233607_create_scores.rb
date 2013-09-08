class CreateScores < ActiveRecord::Migration
  def change
    create_table :scores do |t|
      t.integer :score_board_id
      t.integer :time
      t.integer :cookies, :default => 0
      t.string :username, :default => "PlayerOne"

      t.timestamps
    end
    add_index :scores, :score_board_id
  end
end
