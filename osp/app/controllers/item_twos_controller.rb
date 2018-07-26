require 'csv'
require 'benchmark'
class ItemTwosController < ApplicationController

  def index
    render json: ItemTwo.search(JSON.parse params)
  end
  
  def submit_search_job
    job = TableSearchJob.set(wait: 1.second).perform_later(JSON.parse(params[:query]), 2)
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

  def view
    @search = ""
  end
  
  def autocomplete_by_attr
    @items = ItemTwo.search_dictionaries(autocomplete_items: params[:attr] )

    if params[:string]
      @items = @items.select{ |item| item.to_s.downcase.include?(params[:string].downcase) }.slice(0, 99)
    end

    if @items.length > 100
      @items = @items.sort.slice(0,99)
    end

    render json: {attr: params[:attr], col: @items, table: 2}
  end

  private
    # Only allow a trusted parameter "white list" through.
    def item_two_params
      params.permit(:attr, :string, :job_id)
    end
end
