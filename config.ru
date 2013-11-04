require './main'
run Sinatra::Application

environment = Sprockets::Environment.new
environment.append_path 'public/main.js'