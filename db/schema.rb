# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130908145407) do

  create_table "boxes", :force => true do |t|
    t.string   "contents"
    t.integer  "x"
    t.integer  "y"
    t.integer  "level_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "boxes", ["level_id"], :name => "index_boxes_on_level_id"

  create_table "levels", :force => true do |t|
    t.integer  "level_order"
    t.string   "title"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "score_boards", :force => true do |t|
    t.integer  "level_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "score_boards", ["level_id"], :name => "index_score_boards_on_level_id"

  create_table "scores", :force => true do |t|
    t.integer  "score_board_id"
    t.integer  "time"
    t.integer  "cookies",        :default => 0
    t.string   "username",       :default => "PlayerOne"
    t.datetime "created_at",                              :null => false
    t.datetime "updated_at",                              :null => false
  end

  add_index "scores", ["score_board_id"], :name => "index_scores_on_score_board_id"

end
