# This file is copied to spec/ when you run 'rails generate rspec:install'
ENV["RAILS_ENV"] ||= 'test'
require File.expand_path("../../config/environment", __FILE__)
require 'rspec/rails'
require 'rspec/autorun'
require 'capybara/rspec'
require 'database_cleaner'
require 'capybara/poltergeist'

# Transactional fixtures do not work with Poltergeist tests, because Capybara
# uses a separate server thread, which the transactions would be hidden
# from. We hence use DatabaseCleaner to truncate our test database.
require 'database_cleaner'

# Sets up phantomJS as the JS driver for integration testing
Capybara.register_driver :poltergeist do |app|
  Capybara::Poltergeist::Driver.new(app, :js_errors => true, :inspector => true)
end

Capybara.javascript_driver = :poltergeist

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

# ------ Helper Functions -----

# Helper script to trigger keypresses in specs

# left = :Left
# up = :Up
# right = :Right
# down = :Down
def press_key(key_str)
  find('body').native.send_keys(key_str)
end

