import { UserRepository } from '../Repositories/Users.repository';

export class UsersService {
  private _userRepository = new UserRepository();

  async createUser(data: {
    username: string,
    password: string,
    email: string,
    role: string,
    avatar?: string,
  }) {
    const createData: any = {
      username: data.username,
      password: data.password,
      email: data.email,
      role: data.role,
      badges: JSON.stringify([]),
      likedPosts: JSON.stringify([]),
      likedThreads: JSON.stringify([]),
      avatar: data.avatar ?? null
    };
    return await this._userRepository.create(createData);
  }

  async getAllUsers() {
    return await this._userRepository.findMany();
  }

  async getUserById(id: number) {
    return await this._userRepository.findById(id);
  }
}
