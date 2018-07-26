class ItemOne < ApplicationRecord
  def seperate_e_value
    if self.eValueString == "0"
      self.eValueExp = 0
      self.eValueCoeff = 0
    else
      self.eValueExp = self.eValueString.match( /e(?<exp>.*)/)[:exp]
      self.eValueCoeff = self.eValueString.match( /(?<coeff>.*)e/)[:coeff]
      
    end
    self.save!
  end

  def self.search(queries)

    processed_queries  = queries.except("identity","hitRatio","eValue","ignore_eValue_zero")

    #process ignore_zero option
    ignore_e_value_zero = queries["ignore_eValue_zero"]

    # make sure eValue is in scientific notation
    sci_e_value_str = "%e" % queries["eValue"]
    sci_e_value_num = sci_e_value_str.to_f

    e_value_coeff = sci_e_value_str.match(/(.*)e/)[1].to_f
    e_value_exp = sci_e_value_str.match(/e(.*)/)[1].to_i
    
 
    #set identity and hitRatio queries
    processed_queries["identity"] = queries["identity"].to_i..100
    processed_queries["hitRatio"] = queries["hitRatio"].to_f..1

    if sci_e_value_num == 1
      processed_queries["eValueCoeff"] = 1..Float::INFINITY
      @items = ItemOne.where(processed_queries)
    elsif 0 < sci_e_value_num && sci_e_value_num < 1
      processed_queries["eValueExp"] = -200..e_value_exp
      
      @items = ItemOne.where(processed_queries).reject{ |item|
        item.eValueExp == e_value_exp && e_value_coeff > item.eValueCoeff
      }
    elsif sci_e_value_num == 0
      @items = []
    end

    # add e-value zeroes
    if (!ignore_e_value_zero)
      processed_queries.delete("eValueExp")
      processed_queries["eValueCoeff"] = 0
      @items = @items + ItemOne.where(processed_queries)
    end

    return ActiveModelSerializers::SerializableResource.new(@items).to_json
  end
end
