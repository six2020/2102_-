const gulp = require('gulp')
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

function demo() {
    return gulp.src('./src/index.js')
        .pipe(gulp.dest('dist/scripts/'))
}





function scripts() {
    return gulp.src('./src/**/*.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts/'))
}


function styles() {
    return gulp.src("./src/**/*.less")
        .pipe(less())
        .pipe(concat('bundle.css'))
        .pipe(cleanCSS())
        .pipe(rename({
            basename: 'main',
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/styles/'))
}

function watch(){

    gulp.watch('./src/**/*.js', scripts)
    gulp.watch('./src/**/*.less', styles)
}


// series：串行执行 
let build = gulp.series(scripts, styles)
// let build = gulp.series(a, b, c, d, gulp.parallel(aa, bb, cc))

// parallel： 并行执行 
// let build = gulp.parallel(scripts, styles)



exports.demo = demo

exports.scripts = scripts

exports.styles = styles

exports.watch = watch

// 导出默认任务
exports.default = build

