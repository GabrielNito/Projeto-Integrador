import users from '../Entitites/users.entity';
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
}
