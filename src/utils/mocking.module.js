import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';

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

export const generateMockPets = (count) => {
  const pets = [];
  for (let i = 0; i < count; i++) {
    pets.push({
      name: faker.person.firstName(), // Use a random first name as pet name
      specie: faker.animal.type(),    // Use animal type for species
      birthDate: faker.date.past({ years: 10 }).toISOString().split('T')[0],
      image: faker.image.urlPicsumPhotos({ width: 200, height: 200 }),
      adopted: false,
    });
  }
  return pets;
};