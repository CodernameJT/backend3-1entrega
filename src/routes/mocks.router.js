import { Router } from 'express';
import { generateMockUsers } from '../utils/mocking.module.js';
import { usersService, petsService } from '../services/index.js';
import PetDTO from '../dto/Pet.dto.js';

const router = Router();

// Mock endpoint
router.get('/', (req, res) => {
  res.json({ message: 'This is a mock endpoint!' });
});

// Mocking users endpoint
router.get('/mockingusers', (req, res) => {
  const mockUsers = generateMockUsers(50); // Generate 50 mock users
  res.json(mockUsers);
});

// Generate data endpoint
router.post('/generateData', async (req, res) => {
    try {
      console.log('Request body:', req.body); // Debug log
  
      const { users, pets } = req.body;
  
      if (!users || !pets || isNaN(users) || isNaN(pets)) {
        return res.status(400).send({ status: 'error', error: 'Invalid parameters' });
      }
  
      // Generate and insert mock users
      const mockUsers = generateMockUsers(users);
      for (const user of mockUsers) {
        await usersService.create(user);
      }
  
      // Generate and insert mock pets
      for (let i = 0; i < pets; i++) {
        const mockPet = PetDTO.getPetInputFrom({
          name: `Pet${i}`,
          specie: i % 2 === 0 ? 'Dog' : 'Cat',
          birthDate: '01-01-2020',
        });
        await petsService.create(mockPet);
      }
  
      res.send({ status: 'success', message: 'Mock data generated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: 'error', error: 'Internal server error' });
    }
  });

export default router;