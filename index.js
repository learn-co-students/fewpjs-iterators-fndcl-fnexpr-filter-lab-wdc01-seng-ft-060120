
function findMatching(driversArray, name){
    let match = driversArray.filter(n => {
        return n.toLowerCase() === name.toLowerCase()
    })
    return match
}

function fuzzyMatch(driversArray, letters){
    let fuzmatch = driversArray.filter(n => {
        return n.substring(0, letters.length)=== letters
        // str.startsWith could have also been used
    })
    return fuzmatch
}

function matchName(driversArray, nameString){
    let nameMatch = driversArray.filter(object => {
        return object.name === nameString 
 })
 return nameMatch
}

// function fuzzyMatch(source, testString) {
//     return source.filter( possibleMatch =>
//       possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
//     )
//   }