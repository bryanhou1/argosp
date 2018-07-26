require 'csv'
require 'English'
# require 'benchmark'
require 'pp'
namespace :clean do
  desc "Remove temp files generated from short polling"
  task tmp_files: :environment do
    Search.where(complete?: true).destroy_all
    Search.where("created_at < ?", Time.now - 15.minutes).destroy_all
  end

  desc "Remove waste database references from short polling"
  task db: :environment do
    Dir[Rails.root.join("tmp/searches/*")].each do|f| 
      File.delete(f) if (File.ctime(f) < Time.now - 15.minutes)
    end
  end

end
