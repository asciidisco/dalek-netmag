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
	  },

	  dalek: {
	    phantom: {
	      src: ['test/pagetitle.js', 'test/clickSelect.js']
	    },
	    chrome: {
	    	options: {
	    		browser: ['chrome']
	    	},
	      	src: ['test/pagetitle.js', 'test/clickSelect.js']	    	
	    }
	  }	  

	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-dalek');

	grunt.registerTask('test', ['connect', 'dalek']);
};