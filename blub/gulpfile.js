let gulp = require("gulp");
let concat = require("gulp-concat");
let watch = require("gulp-watch");

let blubFiles = [
    "./blub/blubModuleFactory.js",
    "./blub/blubModuleManager.js",
    "./blub/blubModule.js",
    "./blub/blub.js"
];

gulp.task("watch", function() {
    gulp.watch("./blub/*.js", ["buildBlub"])
})

gulp.task("buildBlub", function() {
    return gulp.src(blubFiles)
        .pipe(concat("blub.js"))
        .pipe(gulp.dest("./"));
})