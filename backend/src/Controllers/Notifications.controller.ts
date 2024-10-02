import { NextFunction, Request, Response } from 'express';
import { NotificationsService } from '../Services/Notifications.service';

export class NotificationsController {
  private _notificationService: NotificationsService;

  constructor() {
    this._notificationService = new NotificationsService();
  }

  getAllNotifications = async (_req: Request, res: Response, next: NextFunction) => {
    const data = await this._notificationService.getAllNotifications();
    try {
      res.status(200).json({
        message: 'Success',
        data,
      });
    } catch (error) {
      next(error);
    }
  };

  getNotificationById = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    try {
      const data = await this._notificationService.getNotificationById(id);
      res.status(200).json({
        message: 'Sucess',
        data,
      })
    } catch (error) {
      next(error);
    }
  }
}
