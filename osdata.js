const { LOADIPHLPAPI } = require("dns");
const os = require("os");
const osdata = {
  user: os.userInfo(),
  platform: os.platform(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
  uptime: os.uptime(),
  version: os.version(),
  network: os.networkInterfaces(),
  typeofos: os.type(),
};
console.log(osdata);
