var gulp = require('gulp'),//gulp基础库
  concat = require('gulp-concat'),//合并文件
  cssmin = require('gulp-minify-css'),//压缩css
  htmlmin = require("gulp-htmlmin"),//压缩html
  jsmin = require('gulp-uglify'),//压缩js
  rename = require('gulp-rename'),//重命名文件
  clean = require("gulp-clean"),//清理目录
  replace = require('gulp-replace'),//文本替换
  processhtml = require('gulp-processhtml'),//处理html文件
  addsrc = require('gulp-add-src'),//添加额外的文件流
  option = {
    buildPath: "../dist"//构建目录
  };
//构建目录清理
gulp.task("clean", function (done) {
  //return cache.clearAll(done);
  return gulp.src(option.buildPath, {
    read: false
  })
    .pipe(clean({force: true}));

})

//图片拷贝
gulp.task("imgcopy", function () {
  gulp.src("../img/**/*")
    .pipe(gulp.dest(option.buildPath + '/img/'))
})

//js文件压缩
gulp.task('jsmin', function () {
  gulp.src(["../js/**/**/*.js",'!../js/libs/*.js'])
    .pipe(jsmin())
    .pipe(gulp.dest(option.buildPath+ "/js/"))
});

//需要合并和压缩的文件
gulp.task('concat', function () {
  gulp.src(['../js/libs/angular.min.js','../js/libs/*.js', '!../js/libs/bridge*.js'])
    .pipe(concat('libs.min.js'))
    .pipe(jsmin())
    .pipe(addsrc('../js/libs/bridge*.js'))
    .pipe(jsmin())
    .pipe(gulp.dest(option.buildPath + "/js/libs/"))
});

gulp.task("processhtml", function () {
  var date = new Date().getTime();
  gulp.src('../main.html')
    .pipe(replace(/_VERSION_/gi, date))
    .pipe(processhtml())
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(option.buildPath + '/'))
})

//压缩css
gulp.task("cssmin", function () {
  gulp.src("../style/*.css")
    .pipe(cssmin())
    .pipe(gulp.dest(option.buildPath + '/style'))
})

//压缩html文件
gulp.task("htmlmin", function () {
  gulp.src('../views/**/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(option.buildPath + '/views'))
})

// 默认任务 清空图片、样式、js并重建 运行语句 gulp
gulp.task('default', ['clean'], function () {
  gulp.start('jsmin', 'cssmin', 'processhtml', "htmlmin", 'imgcopy', 'concat');
});
