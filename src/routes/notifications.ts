// src/routes/notifications.ts

import { Router } from 'express';
import * as notificationService from '../services/notificationService';

const router = Router();

// GET all notifications
router.get('/notifications', async (_req, res) => {
  try {
    const notifications = await notificationService.getNotifications();
    res.status(200).json(notifications);
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
});

// POST a new notification
router.post('/notifications', async (req, res) => {
  const {
    process,
    event,
    role,
    code,
    user_name,
    notification_type,
    action,
    detail_page_link,
    archive_policy,
    is_read,
  } = req.body;

  // Validate required fields
  if (!process || !event || !role || !code) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const newNotification = await notificationService.createNotification({
      process,
      event,
      role,
      code,
      user_name,
      notification_type,
      action,
      detail_page_link,
      archive_policy,
      is_read: is_read ?? false,
    });

    res.status(201).json({
      message: 'Notification created',
      id: newNotification.id,
    });
  } catch (error) {
    console.error('Error creating notification:', error);
    res.status(500).json({ error: 'Failed to create notification' });
  }
});

// PATCH mark a single notification as read
router.patch('/notifications/:id/read', async (req, res) => {
  const id = Number(req.params.id);

  try {
    const updated = await notificationService.markNotificationRead(id);

    if (!updated) {
      return res.status(404).json({ error: 'Notification not found' });
    }

    res.json({ message: 'Notification marked as read' });
  } catch (error) {
    console.error('Error updating notification:', error);
    res.status(500).json({ error: 'Failed to update notification' });
  }
});

// PATCH mark all notifications as read
router.patch('/notifications/read/all', async (_req, res) => {
  try {
    await notificationService.markAllRead();
    res.json({ message: 'All notifications marked as read' });
  } catch (error) {
    console.error('Error updating notifications:', error);
    res.status(500).json({ error: 'Failed to update notifications' });
  }
});

// DELETE a notification by ID
router.delete('/notifications/:id', async (req, res) => {
  const id = Number(req.params.id);

  try {
    const deleted = await notificationService.deleteNotification(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Notification not found' });
    }

    res.json({ message: 'Notification deleted' });
  } catch (error) {
    console.error('Error deleting notification:', error);
    res.status(500).json({ error: 'Failed to delete notification' });
  }
});

// DELETE all notifications
router.delete('/notifications', async (_req, res) => {
  try {
    await notificationService.deleteAllNotifications();
    res.json({ message: 'All notifications deleted' });
  } catch (error) {
    console.error('Error deleting all notifications:', error);
    res.status(500).json({ error: 'Failed to delete all notifications' });
  }
});

export default router;
