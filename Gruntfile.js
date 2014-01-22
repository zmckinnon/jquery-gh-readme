module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [ 'node_modules/marked/lib/marked.js', 'jquery.gh-readme.js' ],
        dest: 'build/jquery.gh-readme.full.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> v<%= pkg.version %> */\n'
      },
      build: {
        src: 'build/jquery.gh-readme.full.js',
        dest: 'build/jquery.gh-readme.min.js'
      }
    },
    mocha: {
      test: {
        src: [ 'tests/**/*.html' ],
        options: {
          run: true
        }
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-mocha');

  // Default tasks
  grunt.registerTask('default', ['concat', 'uglify', 'mocha']);

};