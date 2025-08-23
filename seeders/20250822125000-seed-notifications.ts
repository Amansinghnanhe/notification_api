'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('notifications', [
      {
        category_id: 1,
        title: 'Inventory Update',
        message: 'Stock for product #543 has been updated.',
        link: '/inventory/543',
        is_read: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 1,
        title: 'Inventory Update',
        message: 'Stock for product #543 has been updated.',
        link: '/inventory/543',
        is_read: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 2,
        title: 'Payout Processed',
        message: 'Your payout of $240 has been processed.',
        link: '/payouts/2025-08-10',
        is_read: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 3,
        title: 'Scheduled Maintenance',
        message: 'Platform will undergo maintenance.',
        link: '/system/maintenance',
        is_read: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 4,
        title: 'Flash Sale is Live!',
        message: 'Enjoy up to 50% off.',
        link: '/promotions/flash-sale',
        is_read: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 5,
        title: 'Support Ticket Resolved',
        message: 'Your ticket #43902 has been marked as resolved.',
        link: '/support/tickets/43902',
        is_read: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 6,
        title: 'Password Change Required',
        message: 'Please update your password.',
        link: '/account/security',
        is_read: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 7,
        title: 'New Product Review',
        message: 'You received a new review on product #3901.',
        link: '/reviews/product/3901',
        is_read: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('notifications', null, {});
  }
};
