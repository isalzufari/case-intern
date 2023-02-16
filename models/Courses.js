module.exports = (sequalize, DataTypes) => {
  const Courses = sequalize.define('Courses', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    course_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'courses',
    timestamps: true
  });

  return Courses;
}