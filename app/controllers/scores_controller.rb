class ScoresController < ApplicationController

  def create
    @score = Score.new(params[:score])
    if @score.save
      render :json => @score
    else
      #TODO: real error handling
      render :json => "error!"
    end
  end

end
