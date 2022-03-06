module.exports = function(grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      sass: {                              // Task
        dist: {                            // Target
          files: {                         // Dictionary of files
            'public/main.css': 'resources/sass/main.scss',       // 'destination': 'source'
          }
        }
      },
      watch: {
        scripts: {
          files: ['**/*.scss'],
          tasks: ['sass'],
        },
      },
    });
  
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    grunt.registerTask('default', ['sass']);
  
  };