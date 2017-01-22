var gulp 			= require('gulp');
var cleanCSS        = require('gulp-clean-css');
var uglify 			= require('gulp-uglify');
var concat 			= require('gulp-concat');
var imagemin 		= require('gulp-imagemin');
var flatten 		= require('gulp-flatten');
var runSequence     = require('run-sequence');


gulp.task('styles',function() {
    return gulp.src(['css/bootstrap.css',
        'css/carousel.css',
        'css/custom.css',
        'css/font-awesome.css'])
        .pipe(concat("style.css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts',function()
{
    return gulp.src(['js/swiper.min.js',
        'js/jquery.min.js',
        'js/bootstrap.min.js',
        'js/script.js'])
        .pipe(concat("script.js"))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('images', function() {
    return gulp.src(['images/**/*'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            svgoPlugins: [{removeUnknownsAndDefaults: false}, {cleanupIDs: false}]
        }))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', function() {
    return gulp.src('fonts/**/*')
        .pipe(flatten())
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('watch', function()
{
    gulp.watch('css/**/*.css', ['styles']);
    gulp.watch(['js/**/*.js'], ['scripts'])

});

gulp.task('default', function(callback){
    runSequence('styles','scripts', 'images', 'fonts', callback);
});

