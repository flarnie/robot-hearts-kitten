class Level < ActiveRecord::Base
  attr_accessible :level_order, :title, :grid_width, :grid_height, :cookies
  validates :level_order, :presence => true, :numericality => { :only_integer => true }
  validates :grid_width, :grid_height, :presence => true, :numericality => { :only_integer => true }
  has_one :scoreboard, :class_name => "ScoreBoard", :foreign_key => :level_id
  
  def generate_item_array()
    cookie_coords = []
    
    until cookie_coords.length == self.cookies 
      rand_pt = generate_random_point
      if !(cookie_coords.include?(rand_pt)) 
        cookie_coords << rand_pt
      end
    end
    
    kitten_coord = nil
    
    until kitten_coord
      rand_pt = generate_random_point
      if !(cookie_coords.include?(rand_pt))
        kitten_coord = rand_pt
      end
    end
    # puts "KITTEN IS AT: #{kitten_coord}"
    item_ar = []
    
    self.grid_height.times do |y|
      self.grid_width.times do |x|
        if (cookie_coords.include?([x, y]))
          contents = {"contents" => "cookie"}
        elsif (kitten_coord == [x, y])
          contents = {"contents" => "kitten"}
        else
          contents = {"contents" => "nothing"}
        end
        contents["x"] = x
        contents["y"] = y
        item_ar << contents
      end
    end
    
    item_ar
  end
  
  private
  
  def generate_random_point()
    rx = rand(self.grid_width)
    ry = rand(self.grid_height)
    [rx, ry]    
  end
  
end
