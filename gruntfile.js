//Gruntfile
module.exports = function(grunt) {
	//'use strict'
	grunt.initConfig({
    	//tasks go here
    	//Metadata
    	pkg: grunt.file.readJSON('package.json'),
    	banner: '/*!\n' +
            ' * Bootstrap v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2011-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
            ' */\n',
        jshint: {
  			// define the files to lint
	  		files: ['gruntfile.js', 'app.js'],
	  		// configure JSHint (documented at http://www.jshint.com/docs/)
	  		options: {
	      	// more options here if you want to override JSHint defaults
	    		globals: {
	      			jQuery: true,
	      			console: true,
	      			module: true
	    		}
	  		}
		}	    
    })
	grunt.loadNpmTasks('grunt-contrib-jshint')
	grunt.registerTask('default', ['jshint'])
}