class CreateSearches < ActiveRecord::Migration[5.1]
  def change
    create_table :searches do |t|
      t.string :search_result
      t.string :job_id
      t.boolean :complete?
      t.timestamps
    end
  end
end
