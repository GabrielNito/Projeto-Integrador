import { Router } from 'express';
import { NotificationsController } from '../Controllers/Notifications.controller';

const router = Router();

const notifications = new NotificationsController();

router.get('/', notifications.getAllNotifications);

export default router;
