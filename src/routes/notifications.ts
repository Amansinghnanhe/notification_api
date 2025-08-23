import { Router } from 'express';
import sequelize from '../db';
import { QueryTypes } from 'sequelize';

const router = Router();

interface NotificationRow {
  catId: number;
  name: string;
  icon: string;
  notificationId: number | null;
  title: string | null;
  message: string | null;
  link: string | null;
  isRead: boolean | null;
}

// GET all notifications grouped by category
router.get('/notifications', async (_req, res) => {
  try {
    // Fetch notifications joined with categories
    const rows = await sequelize.query<NotificationRow>(
      `
      SELECT 
        c.id AS catId,
        c.name,
        c.icon,
        n.id AS notificationId,
        n.title,
        n.message,
        n.link,
        n.is_read AS isRead
      FROM categories c
      LEFT JOIN notifications n ON c.id = n.category_id
      ORDER BY c.id, n.id;
      `,
      {
        type: QueryTypes.SELECT,
      }
    );

    // Group notifications by category name (lowercase)
    const grouped: Record<string, {
      name: string;
      catId: number;
      icon: string;
      notifications: {
        id: number;
        title: string | null;
        message: string | null;
        isRead: boolean;
        link: string | null;
      }[];
    }[]> = {};

    for (const row of rows) {
      const key = row.name.toLowerCase();

      if (!grouped[key]) {
        grouped[key] = [{
          name: row.name,
          catId: row.catId,
          icon: row.icon,
          notifications: []
        }];
      }

      if (row.notificationId !== null) {
        grouped[key][0].notifications.push({
          id: row.notificationId,
          title: row.title,
          message: row.message,
          isRead: !!row.isRead,
          link: row.link
        });
      }
    }

    res.json(grouped);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
});

router.post('/notifications', async (req, res) => {
  const { category_id, title, message, link, isRead } = req.body;

  if (!category_id || !title || !message || !link) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const [result] = await sequelize.query(
      `INSERT INTO notifications (category_id, title, message, link, is_read)
       VALUES (?, ?, ?, ?, ?)`,
      {
        replacements: [category_id, title, message, link, isRead || false]
      }
    );

    res.status(201).json({ message: 'Notification created', id: (result as any).insertId });
  } catch (error) {
    console.error('Error while creating notification:', error);  // Add this
    res.status(500).json({ error: 'Failed to create notification' });
  }
});


// PATCH mark a single notification as read
router.patch('/notifications/:id/read', async (req, res) => {
  const notificationId = req.params.id;

  try {
    const [result] = await sequelize.query(
      `UPDATE notifications SET is_read = true WHERE id = ?`,
      {
        replacements: [notificationId]
      }
    );

    if ((result as any).affectedRows === 0) {
      return res.status(404).json({ error: 'Notification not found' });
    }

    res.json({ message: 'Notification marked as read' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update notification' });
  }
});

// PATCH mark all notifications as read
router.patch('/notifications/read/all', async (_req, res) => {
  try {
    await sequelize.query(`UPDATE notifications SET is_read = true`);
    res.status(200).json({ message: 'All notifications marked as read' });
  } catch (error) {
    console.error('Error updating notifications:', error);
    res.status(500).json({ error: 'Failed to update notifications' });
  }
});

export default router;
