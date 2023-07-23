class Appointment < ApplicationRecord
    validates :name, presence: true
end
