import express from 'express';
import 'reflect-metadata';
import { MyDataSource } from './ormconfig';
import userRoutes from './routes/user.routes';
import { setupSwagger } from './utils/swagger';

const app = express();

app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

MyDataSource.initialize()
  .then(() => {
    app.use(express.json());
    app.use('/api', userRoutes);

    setupSwagger(app);

    app.listen(3000, () => {
      console.log('Server is running on port 3000');
      console.log('Swagger docs available at http://localhost:3000/api-docs');
    });
  })
  .catch((error) => console.log('TypeORM connection error: ', error));


export { app }; // Export for testing purposes
