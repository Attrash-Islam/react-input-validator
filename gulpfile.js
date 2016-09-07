/**
 * Created by isattrash on 9/7/16.
 */
var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

var paths = {
    libDir: 'Client/src/InputValidator/',
    libFile: 'InputValidator.js',
    libBuildFile: 'InputValidator.es5.js'
};

gulp.task('build', function() {
    return gulp.src(paths.libDir + paths.libFile)
        .pipe(babel())
        .on('error', console.error.bind(console))
        .pipe(concat(paths.libBuildFile, {
            newLine: ';'
        }))
        .pipe(gulp.dest(paths.libDir));
});
