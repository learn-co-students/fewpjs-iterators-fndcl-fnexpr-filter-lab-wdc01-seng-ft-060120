
const findMatching = ( drivers, str ) => {
  return drivers.filter( driver => driver.toLowerCase() === str.toLowerCase() )
}

const fuzzyMatch = ( drivers, str ) => {
  return drivers.filter( d => d.toLowerCase().startsWith(str.toLowerCase()))
}

const matchName = ( drivers, str ) => {
  return drivers.filter( driver => driver.name === str )
}