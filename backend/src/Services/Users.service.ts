import { CreateUsersDTO } from '../Dtos/create/CreateUsers.dto';
import { UserRepository } from '../Repositories/Users.repository';
import { encryptPassword } from '../utils/encryptPassword.utils';

export class UsersService {
  private _userRepository = new UserRepository();

  async getAllUsers() {
    return await this._userRepository.findMany();
  }

  async getUserById(id: number) {
    return await this._userRepository.findById(id);
  }

  async getUserByEmail(email: string) {
    return await this._userRepository.findByEmail(email);
  }

  async createUser(data: CreateUsersDTO) {
    const { likedPosts, likedThreads, badges } = data;
    const encryptedPassword = await encryptPassword(data.password);
    const user = await this.getUserByEmail(data.email);
    if (user) {
      throw Error('Email já cadastrado');
    }

    const newData: CreateUsersDTO = {
      ...data,
      password: encryptedPassword,
      likedPosts: JSON.stringify(likedPosts) || '',
      likedThreads: JSON.stringify(likedThreads) || '',
      badges: JSON.stringify(badges) || '',
    };

    const { password: undefined, ...created } = await this._userRepository.create(
      newData
    );
    return created;
  }
}
