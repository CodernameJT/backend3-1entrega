import bcrypt from 'bcrypt';

export const generateMockUsers = (count) => {
  const users = [];
  const roles = ['user', 'admin'];

  for (let i = 0; i < count; i++) {
    const user = {
      first_name: `FirstName${i}`, // Nombre
      last_name: `LastName${i}`,   // Apellido
      email: `user${i}@example.com`,
      password: bcrypt.hashSync('coder123', 10), // Encrypto la password
      role: roles[Math.floor(Math.random() * roles.length)], // agrego Random 'user' or 'admin'
      pets: [], // borro array de pets
    };
    users.push(user);
  }

  return users;
};