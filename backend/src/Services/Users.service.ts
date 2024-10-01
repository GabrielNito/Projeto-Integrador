import { UserRepository } from '../Repositories/Users.repository';

export class UsersService {
  private _userRepository = new UserRepository();

  async getAllUsers() {
    return await this._userRepository.findMany();
  }

  async getUserById(id: number) {
    return await this._userRepository.findById(id);
  }
}
