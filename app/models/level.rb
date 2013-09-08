class Level < ActiveRecord::Base
  attr_accessible :level_order, :title, :grid_width, :grid_height, :cookies
  validates :level_order, :presence => true, :numericality => { :only_integer => true }
  validates :grid_width, :grid_height, :presence => true, :numericality => { :only_integer => true }
  has_many :scoreboards, :class_name => "ScoreBoard", :foreign_key => :level_id
  
  def generate_item_array()
    cookie_coords = []
    until cookie_coords.length == self.cookies 
      rand_pt = generate_random_point
      if !(cookie_coords.include?(rand_pt)) 
        cookie_coords << rand_pt
      end
    end
    kitten_coord = nil
    until kitten_coords
      rand_pt = generate_random_point
      if !(cookie_coords.include?(rand_pt))
        kitten_coord = rand_pt
      end
    end
    item_ar = [{ name: "kitten", coords: kitten_coord }]
    cookie_coords.each do |coord|
      item_ar << { name: "cookie", coords: coord }
    end
    item_ar
  end
  
  private
  
  def generate_random_point()
    rx = rand(self.grid_width + 1)
    ry = rand(self.grid_height + 1)
    [rx, ry]    
  end
  
end
