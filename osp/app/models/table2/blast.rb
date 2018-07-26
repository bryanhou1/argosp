class Table2::Blast < ApplicationRecord
  has_many :abundances
  validates_uniqueness_of :identity, :scope => [:hitLength, :eValue]

end
