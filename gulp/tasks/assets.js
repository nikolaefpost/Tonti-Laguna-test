
export  const assets = () => {
    return app.gulp.src(app.path.src.svg, {sourcemaps: true})
        .pipe(app.gulp.dest(app.path.build.pic))
        .pipe(app.plugins.browsersync.stream())
}