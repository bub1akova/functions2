// BEGIN
const getChildren = (users) => {
    const children = []
    users.forEach((user) => {
        user.children.map((child) => {
            children.push(child)
        })
    })
  return children
}
export default getChildren
// END