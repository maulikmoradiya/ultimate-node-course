const path = require('path')

let extension = path.extname("C:\\xampp\\htdocs\\Courses\\Node.js\\maulik.txt")
let baseName = path.basename("C:\\xampp\\htdocs\\Courses\\Node.js\\maulik.txt")
let resolve = path.resolve("C:\\xampp\\htdocs\\Courses\\Node.js\\maulik.txt")

console.log('extension',extension)
console.log('basename', baseName)
console.log('resolve', resolve)
console.log('current working file path', __filename)