import { CreateUsersDTO } from '../Dtos/create/CreateUsers.dto';
import { UserRepository } from '../Repositories/Users.repository';

export class UsersService {
  private _userRepository = new UserRepository();

  async createUser(data: CreateUsersDTO) {
    const { likedPosts, likedThreads, badges } = data;

    const newData: CreateUsersDTO = {
      ...data,
      likedPosts: JSON.stringify(likedPosts) || '',
      likedThreads: JSON.stringify(likedThreads) || '',
      badges: JSON.stringify(badges) || '',
    };

    const { password, ...created } = await this._userRepository.create(newData);
    return created;
  }

  async getAllUsers() {
    return await this._userRepository.findMany();
  }

  async getUserById(id: number) {
    return await this._userRepository.findById(id);
  }
}
