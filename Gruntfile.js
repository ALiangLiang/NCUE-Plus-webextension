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
      chrome : {
        options : {
          background : {
            target : 'background.js',
            exclude : [
              'chromereload.js',
            ]
          },
          removeFields : ['key']
        },
        src : 'src',
        dest : 'platform/chrome'
      },
      firefox : {
        options : {
          background : {
            target : 'background.js',
            exclude : [
              'chromereload.js',
            ]
          },
          removeFields : ['key', 'content_security_policy'],
          overwrite : {
            "applications" : {
              "gecko" : {
                "id" : "{ce09feb6-4590-4f60-a766-b85d6557a89e}",
                "strict_min_version" : "47.0"
              }
            },
            "content_scripts" : [{
                "js" : ["breakOnlyIEBlockade.js", "captchaReco.js", "createLoginBtn.js", "putAd.js"],
                "matches" : [
                  "*://*.ncue.edu.tw/*/*.*",
                  "*://*.ncue.edu.tw/*/"
                ]
              }, {
                "css" : ["bootstrap/bootstrap.min.css"],
                "js" : [
                  "jquery/jquery.min.js",
                  "bootstrap/bootstrap.min.js",
                  "announcementModal.js",
                  "advancedAnnouncement_main.js",
                  "infoInIndexPlat.js",
                  "infoInIndex.js"
                ],
                "matches" : [
                  "*://*.ncue.edu.tw/*/*.*",
                  "*://*.ncue.edu.tw/*/"
                ],
                "run_at" : "document_end"
              }, {
                "all_frames" : true,
                "js" : ["advancedAnnouncement_child.js"],
                "matches" : ["*://*.ncue.edu.tw/information/News/left_news.html"],
                "run_at" : "document_start"
              }, {
                "all_frames" : true,
                "js" : ["printTimetable.js"],
                "css" : ["printTimetable.css"],
                "matches" : ["*://*.ncue.edu.tw/*/*/*.htm"]
              }, {
                "all_frames" : true,
                "js" : ["start.js"],
                "matches" : [
                  "*://*.ncue.edu.tw/*/",
                  "*://*.ncue.edu.tw/*/*.aspx",
                  "*://*.ncue.edu.tw/other/ob/OB010.aspx*"
                ],
                "run_at" : "document_start"
              }, {
                "all_frames" : true,
                "js" : ["supporter.js"],
                "matches" : ["*://*.ncue.edu.tw/*"],
                "run_at" : "document_start"
              }, {
                "all_frames" : true,
                "js" : ["supporter_after.js"],
                "matches" : ["*://*.ncue.edu.tw/STU/C/SC010.aspx?*", "*://*.ncue.edu.tw/STU/C/SC020.aspx?*"],
                "run_at" : "document_end"
              }, {
                "all_frames" : true,
                "js" : ["supporter_after_tree.js"],
                "matches" : [
                  "*://*.ncue.edu.tw/ST/SYS/Frame_Menu.aspx",
                  "*://*.ncue.edu.tw/WP/SYS/Frame_Menu.aspx"
                ],
                "run_at" : "document_end"
              }
            ]
          }
        },
        src : 'src',
        dest : 'platform/firefox'
      }
    },
    copy : {
      chrome : {
        files : [{
            expand : true,
            src : ['**', '!chromereload.js'],
            cwd : 'src/',
            dest : 'platform/chrome/',
          }
        ],
      },
      firefox : {
        files : [{
            expand : true,
            src : ['**', '!chromereload.js'],
            cwd : 'src/',
            dest : 'platform/firefox/',
          }
        ],
      }
    },
    uglify : {
      options : {
        screwIE8 : true,
        banner : '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> | Licensed under the MIT license*/\n'
      },
      chrome : {
        expand : true,
        cwd : 'src',
        src : [
          '*.js',
          '!announcementModal.js',
          '!chromereload.js',
          '!supporter.js',
          '!supporter_after.js',
          '!supporter_after_tree.js',
          '!infoInIndexPlat.js'
        ],
        dest : 'platform/chrome/'
      },
      firefox : {
        expand : true,
        cwd : 'src',
        src : [
          '*.js',
          '!announcementModal.js',
          '!chromereload.js',
          '!supporter.js',
          '!supporter_after.js',
          '!supporter_after_tree.js',
          '!infoInIndexPlat.js'
        ],
        dest : 'platform/firefox/'
      }
    },
    clean : {
      chrome : ["platform/chrome/*"],
      firefox : ["platform/firefox/*"]
    },
    jshint : {
      options : {
        "esnext" : true,
        "browser" : true,
        "devel" : true,
        "evil" : true,
        "loopfunc" : true,
        "lastsemic" : true
      },
      src : ["src/*.js", "!src/putAd.js"]
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
        pushTo : 'origin',
        gitDescribeOptions : '--tags --always --abbrev=1 --dirty=-d',

        globalReplace : false,
        prereleaseName : false,
        regExp : false
      }
    },
    zip : {
      'chrome' : {
        cwd : 'platform/chrome/',
        src : ['platform/chrome/**'],
        dest : 'NCUE-Edu.-System-Supporter-latest.zip',
        compression : 'DEFLATE'
      },
      'firefox' : {
        cwd : 'platform/firefox/',
        src : ['platform/firefox/**'],
        dest : 'NCUE-Edu.-System-Supporter-latest.xpi',
        compression : 'DEFLATE'
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
      main : {
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

  const platforms = ['chrome', 'firefox'];

  function build(platform) {
    if (!platform) {
      for (var i in platforms)
        build(platforms[i]);
      return;
    }
    var nougly = grunt.option('nougly') || false;
    grunt.log.writeln('***** build ' + platform + ' version *****');
    var tasks = ['jsonlint', 'jshint', 'clean:' + platform, 'bower', 'copy:' + platform, 'chromeManifest:' + platform, 'zip:' + platform];
    if (!nougly)
      tasks.splice(6, 0, 'uglify:' + platform);
    grunt.task.run(tasks);
  }

  grunt.registerTask('default', build);
  grunt.registerTask('build', build);
  grunt.registerTask('release', "Bump and pack to zip.", function (type) {
    grunt.task.run(['bump:#{type||"patch"}', 'default', 'zip']);
  });
  grunt.registerTask('publish', []);

  grunt.event.on('watch', function (action, filepath, target) {

    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });
};
