module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);
	// Project configuration.
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		bower : {
			install : {
				options : {
					targetDir : 'src'
				}
			}
		},
		chromeManifest : {
			dist : {
				options : {
					background : {
						exclude : [
							'src/chromereload.js'
						]
					}
				},
				src : 'src',
				dest : 'build'
			}
		},
		copy : {
			main : {
				files : [{
						expand : true,
						src : ['**', '!chromereload.js'],
						cwd : 'src/',
						dest : 'build/',
					}
				],
			}
		},
		uglify : {
			build : {
				options : {
					screwIE8 : true,
					banner : '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
					'<%= grunt.template.today("yyyy-mm-dd") %> | Licensed under the MIT license*/\n'
				},
				files : [{
						flatten : true,
						expand : true,
						src : [
							'src/*.js',
							'!src/chromereload.js',
							'!src/supporter.js',
							'!src/supporter_after_tree.js',
							'!src/announcementModal.js',
							'!src/infoInIndexPlat.js'
						],
						dest : 'build/'
					}
				]
			}
		},
		clean : ["build/*"],
		jshint : {
			options : {
				"esnext" : true,
				"browser" : true,
				"devel" : true,
				"evil" : true,
				"loopfunc" : true,
				"lastsemic" : true
			},
			src : ["src/*.js"]
		},
		watch : {
			js : {
				files : [
					'src/*.js',
					'src/*.json'
				],
				tasks : [
					'chrome_extension_reload'
				]
			}
		},
		bump : {
			options : {
				files : ['package.json', 'bower.json', 'src/manifest.json'],
				updateConfigs : [],

				commit : true,
				commitMessage : 'Release %VERSION%',
				commitFiles : ['package.json'],
				createTag : true,
				tagName : '%VERSION%',
				tagMessage : 'Version %VERSION%',
				push : true,
				pushTo : 'upstream',
				gitDescribeOptions : '--tags --always --abbrev=1 --dirty=-d',

				globalReplace : false,
				prereleaseName : false,
				regExp : false
			}
		},
		zip : {
			'using-cwd' : {
				cwd : 'build/',
				src : ['build/**'],
				dest : 'NCUE-Lectures-Notifier-latest.zip'
			}
		},
		update_json : {
			options : {
				src : 'package.json',
				indent : '\t'
			},
			bowera : {
				src : 'package.json',
				dest : 'bower.json',
				fields : 'name version description repository'
			},
			manifest : {
				src : 'package.json',
				dest : '/src/manifest.json',
				fields : ['name', 'version', 'description', 'homepage > homepage_url']
			}
		},
		jsonlint : {
			sample : {
				src : ['package.json', 'bower.json', 'src/manifest.json']
			}
		},
		watch : {
			scripts : {
				files : ['src/*.*'],
				tasks : ['jshint'],
				options : {
					spawn : false,
					livereload : {
						port : 35729
					}
				},
			},
		}
	});

	grunt.registerTask('default', ['jsonlint', 'jshint', 'clean', 'bower', 'copy', 'chromeManifest', 'uglify']);
	grunt.registerTask('release', "Bump and pack to zip.", function (type) {
		grunt.task.run['bump:#{type||"patch"}', 'default', 'zip']
	});
	grunt.registerTask('publish', []);

	grunt.event.on('watch', function (action, filepath, target) {
    
		grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
	});
};
