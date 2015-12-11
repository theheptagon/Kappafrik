var gulp = require('gulp'),
    sass = require('gulp-ruby-sass')
notify = require("gulp-notify")
bower = require('gulp-bower');
browserSync = require('browser-sync').create();

var config = {
    sassPath: './resources/sass',
    bowerDir: './bower_components'
}

gulp.task('bower', function () {
    return bower().pipe(gulp.dest(config.bowerDir))
});

gulp.task('sass', function () {
    return sass(config.sassPath + '/uicreep.scss', {
            style: 'compressed', // expanded, compressed
            loadPath: [
                './resources/sass',
                config.bowerDir + '/bootstrap-sass/assets/stylesheets'
            ]
        })
        .pipe(gulp.dest('./public/ui/stylesheet'))
        .pipe(browserSync.stream({
            match: '**/*.css'
        }));
});


// Minifying the js
var uglify = require('gulp-uglify');
gulp.task('compress', function () {
    return gulp.src('./resources/jquery/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/ui/javascript'));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
    browserSync.init({
        server: "./public"
    });
    gulp.watch(config.sassPath + '/*.scss', ['sass']);
    gulp.watch("public/*.html").on('change', browserSync.reload);
    gulp.watch('./resources/jquery/*.js', ['compress'], browserSync.reload);
});

gulp.task('default', ['bower', 'sass', 'compress', 'watch']);