class Table2::Abundance < ApplicationRecord
  belongs_to :blast, class_name: "Table2::Blast"
  belongs_to :arg, class_name: "Table2::Arg"
  belongs_to :sample, class_name: "Table2::Sample"
end