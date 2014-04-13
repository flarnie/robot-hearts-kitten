class LevelsController < ApplicationController

  def index
    @levels = Level.order("level_order ASC")
  end

  def show
    @level = Level.find(params[:id])
    #TODO: place_random_kitten before render, clear it after render.
    respond_to do |format|
      format.json { render "levels/show.rabl" }
      #TODO: get rable template to work!
      # format.json { render :json => @level }
      format.html { render :show }
    end
  end

end
