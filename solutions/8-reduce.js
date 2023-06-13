// BEGIN
const groupBy = (users, key) => {
    let group = {}
    users.forEach(student => {
        let i = student[key]
        if (!group[i]) group[i] = []
        group[i].push(student)
    });
    return group
}
export default groupBy
// END