function printDate()  {
  console.log(new Date());
}
function  printMonth()  {
  console.log(getMonth());
}
function  getBatchInfo(){
    console.log(`Californium, W3D4, the topic for today is Nodejs module system`)
}
module.exports.printDate=printDate;
module.exports.printMonth=printMonth;
module.exports.getBatchInfo=getBatchInfo;
