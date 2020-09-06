source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.1'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.0.3', '>= 6.0.3.2'
# Use postgresql as the database for Active Record
gem 'pg', '>= 0.18', '< 2.0'
# Use Puma as the app server
gem 'puma', '~> 4.1'
# Use SCSS for stylesheets
gem 'sass-rails', '>= 6'
# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem 'webpacker', '~> 5.2.1'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.7'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
gem 'bcrypt', '~> 3.1'
# Paginate
gem 'kaminari', '~> 1.1'
# Search Gem
gem 'ransack', '~> 2.3'
# Show Schema
gem 'annotate', '~> 3.0'
# Show Error Message better
gem 'better_errors', '~> 2.5'
# Can Use irb at Error
gem 'binding_of_caller', '~> 0.8'
# Check Security
gem 'brakeman', '~> 4.6'
# Check N + 1 Problem
gem 'bullet', '~> 6.0'
# Check rails_best_practices
gem 'rails_best_practices', '~> 1.19'
# Show Rails Console better
gem 'awesome_print', '~> 1.8'
# Show Server Time
gem 'rack-mini-profiler', '~> 1.1', require: false
# Create local database.yml
gem 'config', '~> 2.0'
# Use Active Storage variant
gem 'image_processing', '~> 1.2'
# Add metatags for SEO
gem 'meta-tags'
# Notify Slack
gem 'slack-notifier', '~> 2.3'
# Show Action Text Image
# gem 'slim-rails', '~> 3.2'
# Notify error
gem 'exception_notification'
# Add sitemap
gem 'sitemap_generator'
# Run scheduled code
gem 'whenever', require: false
# Add breadcrumb
gem 'gretel'
# Use GCS
gem 'google-cloud-storage', '~> 1.8', require: false

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.4.2', require: false

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  # Easy installation and use of web drivers to run system tests with browsers
  gem 'webdrivers'
end
