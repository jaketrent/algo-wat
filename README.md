Some sweet algos

## js setup

```
# install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

# install install node
nvm install 16

# use node
nvm use 16

# init directory
npm init -y

# install jest
npm i jest

# create code and test
touch code.js
touch code.test.js

# add tests scripts to package.json
"scripts": {
  "test": "node --experimental-vm-modules node_modules/.bin/jest",
  "test:watch": "npm test -- --watch"
},

# run test runner
npm run test:watch
```

## js setup

```
# install rvm
curl -sSL https://get.rvm.io | bash

# install ruby
rvm install 3.0.0

# use ruby
rvm use 3.0.0

# install bundler
gem install bundler

# create Gemfile
bundle init

# add dependencies to Gemfile
gem "rspec"
gem "guard-rspec"

# general Guardfile
bundle exec guard init

# put code in lib
mkdir lib
touch lib/code.rb

# put tests in spec
mkdir spec
touch spec/code_spec.rb

# run test watcher
bundle exec guard
```
