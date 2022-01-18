
// Initialize modules
const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const browsersync = require('browser-sync').create()

sass.compiler = require('dart-sass')

// Sass Task
function scssTask() {
  return src('src/style/sass/style.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('src/style/css'))
}

// Browsersync
function browserSyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: '.'
    },
    notify: {
      styles: {
        top: 'auto',
        bottom: '0'
      }
    }
  })
  cb()
}
function browserSyncReload(cb) {
  browsersync.reload()
  cb()
}

// Watch Task
function watchTask() {
  watch('*.html', browserSyncReload)
  watch(['src/style/sass/**/*.scss'], series(scssTask, browserSyncReload))
}

// Default Gulp Task
exports.default = series(scssTask, browserSyncServe, watchTask)

// Build Gulp Task
exports.build = series(scssTask)