module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'jquery.gh-readme.js',
        dest: 'jquery.gh-readme.min.js'
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

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-mocha');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'mocha']);

};