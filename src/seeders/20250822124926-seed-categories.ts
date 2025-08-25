'use strict';



module.exports = {
  async up(queryInterface:any, Sequelize:any) {
    await queryInterface.bulkInsert('notifications', [
      {
        process: 'PO',
        event: 'New PO',
        role: 'Supplier',
        code: '3330',
        user_name: 'Jainie',
        notification_type: 'Notification',
        action: 'Mark as read/Delete',
        detail_page_link: 'PO Detail Page of 305879',
        archive_policy: 'Soft Delete for 30 days and delete after that',
        is_read: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        process: 'PO',
        event: 'New PO',
        role: 'Supplier',
        code: '3330',
        user_name: 'Jay-Ann',
        notification_type: 'Notification',
        action: 'Mark as read/Delete',
        detail_page_link: 'PO Detail Page of 305879',
        archive_policy: null,
        is_read: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        process: 'PO',
        event: 'New PO',
        role: 'Store',
        code: '11007',
        user_name: 'Vivian',
        notification_type: 'Notification',
        action: 'Mark as read/Delete',
        detail_page_link: 'PO Detail Page of 305879',
        archive_policy: null,
        is_read: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        process: 'PO',
        event: 'New PO',
        role: 'Store',
        code: '11007',
        user_name: 'Ron',
        notification_type: 'Notification',
        action: 'Mark as read/Delete',
        detail_page_link: 'PO Detail Page of 305879',
        archive_policy: null,
        is_read: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        process: 'DS',
        event: 'Create',
        role: 'Store',
        code: '11007',
        user_name: 'Vivian',
        notification_type: 'Notification',
        action: 'Mark as read/Delete',
        detail_page_link: 'Delivery Schedule',
        archive_policy: null,
        is_read: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        process: 'DS',
        event: 'Create',
        role: 'Store',
        code: '11007',
        user_name: 'Ron',
        notification_type: 'Notification',
        action: 'Mark as read/Delete',
        detail_page_link: 'Delivery Schedule',
        archive_policy: null,
        is_read: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        process: 'DS',
        event: 'Resubmit',
        role: 'Supplier',
        code: '3330',
        user_name: 'Jainie',
        notification_type: 'Notification',
        action: 'Mark as read/Delete',
        detail_page_link: 'Delivery Schedule',
        archive_policy: null,
        is_read: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        process: 'DS',
        event: 'Resubmit',
        role: 'Supplier',
        code: '3330',
        user_name: 'Jay-Ann',
        notification_type: 'Notification',
        action: 'Mark as read/Delete',
        detail_page_link: 'Delivery Schedule',
        archive_policy: null,
        is_read: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        process: 'DS',
        event: 'Approve',
        role: 'Supplier',
        code: '3330',
        user_name: 'Jainie',
        notification_type: 'Notification',
        action: 'Mark as read/Delete',
        detail_page_link: 'Delivery Schedule',
        archive_policy: null,
        is_read: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        process: 'DS',
        event: 'Approve',
        role: 'Supplier',
        code: '3330',
        user_name: 'Jay-Ann',
        notification_type: 'Notification',
        action: 'Mark as read/Delete',
        detail_page_link: 'Delivery Schedule',
        archive_policy: null,
        is_read: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        process: 'GRN',
        event: 'Delivered',
        role: 'Supplier',
        code: '3330',
        user_name: 'Jainie',
        notification_type: 'Notification',
        action: 'Mark as read/Delete',
        detail_page_link: 'Goods Receipt Detail',
        archive_policy: null,
        is_read: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        process: 'GRN',
        event: 'Delivered',
        role: 'Supplier',
        code: '3330',
        user_name: 'Jay-Ann',
        notification_type: 'Notification',
        action: 'Mark as read/Delete',
        detail_page_link: 'Goods Receipt Detail',
        archive_policy: null,
        is_read: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        process: 'Payment',
        event: 'Payment Processed',
        role: 'Supplier',
        code: '3330',
        user_name: 'Jainie',
        notification_type: 'Notification',
        action: 'Mark as read/Delete',
        detail_page_link: 'Check Details',
        archive_policy: null,
        is_read: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        process: 'Payment',
        event: 'Payment Processed',
        role: 'Supplier',
        code: '3330',
        user_name: 'Jay-Ann',
        notification_type: 'Notification',
        action: 'Mark as read/Delete',
        detail_page_link: 'Check Details',
        archive_policy: null,
        is_read: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface:any, Sequelize:any) {
    await queryInterface.bulkDelete('notifications', null, {});
  }
};

