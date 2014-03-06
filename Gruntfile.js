module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      basic_and_extras: {
        files: {
          'source/js/foundation-bower.js': [
            '../bower_components/jquery/jquery.js',
            '../bower_components/foundation/js/foundation.min.js'
          ],
          'source/js/modernizr-bower.js': [
            '../bower_components/modernizr/modernizr.js'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat']);
}
