'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('courses', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      course_category_id: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });

    // await queryInterface.addConstraint('courses', {
    //   type: 'foreign key',
    //   name: 'COURSES_COURSE_CATEGORIES',
    //   fields: ['course_category_id'],
    //   references: {
    //     table: 'course_categories',
    //     field: 'id'
    //   }
    // });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('courses');
  }
};
