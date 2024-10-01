import { NextFunction, Request, Response } from 'express';
import { NotificationsService } from '../Services/Notifications.service';

export class NotificationsController {
  private _notificationService: NotificationsService;

  constructor() {
    this._notificationService = new NotificationsService();
  }

  getAllNotifications = async (_req: Request, res: Response, next: NextFunction) => {
    const data = await this._notificationService.getAllNotifications();
    res.status(200).json({
      message: 'Success',
      data,
    });
  };
}
