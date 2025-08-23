'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      { name: 'Vendor', icon: '/icons/vendor.png', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Seller', icon: '/icons/seller.png', createdAt: new Date(), updatedAt: new Date() },
      { name: 'System', icon: '/icons/system.png', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Promotional', icon: '/icons/promotion.png', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Support', icon: '/icons/support.png', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Alerts', icon: '/icons/alerts.png', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Review', icon: '/icons/reviews.png', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
