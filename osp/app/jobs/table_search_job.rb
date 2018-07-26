class TableSearchJob < ApplicationJob
  queue_as :default

  def perform(queries, item_no)
    new_search = Search.create
    if item_no == 1
      result = ItemOne.search(queries)
    elsif item_no == 2 
      result = ItemTwo.search(queries)
    end
    
    #might need to figure out how to catch errors

    route = "tmp/searches/#{job_id}"
    File.open(Rails.root.join(route), "w") {|f| f.write(result)}
    new_search.assign_attributes(job_id: self.job_id, search_result: route )
    new_search.save
  end
end
