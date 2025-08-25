import { Sequelize } from 'sequelize';
import createNotificationModel from '../models/Notification';

//  Initialize Sequelize instance properly
const sequelize = new Sequelize('notification_db', 'root', 'Aman2000', {
  host: '127.0.0.1',
  dialect: 'mysql', 
  logging: false,  
});

//  Initialize the model with Sequelize
const Notification = createNotificationModel(sequelize);

// Define input type
interface NotificationInput {
  process: string;
  event: string;
  role: string;
  code: string;
  user_name?: string;
  notification_type?: string;
  action?: string;
  detail_page_link?: string;
  archive_policy?: string;
  is_read?: boolean;
}

//  Get all notifications (most recent first)
export const getNotifications = async () => {
  return Notification.findAll({ order: [['createdAt', 'DESC']] });
};

// Create a new notification
export const createNotification = async (data: NotificationInput) => {
  return Notification.create(data);
};

//  Mark a specific notification as read
export const markNotificationRead = async (id: number) => {
  const [updatedCount] = await Notification.update(
    { is_read: true },
    { where: { id } }
  );
  return updatedCount > 0;
};

//  Mark all notifications as read
export const markAllRead = async () => {
  await Notification.update({ is_read: true }, { where: {} });
};

//  Delete a specific notification
export const deleteNotification = async (id: number) => {
  const deletedCount = await Notification.destroy({ where: { id } });
  return deletedCount > 0;
};

// Delete all notifications
export const deleteAllNotifications = async () => {     // 
  await Notification.destroy({ where: {} });
};
