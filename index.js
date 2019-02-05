// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(driver){
    const bothNames = driver.name.split(" ")
    return Object.assign({}, {}, {
      firstName:bothNames[0]
      lastName:bothNames[1]
    })
  }
}