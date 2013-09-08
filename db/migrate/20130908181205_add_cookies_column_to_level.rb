class AddCookiesColumnToLevel < ActiveRecord::Migration
  def change
    add_column :levels, :cookies, :integer, :default => 0
  end
end
