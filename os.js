const os = require('os')

console.log(os.arch())  // tells architecture (x32 or x64)
console.log(os.platform())  // tells platform in which you are working

console.log(os.networkInterfaces())
console.log('cpu details',os.cpus())
console.log('type',os.type())
console.log('total memory',os.totalmem())
console.log('free memory',os.freemem())