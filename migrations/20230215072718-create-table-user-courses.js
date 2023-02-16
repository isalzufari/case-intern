'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_courses', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      users_id: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      course_id: {
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

    await queryInterface.addConstraint('user_courses', {
      type: 'foreign key',
      name: 'USER_COURSES_USERS',
      fields: ['users_id'],
      references: {
        table: 'users',
        field: 'id'
      }
    });

    await queryInterface.addConstraint('user_courses', {
      type: 'foreign key',
      name: 'USER_COURSES_COURSES',
      fields: ['course_id'],
      references: {
        table: 'courses',
        field: 'id'
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_courses');
  }
};
