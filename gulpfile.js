import gulp from "gulp";

import {path} from "./gulp/config/path.js"

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}

import {copy} from "./gulp/tasks/copy.js";
import {reset} from "./gulp/tasks/reset.js";
import {html} from "./gulp/tasks/html.js";
import {plugins} from "./gulp/config/plugins.js";
import {server} from "./gulp/tasks/server.js";
import {scss} from "./gulp/tasks/scss.js";
import {js} from "./gulp/tasks/js.js";
import {assets} from "./gulp/tasks/assets.js"
import {otfToTtf, fontsStyle, ttfToWoff} from "./gulp/tasks/fonts.js"

function watcher(){
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.scss, scss)
    gulp.watch(path.watch.js, js)
    gulp.watch(path.watch.pic, assets)
}

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, assets))

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

gulp.task("default", dev);





// const html = () => {
//   return src("src/**.html")
//       .pipe(include({
//           prefix: "@@"
//       }))
//       .pipe(dest("dist"))
// }
//
// exports.default = html;









// import sass from "gulp-sass";
// import csso from "gulp-csso";
// import include from "gulp-file-include";
// import htmlmin from "gulp-htmlmin";
// import del from "del";
// import sync from "browser-sync";


// const {src, dest} = require("gulp");
// const sass = require("gulp-sass");
// const csso = require("gulp-csso");
// const include = require("gulp-file-include");
// const htmlmin = require("gulp-htmlmin");
// const del = require("del");
// const sync = require("browser-sync").create();