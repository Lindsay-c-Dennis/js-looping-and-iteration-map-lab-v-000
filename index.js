// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const lowerCaseDrivers = drivers.map(function(driver) { return driver.toLowerCase() });
  return lowerCaseDrivers;
}

function nameToAttributes(drivers) {
  const obj = drivers.map(function (driver) {return }) 
  
}

function attributesToPhrase(drivers) {
  const reformattedArray = drivers.map(obj =>{ 
   let rObj = {};
   rObj[obj.key] = obj.value;
   return rObj; });
   
   for (const obj in reformattedArray) {
     return `${obj[key]} is from ${obj[value]}`;
   }
}