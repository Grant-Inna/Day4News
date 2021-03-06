var gulp = require('gulp'),
    sass = require('gulp-sass'),
    csscomb = require('gulp-csscomb'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    uncss = require('gulp-uncss'),
    notify = require("gulp-notify");

gulp.task('css', function() {
    return gulp.src('./style.scss')
        .pipe(sass()) // Turn scss file into css
        .pipe(notify('Turn CSS Success!'))
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 5%']}))
        .pipe(gulp.dest('../assets/css'))
        .pipe(notify('CSS Success!'));
});

gulp.task('responsive.css', function() {
    return gulp.src('./responsive.scss')
        .pipe(sass().on('error', sass.logError)) // Turn scss file into css
        .pipe(notify('Turn Responsive Success!'))
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 5%']}))
        .pipe(gulp.dest('../assets/css'))
        .pipe(notify('Responsive Success!'));
});

gulp.task('bootstrap.css', function() {
    return gulp.src('../assets/css/bootstrap.min.css')
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 5%']}))
        .pipe(gulp.dest('../assets/css'))
        .pipe(notify('bootstrap Success!'));
});

gulp.task('MINcss', function() {
    gulp.src('../assets/css/style.css')
        .pipe(cleanCSS())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest('../assets/css'))
        .pipe(notify('MINcss Success!'));
});

gulp.task('watch_scss', function() {
    gulp.watch('./style.scss', ['css']);
    gulp.watch('./_variables.scss', ['css']);
    gulp.watch('./responsive.scss', ['responsive.css']);
    gulp.watch('../assets/css/bootstrap.min.css', ['bootstrap.css']);
    gulp.watch('./log_in_form.scss', ['bootstrap.css']);
});
gulp.task('watch_min', function() {
    gulp.watch('../assets/css/style.css', ['MINcss'])
});

gulp.task('default', ['css', 'responsive.css', 'bootstrap.css', 'MINcss', 'watch_scss', 'watch_min']);



gulp.task('comb', function() {
    gulp.src('./style.scss')
        .pipe(csscomb())
        .pipe(gulp.dest('./'))
        .pipe(notify('cssComb Success!'));
});
gulp.task('unCssBoot', function () {
    return gulp.src('../css/bootstrap.min.css')
        .pipe(uncss({
            html: ['../../*.html']
        }))
        .pipe(gulp.dest('../css/'));
});
gulp.task('unCss', function () {
    return gulp.src('./style.scss')
        .pipe(uncss({
            html: ['../../*.html']
        }))
        .pipe(gulp.dest('./'));
});