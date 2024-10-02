import { NotificationsRepository } from '../Repositories/Notifications.repository';

export class NotificationsService {
  private _notificationRepository = new NotificationsRepository();

  async getAllNotifications() {
    return await this._notificationRepository.findMany();
  }

  async getNotificationById(id: number){
    return await this._notificationRepository.findManyById(id);
  }
}
