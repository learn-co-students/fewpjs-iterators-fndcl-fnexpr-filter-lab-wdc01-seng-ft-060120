// Code your solution here

const findMatching = (drivers, string) => {
    return drivers.filter(array => array.toLowerCase() === string.toLowerCase()
    )
}

const fuzzyMatch = (drivers, string) => {
    return drivers.filter(array => array.toLowerCase().indexOf(string.toLowerCase()) === 0 )
}

const matchName = (drivers, string) => {
    return drivers.filter(array => array.name === string)
}