module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [ 'node_modules/marked/lib/marked.js', 'src/jquery.gh-readme.js' ],
        dest: 'dist/jquery.gh-readme.full.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> v<%= pkg.version %> */\n'
      },
      build: {
        src: 'dist/jquery.gh-readme.full.js',
        dest: 'dist/jquery.gh-readme.min.js'
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