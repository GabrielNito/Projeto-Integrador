import { CreateUsersDTO } from '../Dtos/create/CreateUsersDTO.dto';
import { UpdateUserDTO } from '../Dtos/update/UpdateUserDTO.dto';
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
    const user = await this.getUserByEmail(data.email);

    data.password = await encryptPassword(data.password);

    if (user) {
      throw Error('Email já cadastrado');
    }

    const newData: CreateUsersDTO = {
      ...data,
      likedPosts: JSON.stringify(likedPosts) || '',
      likedThreads: JSON.stringify(likedThreads) || '',
      badges: JSON.stringify(badges) || '',
    };

    const { password: undefined, ...created } = await this._userRepository.create(
      newData
    );
    return created;
  }

  async updateUser(data: UpdateUserDTO) {
    if (data.password) {
      data.password = await encryptPassword(data.password);
    }

    const { password: undefined, ...updated } = await this._userRepository.update(data);
    return updated;
  }
}
