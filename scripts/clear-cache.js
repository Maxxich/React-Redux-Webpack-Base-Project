//eslint-disable-next-line
const path = require("path")
//eslint-disable-next-line 
const fs = require("fs")

//eslint-disable-next-line no-undef
const cacheDir = path.resolve(__dirname, "..", "node_modules", ".cache")
fs.rmSync(cacheDir, {  recursive: true, force: true })