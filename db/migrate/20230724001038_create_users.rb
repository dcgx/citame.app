class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :uuid
      t.string :first_name
      t.string :last_name
      t.string :picture_url
      t.string :phone_number
      t.string :email
      t.timestamp :email_verified_at
      t.timestamp :last_login_at
      t.timestamp :deleted_at

      t.timestamps
    end
  end
end