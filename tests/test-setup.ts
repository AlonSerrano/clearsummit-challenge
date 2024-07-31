import { MyDataSource } from '../src/ormconfig';
import { app } from '../src/app';

export const initializeApp = async () => {
  if (!MyDataSource.isInitialized) {
    await MyDataSource.initialize();
  }
  return app;
};
