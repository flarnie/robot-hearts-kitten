class RootController < ApplicationController

  def home
    @level_one = Level.find_by_level_order(1)
    render :home
  end

  def credits
    render :credits
  end

end
