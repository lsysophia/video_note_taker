class Video < ApplicationRecord
    has_many :user_notes
    belongs_to :user
end
