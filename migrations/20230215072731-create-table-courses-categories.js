'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * 
     */
    await queryInterface.createTable('course_categories', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
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

    // await queryInterface.addConstraint('course_categories', {
    //   type: 'unique',
    //   fields: ['name'],
    //   name: 'UNIQUE_COURSE_CATEGORIES_NAME'
    // })

    // await queryInterface.addConstraint('course_categories', {
    //   type: 'foreign key',
    //   name: 'COURSES_COURSE_CATEGORIES',
    //   fields: ['id'],
    //   references: {
    //     table: 'courses',
    //     field: 'course_category_id'
    //   }
    // });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * 
     */
    await queryInterface.dropTable('course_categories');
  }
};
