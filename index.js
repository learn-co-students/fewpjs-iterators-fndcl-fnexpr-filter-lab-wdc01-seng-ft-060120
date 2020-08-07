
function findMatching(drivers, string) {
let equal = drivers.filter(name => {
    return name.toLowerCase() === string.toLowerCase()
});
return equal;
}


function fuzzyMatch(drivers, string) {
    // return drivers.filter(driver => driver[0] === string[0])
return drivers.filter(driver =>  driver.startsWith(string))
        
}

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string)
}