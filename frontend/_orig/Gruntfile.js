module.exports = function (grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({

        //========================
        //= LESS-to-CSS compiler =
        //========================
        less: {
            dev: {
                files: {
                    'app.css': 'less/main.less'
                }
            }
        },

        //====================
        //= Dev file watcher =
        //====================
        watch: {
            precompile: {
                files: ['less/**/*.less'],
                tasks: ['less']
            },
            livereload: {
                options: { livereload: true },
                files: ['app.css'],
            },
        }
    });

    //===================
    //= Task definition =
    //===================
    grunt.registerTask('default', ['less', 'watch']);
};
