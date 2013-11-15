class ScoresController < ApplicationController

  def create
    @score = Score.new(params[:score])
    if @score.save
      render :json => @score
    else
      flash[:messages] = @score.errors.full_messages
      redirect_to(:back)
    end
  end

end
