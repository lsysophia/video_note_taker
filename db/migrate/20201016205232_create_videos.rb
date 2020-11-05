class CreateVideos < ActiveRecord::Migration[6.0]
  def change
    create_table :videos do |t|
      t.string :title
      t.string :url
      t.integer :user_id
      t.integer :note_id

      t.timestamps
    end
  end
end
