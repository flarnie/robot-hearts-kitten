class LevelsController < ApplicationController

  def index
    @levels = Level.order("level_order ASC")
  end
  
  def show
    @level = Level.find(params[:id])
  end

end
