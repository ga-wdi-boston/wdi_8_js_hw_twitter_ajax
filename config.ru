require './main'
run Sinatra::Application

require 'sprockets'
  environment = Sprockets::Environment.new
  environment.append_path 'public/main.js'
  run environment