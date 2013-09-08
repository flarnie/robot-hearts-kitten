class Level < ActiveRecord::Base
  attr_accessible :level_order, :title, :grid_width, :grid_height
  validates :level_order, :presence => true, :numericality => { :only_integer => true }
  validates :grid_width, :grid_height, :presence => true, :numericality => { :only_integer => true }
  has_many :boxes, :class_name => "Box", :foreign_key => :level_id
  has_many :scoreboards, :class_name => "ScoreBoard", :foreign_key => :level_id
  
  def clear_boxes
    self.boxes.each do |box|
      box.contents = nil
      box.save!
    end
  end
  
  def place_random_kitten()
    self.clear_boxes
    random_kitten = rand(self.boxes.length)
    puts random_kitten
    self.boxes[random_kitten].contents = "kitten"
    self.boxes[random_kitten].save!
  end
  
end
