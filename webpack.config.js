const path = require('path')
const buildWebpackConfig = require('./config/build/buildWebpackConfig')

module.exports = (env) => {
  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    build: path.resolve(__dirname, 'build')
  }
  
  const mode = env.mode || 'development'
  const isDev = mode === 'development'
  
  const config = {
    mode,
    isDev,
    paths
  }

  return buildWebpackConfig(config)
}