//In this file we will study about the os model in node js
import os from 'os';

console.log(  os.platform());// is win32
  
console.log(os.arch());// will give the architecture mine is 64


console.log(os.type());// give the type of the laptop mine is window so output is window


console.log("using the totalmen to show the memory: ",os.totalmem() / (1024 * 1024 * 1024));//this will give the memory of the laptop in bytes

console.log("using the hostname() to show the owner: ",os.hostname());// this wil give the host name my la[top name is swaraj ]


console.log("using realease() to give the version: ",os.release());// give the latest operating system version

console.log("my laptop is on continously from ",os.uptime() , "seconds");



console.log("using the freemem to show the freespace: ",os.freemem() / (1024 * 1024 * 1024));//this will give the memory of the laptop in bytes

console.log("cpu has ",os.cpus().length , "cores");

