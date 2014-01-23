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
    },
    jshint: {
      files: ['gruntfile.js', 'src/*.js', 'tests/**/*.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },
    bump: {
      options: {
        files: [ 'package.json', 'bower.json' ],
        commit: true,
        commitMessage: 'increment version to %VERSION%',
        commitFiles: [ 'package.json', 'bower.json', 'dist/jquery.gh-readme.min.js' ],
        createTag: true,
        push: true,
        pushTo: 'origin'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-bump');

  grunt.registerTask('default', [ 'concat', 'uglify', 'mocha', 'jshint' ]);
  grunt.registerTask('update-pkg', function () {
    grunt.config.set('pkg', grunt.file.readJSON('package.json'));
    grunt.log.ok('Updated pkg configuration.');
  });
  grunt.registerTask('build', function (versionType) {
    versionType = versionType || 'patch';
    grunt.task.run('bump-only:' + versionType);
    grunt.task.run('update-pkg');
    grunt.task.run('uglify');
    grunt.task.run('bump-commit');
  });
};
