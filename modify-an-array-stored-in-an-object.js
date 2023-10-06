let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
  for (const userKey in userObj) {
    if (userKey === "data") {
      for (const dataKey in userObj[userKey]) {
        if (dataKey === "friends") {
          userObj[userKey][dataKey].push(friend);
          return userObj[userKey][dataKey];
        }
        
      }
    }
  }
  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));