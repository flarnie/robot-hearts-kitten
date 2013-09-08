# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
ActiveRecord::Base.transaction do
  #Level Generator
  def level_generator(order, grid_width, grid_height) 
    lvl = Level.create!(level_order: order, 
    title: "Level #{order}", 
    grid_width: grid_width,
    grid_height: grid_height )
    grid_width.times do |x|
      grid_height.times do |y|
        Box.create!(level_id: lvl.id, x: x, y: y)
      end
    end
    s_board = ScoreBoard.create!(level_id: lvl.id)
    3.times do |n|
      Score.create!(score_board_id: s_board.id, time: (n + 1 * 60))
    end
  end
  
  #Level 1
  level_generator(1, 1, 1)
  #Level 2
  level_generator(2, 10, 1)
  #Level 3
  level_generator(3, 10, 10)
  
end