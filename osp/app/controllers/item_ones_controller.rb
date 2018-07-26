
class ItemOnesController < ApplicationController
  def index
    if params[:query]
    
    else
      @items = ItemOne.limit(50)
    end
    render json: @items
  end

  def submit_search_job
    job = TableSearchJob.set(wait: 1.second).perform_later(JSON.parse(params[:query]), 1)
    render json: { message: "job successfully queued", job_id: job.job_id}
  end

  def query_search_job_status
    result = Search.find_by(job_id: params["job_id"])
    if result
      result["complete?"]= true
      result.save
      render json: File.read(Rails.root.join(result["search_result"]))
    end
  end

  def autocomplete_by_attr
    @items = ItemOne.distinct.pluck(params[:attr])
    if params[:string]
      @items = @items.select{ |item| item.to_s.downcase.include?(params[:string].downcase) }
    end
    
    render json: {attr: params[:attr], col: @items.slice(0,99), table: 1}
  end

  private
  
  def item_params
    params.permit(:attr, :search, :string)
  end
  
end
