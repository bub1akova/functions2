// BEGIN
const getGirlFriends = (users) => {
    const friends = [];
    users.forEach((user) => {
        friends.push(user.friends)
    });
    return friends.flat().filter(friend => friend.gender == 'female')
}
export default getGirlFriends
// END