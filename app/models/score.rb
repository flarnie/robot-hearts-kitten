class Score < ActiveRecord::Base
  COOKIE_VAL = 10
  
  attr_accessible :cookies, :score_board_id, :time, :username
  validates :cookies, :presence => true
  validates :score_board_id, :presence => true
  validates :time, :presence => true
  validate :username, :presence => true
  
  belongs_to :scoreboard, :class_name => "Scoreboard", :foreign_key => "score_board_id"
end
