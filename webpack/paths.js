const path = require('path')

const root = path.resolve(__dirname, '../')
const src = path.resolve(root, 'src')

module.exports = {
  root,
  src,
  outputPath: path.resolve(root, 'build'),
  assetsPath: path.resolve(root, 'assets'),
  entryPath: path.resolve(src, 'index.tsx'),
  templatePath: path.resolve(src, 'template.html'),
  imagesFolder: 'image',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
}
