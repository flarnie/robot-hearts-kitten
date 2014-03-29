require 'spec_helper'

describe "Playing level 1" do
  it "loads the page with 0 cookies to start", :js => true do
    visit level_path(1)
    expect(page).to have_content "COOKIES: 0"
  end

  it "can be won by having robot go 35 steps up and 30 steps right", :js => true do
    visit level_path(1)
    35.times do
      simulate_keypress("38")
    end
    30.times do
      simulate_keypress("39")
    end
    expect(page).to have_content "You found the kitten!"
  end
end
