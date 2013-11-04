require 'pg'
require 'pry'
require 'twitter'
require 'sinatra'
require 'sinatra/reloader' if development?
require 'sinatra/activerecord'

Dotenv.load

# no database -- do I need this?
set :database { adapter:  'postgresql',
                host:     'localhost'}

class Tweejax < ActiveRecord::Base
end