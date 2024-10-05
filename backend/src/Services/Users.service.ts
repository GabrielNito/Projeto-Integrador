import { UserRepository } from '../Repositories/Users.repository';

export class UsersService {
  private _userRepository = new UserRepository();

  async createUser(data: {
    username: string,
    password: string,
    email: string,
    role: string,
    likedPosts?: string[],
    likedThreads?: string[],
    avatar?: string,
    badges: string,
  }) {
    let createData: any = {
      username: data.username,
      password: data.password,
      email: data.email,
      role: data.role,
      badges: data.badges,
      likedPosts: JSON.stringify([]),
      likedThreads: JSON.stringify([]),
    };
    if (data.avatar !== undefined) {
      createData.avatar = data.avatar;
    }

    return await this._userRepository.create(createData);
  }

  async getAllUsers() {
    return await this._userRepository.findMany();
  }

  async getUserById(id: number) {
    return await this._userRepository.findById(id);
  }
}
