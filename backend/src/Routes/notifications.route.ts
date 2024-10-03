import { Router } from 'express';
import { NotificationsController } from '../Controllers/Notifications.controller';

const router = Router();

const notifications = new NotificationsController();

router.get('/', notifications.getAllNotifications);
router.get('/:id', notifications.getNotificationById);
router.post('/', notifications.createNotification);
router.delete('/:id', notifications.deleteNotification);

export default router;
