import { Express } from 'express';
import request from 'supertest';
import { initializeApp } from '../tests/test-setup'; // Ajusta la ruta según tu estructura de proyecto
import { MyDataSource } from '../src/ormconfig';
import { User } from '../src/entities/user.entity';

let app: Express;
let createdUsers: User[] = [];

beforeAll(async () => {
  app = await initializeApp();
});

afterEach(async () => {
  // Eliminar solo los usuarios creados durante la prueba
  const userRepository = MyDataSource.getRepository(User);
  for (const user of createdUsers) {
    await userRepository.remove(user);
  }
  createdUsers = [];
});

afterAll(async () => {
  await MyDataSource.destroy();
});

describe('User API', () => {
  it('should create a user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        date_of_birth: '2000-01-01',
        accept_terms_of_service: true,
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.first_name).toBe('John');

    // Guardar el usuario creado para eliminarlo después
    const userRepository = MyDataSource.getRepository(User);
    const user = await userRepository.findOneBy({ email: 'john.doe@example.com' });
    if (user) {
      createdUsers.push(user);
    }
  });

  it('should fail to create a user with missing first_name', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        last_name: 'Doe',
        email: 'john.doe@example.com',
        date_of_birth: '2000-01-01',
        accept_terms_of_service: true,
      });

    expect(response.status).toBe(400);
    expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({ property: 'first_name' })]));
  });

  it('should fail to create a user with invalid email', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        first_name: 'John',
        last_name: 'Doe',
        email: 'invalid-email',
        date_of_birth: '2000-01-01',
        accept_terms_of_service: true,
      });

    expect(response.status).toBe(400);
    expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({ property: 'email' })]));
  });

  it('should fail to create a user with duplicate email', async () => {
    const user = {
      first_name: 'Jane',
      last_name: 'Doe',
      email: 'jane.doe@example.com',
      date_of_birth: '2000-01-01',
      accept_terms_of_service: true,
    };

    // Create the first user
    let response = await request(app).post('/api/users').send(user);

    // Guardar el usuario creado para eliminarlo después
    const userRepository = MyDataSource.getRepository(User);
    const createdUser = await userRepository.findOneBy({ email: 'jane.doe@example.com' });
    if (createdUser) {
      createdUsers.push(createdUser);
    }

    // Try to create another user with the same email
    response = await request(app).post('/api/users').send(user);

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Email already exists');
  });
});
