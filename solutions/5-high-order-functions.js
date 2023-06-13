import _ from 'lodash';

// BEGIN
const takeOldest = (users, qty = 1) => {
    const sortedUsers = users.sort((a, b) => Date.parse(a.birthday) - Date.parse(b.birthday));
    const oldestUsers = []
    sortedUsers.forEach((user, index) => {
    if (index < qty) oldestUsers.push(user)
    }) 
    return sortedUsers.slice(0, qty)
}
export default takeOldest
// END