import Notifications from '../Entitites/notifications.entity';

export class NotificationsRepository {

  async create(data: { title: string }) {
    return await Notifications.create({
      data: {
        title: data.title,
      },
    });
  }

  async findMany() {
    return await Notifications.findMany({
      include: { users: { select: { userId: true } } },
    });
  }

  async findManyById(id: number) {
    return await Notifications.findUnique({
      where: { id },
      include: { users: { select: { userId: true } } }

    })
  }

  async delete(id: number) {
    return await Notifications.delete({
      where: { id },
    })
  }

}
