module.exports = (sequalize, DataTypes) => {
  const UserCourses = sequalize.define('UserCourses', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    users_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'user_courses',
    timestamps: true
  });

  return UserCourses;
}