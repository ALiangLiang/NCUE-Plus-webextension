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
		copy : {
			main : {
				files : [{
						expand : true,
						src : ['icons/**', 'bootstrap/**', 'jquery/**', 'manifest.json', 'start.js', 'supporter_after_tree.js', 'supporter.js', 'announcementModal.js', 'infoInIndexPlat.js'],
						cwd : 'src/',
						dest : 'build/',
					}
				],
			}
		},
		uglify : {
			options : {
				exceptionsFiles : ['src/announcementModal.js', 'src/infoInIndexPlat.js'],
				screwIE8 : true
			},
			build : {
				flatten : true,
				expand : true,
				src : ['src/*.js', 'src/supporter.js', '!src/start.js', '!src/supporter_after_tree.js', '!src/announcementModal.js', '!src/infoInIndexPlat.js'],
				dest : 'build/',
				ext : ".js"
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
				files : ['package.json', 'bower.json', 'src/manifest.json', 'build/manifest.json'],
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
			bower : {
				src : 'package.json',
				dest : 'bower.json',
				fields : ['name', 'version', 'description', 'repository', 'home', 'license']
			}
		}
	});

	grunt.registerTask('default', ['jshint', 'clean', 'uglify', 'bower', 'copy']);
	grunt.registerTask('release', "Bump and pack to zip.", function (type) {
		grunt.task.run['bump#{type||"patch"}', 'zip']
	});
	grunt.registerTask('publish', []);

	grunt.event.on('watch', function (action, filepath, target) {
		grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
	});
};
