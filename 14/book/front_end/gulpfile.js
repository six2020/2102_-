const gulp = require('gulp');
const babel = require('gulp-babel');
const rollup = require('gulp-rollup');
const replace = require('@rollup/plugin-replace')

let entry = './src/server/**/*.js';

// 开发环境
function builddev() {
    return gulp.src(entry)
        .pipe(babel({
            babelrc: false,
            "plugins": ["@babel/plugin-transform-modules-commonjs"]
        }))
        .pipe(gulp.dest('./dist/'))
}

// watch

function watch(){
    gulp.watch(entry, builddev)
}



// 生产环境
function buildprod() {
    return gulp.src(entry)
        .pipe(babel({
            babelrc: false,
            "plugins": ["@babel/plugin-transform-modules-commonjs"]
        }))
        .pipe(gulp.dest('./dist/'))
}

// 清除冗余代码
function buildconfig() {
    return gulp.src(entry)
        .pipe(rollup({
            input: './src/server/config/index.js',

            output: {
                format: 'cjs'
            },

            plugins: [
                replace({
                    'process.env.NODE_ENV': JSON.stringify('production')
                })
            ]
        }))
        .pipe(gulp.dest('./dist/'))
}


let build = null;

if (process.env.NODE_ENV === 'development') {
    build = gulp.series(builddev, watch)
}

if (process.env.NODE_ENV === 'production') {
    build = gulp.series(buildprod, buildconfig)
}



exports.default = build;



