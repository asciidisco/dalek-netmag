module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({

	  connect: {
	    server: {
	      options: {
	        port: 5001,
	        base: 'public'
	      }
	    }
	  }

	});

	grunt.loadNpmTasks('grunt-contrib-connect');
};