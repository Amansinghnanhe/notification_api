'use strict';

module.exports = {
  async up(queryInterface:any, Sequelize:any) {
    await queryInterface.bulkInsert('notifications', [
      {
        process: 'inventory',
        event: 'update',
        role: 'admin',
        code: 'INV-543',
        user_name: 'JohnDoe',
        notification_type: 'stock',
        action: 'updated',
        detail_page_link: '/inventory/543',
        archive_policy: '30_days',
        is_read: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        process: 'payout',
        event: 'completed',
        role: 'seller',
        code: 'PAY-240',
        user_name: 'JaneDoe',
        notification_type: 'payment',
        action: 'processed',
        detail_page_link: '/payouts/2025-08-10',
        archive_policy: '90_days',
        is_read: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        process: 'system',
        event: 'maintenance',
        role: 'all',
        code: 'SYS-MAINT',
        user_name: null,
        notification_type: 'info',
        action: 'scheduled',
        detail_page_link: '/system/maintenance',
        archive_policy: '7_days',
        is_read: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        process: 'promotion',
        event: 'flash_sale',
        role: 'user',
        code: 'PROMO-50',
        user_name: 'GuestUser',
        notification_type: 'offer',
        action: 'launched',
        detail_page_link: '/promotions/flash-sale',
        archive_policy: '15_days',
        is_read: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        process: 'support',
        event: 'ticket_update',
        role: 'user',
        code: 'SUP-43902',
        user_name: 'Alice',
        notification_type: 'support',
        action: 'resolved',
        detail_page_link: '/support/tickets/43902',
        archive_policy: '60_days',
        is_read: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface:any, Sequelize:any) {
    await queryInterface.bulkDelete('notifications', null, {});
  }
};
