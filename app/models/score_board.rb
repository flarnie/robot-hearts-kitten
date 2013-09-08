class ScoreBoard < ActiveRecord::Base
  attr_accessible :level_id
  belongs_to :level, :class_name => "Level", :foreign_key => "level_id"
  has_many :scores, :class_name => "Score", :foreign_key => :score_board_id
end
