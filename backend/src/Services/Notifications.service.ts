import { NotificationsRepository } from '../Repositories/Notifications.repository';

export class NotificationsService {
  private _notificationRepository = new NotificationsRepository();

  async getAllNotifications() {
    return await this._notificationRepository.findMany();
  }
}
