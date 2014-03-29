# This file is copied to spec/ when you run 'rails generate rspec:install'
ENV["RAILS_ENV"] ||= 'test'
require File.expand_path("../../config/environment", __FILE__)
require 'rspec/rails'
require 'rspec/autorun'
require 'capybara/rspec'
require 'database_cleaner'
# DatabaseCleaner.strategy = :truncation
# Capybara.app_host = "http://todomvc.com"
# Requires supporting ruby files with custom matchers and macros, etc,
# in spec/support/ and its subdirectories.
Dir[Rails.root.join("spec/support/**/*.rb")].each { |f| require f }

RSpec.configure do |config|
  # ## Mock Framework
  #
  # If you prefer to use mocha, flexmock or RR, uncomment the appropriate line:
  #
  # config.mock_with :mocha
  # config.mock_with :flexmock
  # config.mock_with :rr

  # Remove this line if you're not using ActiveRecord or ActiveRecord fixtures
  config.fixture_path = "#{::Rails.root}/spec/fixtures"

  # If you're not using ActiveRecord, or you'd prefer not to run each of your
  # examples within a transaction, remove the following line or assign false
 # instead of true.
 #  config.use_transactional_fixtures = false
  config.use_transactional_fixtures = false

 #  config.before :each do
 #    DatabaseCleaner.start
 #  end
 #  config.after :each do
 #    DatabaseCleaner.clean
 #  end

  # If true, the base class of anonymous controllers will be inferred
  # automatically. This will be the default behavior in future versions of
  # rspec-rails.
  config.infer_base_class_for_anonymous_controllers = false

  # Run specs in random order to surface order dependencies. If you find an
  # order dependency and want to debug it, you can fix the order by providing
  # the seed, which is printed after each run.
  #     --seed 1234
#   config.order = "random"
end

# Helper script to trigger keypresses in specs

# left = 37
# up = 38
# right = 39
# down = 40
# TODO: Why doesn't this work? :(
def simulate_keypress(keycode)
  puts "simulating keypress"
  keypress_script ="var evt = document.createEvent('KeyboardEvent');" +
    "evt.initKeyEvent ('keypress', true, true, window, 0, 0, 0, 0," +
    "#{keycode}, #{keycode})"
    page.driver.browser.execute_script(keypress_script)
end
