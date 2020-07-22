// Code your solution here
function findMatching (array, name){
    return array.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(array, letters){
    let length = letters.length
    return array.filter(driver => driver.substring(0, length) === letters)
}

function matchName(array, name){
    return array.filter(driver => driver.name === name)
}