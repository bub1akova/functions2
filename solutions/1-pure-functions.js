// BEGIN
const sayPrimeOrNot = (num) => {
    if (num <= 1) return console.log('no')
    for (let i = 2; i <= Math.sqrt(num); i += 1) 
        if (num % i === 0) return  console.log('no')
    console.log('yes')
}
export default sayPrimeOrNot
// END