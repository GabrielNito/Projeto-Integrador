import Notifications from '../Entitites/notifications.entity';

export class NotificationsRepository {
  async findMany() {
    return await Notifications.findMany({
      include: { users: { select: { userId: true } } },
    });
  }

  async findManyById(id: number) {
    return await Notifications.findUnique({ 
      where: {id},
      include: { users: { select: { userId: true } } }
      
    })
  }
}
