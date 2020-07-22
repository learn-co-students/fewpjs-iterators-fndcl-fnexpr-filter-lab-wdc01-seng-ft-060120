// Code your solution here
function findMatching (array, name){
    return array.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(array, letters){
    return array.filter(driver => driver.substring(0, letters.length) === letters)
}

function matchName(array, name){
    return array.filter(driver => driver.name === name)
}