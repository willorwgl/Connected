class AddPostTags < ActiveRecord::Migration[5.2]
  def change
    add_column :posts,:post_tags, :integer, array: true, default: []
  end
end
