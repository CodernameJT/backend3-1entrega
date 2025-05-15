import { Router } from 'express';
import { generateMockUsers, generateMockPets  } from '../utils/mocking.module.js';
import { usersService, petsService } from '../services/index.js';
import PetDTO from '../dto/Pet.dto.js';
import logger from '../utils/logger.js';

const router = Router();

// Mock endpoint
router.get('/', (req, res) => {
  logger.info('Mock endpoint accessed');
  res.json({ message: 'This is a mock endpoint!' });
});

// Mocking users endpoint
router.get('/mockingusers', (req, res) => {
  const mockUsers = generateMockUsers(50); // Generate 50 mock users
  res.json(mockUsers);
});

// Mocking pets endpoint
router.get('/mockingpets', (req, res) => {
  const mockPets = generateMockPets(100); // Generate 100 mock pets
  res.json(mockPets);
});

// Generate data endpoint
router.post('/generateData', async (req, res) => {
    try {
      logger.info('POST /generateData called');
  
      const { users, pets } = req.body;
  
      if (!users || !pets || isNaN(users) || isNaN(pets)) {
        return res.status(400).send({ status: 'error', error: 'Invalid parameters' });
      }
  
      // Generar e insertar mock users
      const mockUsers = generateMockUsers(users);
      for (const user of mockUsers) {
        await usersService.create(user);
      }
  
      // Generar e insertar mock pets
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
      logger.error(`Error in /generateData: ${error.message}`);
      res.status(500).send({ status: 'error', error: 'Internal server error' });
    }
  });

export default router;