const gulp = require("gulp");
const zip = require("gulp-zip");
//Aqui se maneja el artefacto para compresion de un archivo y despues pasarlo a una carpeta llama dist
//sino existe la carpte la crea automaticamente
exports.default = () =>
  gulp.src("routes/*").pipe(zip("archive.zip")).pipe(gulp.dest("dist"));
