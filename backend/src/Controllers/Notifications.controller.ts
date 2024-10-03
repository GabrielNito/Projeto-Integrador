import { NextFunction, Request, Response } from 'express';
import { NotificationsService } from '../Services/Notifications.service';

export class NotificationsController {
  private _notificationService: NotificationsService;

  constructor() {
    this._notificationService = new NotificationsService();
  }

  createNotification = async (req: Request, res: Response, next: NextFunction) => {
    const { title } = req.body;
    try {
      const data = await this._notificationService.createNotification({ title });
      res.status(201).json({
        message: 'Created Successfully',
        data,
      });
    } catch (error) {
      next(error);
    }
  };


  getAllNotifications = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this._notificationService.getAllNotifications();
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

  deleteNotification = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    try {
      await this._notificationService.deleteNotification(id);
      res.status(200).json({
        message: 'Notification deleted successfully'
      })
    }catch(error){
      next(error);
    }
  }
}
