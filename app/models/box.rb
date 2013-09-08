class Box < ActiveRecord::Base
  attr_accessible :level_id, :x, :y
  #remember to assign :contents when there is something 'in' the box
  validates :level_id, :presence => true;
  validates :x, :y, :presence => true, :numericality => { :only_integer => true };
  
  belongs_to :level, :class_name => "Level", :foreign_key => "level_id"
  
  
end
