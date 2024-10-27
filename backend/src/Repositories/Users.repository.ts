import { CreateUsersDTO } from '../Dtos/create/CreateUsersDTO.dto';
import { UpdateUserDTO } from '../Dtos/update/UpdateUserDTO.dto';
import users from '../Entities/users.entity';
export class UserRepository {
  async findMany() {
    return await users.findMany({
      include: {
        allowedNotifications: true,
        createdPosts: true,
        createdThreads: true,
        visits: true,
      },
    });
  }

  async findById(id: number) {
    return await users.findUnique({
      where: { id },
      include: {
        allowedNotifications: true,
        createdPosts: true,
        createdThreads: true,
        visits: true,
      },
    });
  }

  async findByEmail(email: string) {
    return await users.findUnique({
      where: { email },
      include: {
        allowedNotifications: true,
        createdPosts: true,
        createdThreads: true,
        visits: true,
      },
    });
  }

  async create(data: CreateUsersDTO) {
    return await users.create({
      data,
    });
  }

  async update(data: UpdateUserDTO) {
    const { id } = data;
    return await users.update({
      where: { id },
      data,
    });
  }

  async delete(id: number, status: string) {
    return await users.update({
      where: { id },
      data: { status },
    });
  }
}
