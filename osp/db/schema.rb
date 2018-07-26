# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180601061808) do

  create_table "item_ones", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "arg"
    t.string "genome"
    t.string "accession"
    t.string "organismName"
    t.string "assemblyLevel"
    t.string "taxonomicPhylum"
    t.string "taxonomicClass"
    t.string "taxonomicOrder"
    t.string "taxonomicFamily"
    t.string "taxonomicGenus"
    t.string "taxonomicSpecies"
    t.string "strain"
    t.boolean "pathogen"
    t.string "argSubtype"
    t.string "argType"
    t.integer "identity"
    t.float "hitRatio", limit: 24
    t.string "eValueString"
    t.float "eValueCoeff", limit: 24
    t.integer "eValueExp"
    t.string "rank"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "item_twos", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "sample"
    t.string "ecoType"
    t.string "ecoSubtype"
    t.string "identity"
    t.integer "hitLength"
    t.string "eValue"
    t.string "arg"
    t.string "argSubtype"
    t.string "argType"
    t.string "rank"
    t.float "abundance", limit: 24
    t.integer "row"
    t.integer "col"
    t.integer "tableNo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "searches", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
    t.string "search_result"
    t.string "job_id"
    t.boolean "complete?"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
