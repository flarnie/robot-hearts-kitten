class Score < ActiveRecord::Base
  COOKIE_VAL = 10
  
  attr_accessible :cookies, :score_board_id, :time, :username
  validates :cookies, :presence => true
  validates :score_board_id, :presence => true
  validates :time, :presence => true, :numericality => { :integer_only => true }
  validates :username, :presence => true
  
  validate :score_is_not_cheating
  
  belongs_to :scoreboard, :class_name => "Scoreboard", :foreign_key => "score_board_id"
  
  private
  
  def score_is_not_cheating
    if time + COOKIE_VAL * cookies <= 0
      errors.add( :time, "is not possible without more cookies!")
    end  
  end
  
end
