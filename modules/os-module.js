const os = require('os')

//info about current 
const user = os.userInfo()
console.log(user)


// method returns the system uptime in seconds

const uptime = os.uptime()

console.log(`The system uptime is ${uptime} seconds`);

const currentOs =  {

    name:os.type(),
    release : os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem()


}

console.log(currentOs)

