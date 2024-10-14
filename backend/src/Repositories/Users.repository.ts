import users from '../Entities/users.entity';
export class UserRepository {

  async create(data: {
    username: string,
    password: string,
    email: string,
    role: string,
    likedPosts: string,
    likedThreads: string,
    avatar?: string,
    badges: string,
  }) {
    return await users.create({
      data: {
        username: data.username,
        password: data.password,
        email: data.email,
        role: data.role,
        likedPosts: data.likedPosts, 
        likedThreads: data.likedThreads, 
        avatar: data.avatar ?? null, 
        badges: data.badges,
      },
    })
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
