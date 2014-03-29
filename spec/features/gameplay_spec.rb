require 'spec_helper'

describe "Playing level 1" do
  it "loads the page with 0 cookies to start", :js => true do
    visit level_path(1)
    expect(page).to have_content "COOKIES: 0"
  end
end
