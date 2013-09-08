class RootController < ApplicationController

  def home
    @level_one = Level.find_by_order(1)
    render :home
  end

  def credits
    render :credits
  end

end
