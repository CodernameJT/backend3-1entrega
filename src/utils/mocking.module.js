import bcrypt from 'bcrypt';

export const generateMockUsers = (count) => {
  const users = [];
  const roles = ['user', 'admin'];

  for (let i = 0; i < count; i++) {
    const user = {
      first_name: `FirstName${i}`, // Add first_name
      last_name: `LastName${i}`,   // Add last_name
      email: `user${i}@example.com`,
      password: bcrypt.hashSync('coder123', 10), // Encrypt the password
      role: roles[Math.floor(Math.random() * roles.length)], // Randomly assign 'user' or 'admin'
      pets: [], // Empty array for pets
    };
    users.push(user);
  }

  return users;
};