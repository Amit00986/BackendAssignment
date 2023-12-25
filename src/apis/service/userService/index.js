const User = require('../../models/index');

const getUsers = async (name, sortBy, sortOrder, page, pageSize) => {
  let query = {};

  if (name) {
    query.name = { $regex: new RegExp(name, 'i') };
  }

  const sortOptions = {};
  if (sortBy) {
    sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;
  }

  const users = await User.find(query)
    .sort(sortOptions)
    .skip((page - 1) * pageSize)
    .limit(parseInt(pageSize));

  return users;
};


// const createRandomUsers = async () => {
//   const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Harry', 'Ivy', 'Jack'];
//   const uniqueIds = new Set();

//   while (uniqueIds.size < 20) {
//     const name = names[Math.floor(Math.random() * names.length)];
//     const age = Math.floor(Math.random() * 30) + 20; 
//     const uniqueId = Math.random().toString(36).substring(2); 

//     if (!uniqueIds.has(uniqueId)) {
//       const newUser = new User({
//         name,
//         age,
//         uniqueId,
//       });

//       await newUser.save();
//       uniqueIds.add(uniqueId);
//     }
//   }

//   console.log('Users created successfully');
// };

// createRandomUsers();

module.exports = {
  getUsers,
};
