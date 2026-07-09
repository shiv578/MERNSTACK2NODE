//In this file we will study about the os model in node js
import os from 'os';

console.log( "\nThe platform of the laptop is:\n-- ", os.platform(),"\n");// is win32
  
console.log("\nThe architecture of tha laptop is: \n --",os.arch());// will give the architecture mine is 64


console.log("\nlaptop type is: \n--",os.type());// give the type of the laptop mine is window so output is window


console.log("\nusing the totalmen to show the memory:\n --",os.totalmem() / (1024 * 1024 * 1024));//this will give the memory of the laptop in bytes

console.log("\nusing the hostname() to show the owner: \n --",os.hostname());// this wil give the host name my la[top name is swaraj ]


console.log("\nusing realease() to give the version: \n--",os.release());// give the latest operating system version

console.log("\nmy laptop is on continously from \n -- ",os.uptime() , "seconds");



console.log("\nusing the freemem to show the freespace: \n--",os.freemem() / (1024 * 1024 * 1024));//this will give the memory of the laptop in bytes

console.log("\ncpu has \n--",os.cpus().length , "cores");

console.log("\nuser info \n--",os.userInfo().length );
console.log("\nnetweok interface \n--",os.networkInterfaces().length);



