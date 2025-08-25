import {
  DataTypes,
  Sequelize,
  Model,
  Optional
} from 'sequelize';

interface NotificationAttributes {
  id: number;
  process: string;
  event: string;
  role: string;
  code: string;
  user_name?: string;
  notification_type?: string;
  action?: string;
  detail_page_link?: string;
  archive_policy?: string;
  is_read: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// Optional fields during creation
interface NotificationCreationAttributes
  extends Optional<NotificationAttributes, 'id' | 'is_read'> {}

class Notification
  extends Model<NotificationAttributes, NotificationCreationAttributes>
  implements NotificationAttributes {
  public id!: number;
  public process!: string;
  public event!: string;
  public role!: string;
  public code!: string;
  public user_name?: string;
  public notification_type?: string;
  public action?: string;
  public detail_page_link?: string;
  public archive_policy?: string;
  public is_read!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Optional: define associations here
  static associate(_models: any) {
    // Define associations if needed
  }
}

// Sequelize model initialization function
export default (sequelize: Sequelize): typeof Notification => {
  Notification.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      process: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      event: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      notification_type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      action: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      detail_page_link: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      archive_policy: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      is_read: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: 'notifications',
      timestamps: true,
    }
  );

  return Notification;
};
