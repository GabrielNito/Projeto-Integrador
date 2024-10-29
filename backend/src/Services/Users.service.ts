import { Request } from 'express';
import { CreateUsersDTO } from '../Dtos/create/CreateUsersDTO.dto';
import { UpdateUserDTO } from '../Dtos/update/UpdateUserDTO.dto';
import { UserRepository } from '../Repositories/Users.repository';
import { encryptPassword } from '../utils/encryptPassword.utils';

export class UsersService {
  private _userRepository = new UserRepository();

  async getAllUsers() {
    const data = await this._userRepository.findMany();

    const newData = data.map((user) => {
      let { likedPosts, likedThreads, ...result } = user;
      let parsedLikedPosts = JSON.parse(likedPosts || '[]');
      let parsedLikedThreads = JSON.parse(likedThreads || '[]');

      const newUser = {
        ...result,
        likedPosts: parsedLikedPosts,
        likedThreads: parsedLikedThreads,
      };

      return newUser;
    });

    return newData;
  }

  async getUserById(id: number) {
    const data = await this._userRepository.findById(id);
    if (!data) {
      throw Error('User not found');
    }
    let parsedLikedPosts = JSON.parse(data?.likedPosts || '[]');
    let parsedLikedThreads = JSON.parse(data?.likedThreads || '[]');

    return {
      ...data,
      likedPosts: parsedLikedPosts,
      likedThreads: parsedLikedThreads,
    };
  }

  async getUserByEmail(email: string) {
    const data = await this._userRepository.findByEmail(email);
    let parsedLikedPosts = JSON.parse(data?.likedPosts || '[]');
    let parsedLikedThreads = JSON.parse(data?.likedThreads || '[]');
    return {
      ...data,
      likedPosts: parsedLikedPosts,
      likedThreads: parsedLikedThreads,
    };
  }

  async createUser(data: CreateUsersDTO) {
    const { likedPosts, likedThreads } = data;
    const user = await this.getUserByEmail(data.email);

    data.password = await encryptPassword(data.password);

    if (user) {
      throw Error('Email já cadastrado');
    }

    const newData: CreateUsersDTO = {
      ...data,
      likedPosts: JSON.stringify(likedPosts) || '',
      likedThreads: JSON.stringify(likedThreads) || '',
    };

    const { password: undefined, ...created } = await this._userRepository.create(
      newData
    );
    return created;
  }

  async updateUser(data: UpdateUserDTO) {
    console.log(data.id, typeof data.id);
    const user = await this._userRepository.findById(data.id);

    if (!user) {
      throw Error('User not found');
    }

    if (data.password) {
      data.password = await encryptPassword(data.password);
    }

    const { password: undefined, ...updated } = await this._userRepository.update(data);
    return updated;
  }

  async deleteUser(req: Request) {
    const userId = Number(req.params.id);
    const userFromToken = req.user;

    const user = await this._userRepository.findById(userId);

    if (user?.status === 'inactive') {
      throw Error('User is already inactive');
    }
    if (
      !userFromToken?.role ||
      (userFromToken?.role !== 'Administrator' && userId !== userFromToken?.id)
    ) {
      throw Error('Operation not allowed');
    }

    const deleteUser = await this._userRepository.delete(userId, 'inactive');

    return deleteUser;
  }
}
