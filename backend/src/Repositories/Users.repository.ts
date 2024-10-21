import { CreateUsersDTO } from '../Dtos/create/CreateUsers.dto';
import users from '../Entities/users.entity';
export class UserRepository {
  async create(data: CreateUsersDTO) {
    return await users.create({
      data,
    });
  }

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
}
