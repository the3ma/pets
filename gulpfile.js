// Initialize modules
var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var serve = require('gulp-serve');


// Sass task: compiles the style.scss file into style.css
gulp.task('sass', function() {
    return gulp.src('app/scss/**/**/*.scss')
        .pipe(sass()) // compile SCSS to CSS
        .pipe(cssnano()) // minify CSS
        .pipe(concat('vetPart.css'))
        .pipe(gulp.dest('public/dist/css')); // put final CSS in dist folder
});

// JS task: concatenates and uglifies JS files to script.js
gulp.task('js', function() {
    return gulp.src([
            'app/js/plugins/*.js',
            'app/js/vendors/bootstrap/*.js',
            'app/js/*.js'
        ])
        .pipe(concat('vetPart.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/dist/js'));
});

// Watch task: watch SCSS and JS files for changes
gulp.task('watch', function() {
    gulp.watch('app/scss/**/**/*.scss', gulp.series('sass'));
    gulp.watch('app/js/**/*.js', gulp.series('js'));
});
// SERV
gulp.task('serve', serve('public'));

// Default task
gulp.task('build', gulp.series('sass', 'js', 'watch'));