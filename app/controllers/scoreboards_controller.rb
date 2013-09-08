class ScoreboardsController < ApplicationController

  def index
    @scoreboards = ScoreBoard.all
  end
  
  def show
    @scoreboard = ScoreBoard.find(params[:id])
  end

end
