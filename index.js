// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const lowerCaseDrivers = drivers.map(function(driver) { return driver.toLowerCase() });
  return lowerCaseDrivers;
}

function nameToAttributes(drivers) {
  drivers.map(function (drivers) {
    const first = driver.split(" ")[0];
    const last = driver.split(" ")[1];
    return {firstName: first, lastName: last};
  }) ;
  
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