module.exports = function(grunt) {

  // measures the time each task takes
  require('time-grunt')(grunt);

  // load grunt config
  require('load-grunt-config')(grunt, {
    config: {
      banner:  '/*\n' +
               ' * Behave.js\n' +
               ' *\n' +
               ' * Copyright 2013, Jacob Kelley - http://jakiestfu.com/\n' +
               ' * Released under the MIT Licence\n' +
               ' * http://opensource.org/licenses/MIT\n' +
               ' *\n' +
               ' * Github:  http://github.com/iamso/Behave.js/\n' +
               ' * Version: <%= package.version %>\n' +
               ' */'
    }
  });
};
