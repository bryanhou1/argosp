class ItemOneSerializer < ActiveModel::Serializer
  attributes :id, :arg, :genome, :accession, :organismName, :assemblyLevel, :taxonomicPhylum, :taxonomicClass, :taxonomicOrder, :taxonomicFamily, :taxonomicGenus, :taxonomicSpecies, :strain, :pathogen, :argSubtype, :argType, :identity, :hitRatio, :eValue
  def eValue
    object.eValueString.to_f
  end

end
