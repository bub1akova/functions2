import _ from 'lodash';

// BEGIN
const average = (...num) => {
    if(num.length === 0) return null
    let sum = 0
    num.forEach(el => {
        sum += el
    })
    return sum/num.length
}
export default average
// END