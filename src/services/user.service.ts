import { MyDataSource } from '../ormconfig';
import { User } from '../entities/user.entity';

export class UserService {
  private userRepository = MyDataSource.getRepository(User);

  async createUser(data: Partial<User>): Promise<User> {
    const user = this.userRepository.create(data);
    return await this.userRepository.save(user);
  }
}
