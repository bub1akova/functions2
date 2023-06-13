// BEGIN
const convert = (...arr) => {
    return arr.filter(el => el instanceof Array && el.length === 3).map(el => new Date(...el).toDateString())
}
export default convert
// END