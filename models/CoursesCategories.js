module.exports = (sequalize, DataTypes) => {
  const CoursesCategories = sequalize.define('CourseCategories', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'course_categories',
    timestamps: true
  });

  return CoursesCategories;
}