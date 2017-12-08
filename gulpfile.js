"use strict";
const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    concat = require("gulp-concat"),
    wiredep = require('wiredep')({
        directory: './assets/components'
    });
const PATH = wiredep;

const compatability = [
    'last 3 versions',
    'iOS 7'
];

//Compile scss to css
gulp.task('sass', function () {
    return gulp.src('./assets/src/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
                outputStyle: 'compressed',
                includePaths:PATH.scss
            }
        ).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: compatability,
            cascade: false
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./assets/dist/css'));
});

gulp.task('javascript', function (cb) {
    pump([
            gulp.src([
                'assets/components/jquery/dist/jquery.min.js',
                'assets/components/foundation-sites/dist/js/foundation.js',
                'assets/components/slick-carousel/slick/slick.min.js',
                'assets/src/javascript/scripts.js'])
            .pipe(concat('global.js')),
            uglify(),
            gulp.dest('assets/dist/javascript')
        ],
        cb
    );
});

gulp.task('browser-sync', function () {
    browserSync.init(['./*.html', './assets/dist/css/style.css'], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['sass', 'javascript'], function () {
    gulp.watch('./assets/src/scss/**/*.scss', ['sass']);
    gulp.watch('./assets/src/javascript/scripts.js', ['javascript']);
});