import { NotificationsRepository } from '../Repositories/Notifications.repository';

export class NotificationsService {
  private _notificationRepository = new NotificationsRepository();

  async createNotification(title: { title:string }) {
    return await this._notificationRepository.create(title);
  }

  async getAllNotifications() {
    return await this._notificationRepository.findMany();
  }

  async getNotificationById(id: number){
    return await this._notificationRepository.findManyById(id);
  }

  async deleteNotification(id: number){
    return await this._notificationRepository.delete(id);
  }

  async updateNotification(id: number, title: string){
    return await this._notificationRepository.update(id, title);
  }
}