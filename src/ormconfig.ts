import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';

export const MyDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_DATABASE || 'mydatabase',
  entities: [User],
  synchronize: true,
});