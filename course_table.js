const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');

// Replace with your database credentials
const sequelize = new Sequelize('postgres', 'postgres', '1111', {
  host: 'localhost',
  dialect: 'postgres',
});


const Courses = sequelize.define('Courses', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING
    },
    chapters: {
      type: DataTypes.ARRAY(DataTypes.STRING) // Assuming chapters are stored as an array of strings
    },
    registeredUsersCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
  async function createCoursesTable() {
    try {
      await sequelize.sync({ force: true });
      console.log('Courses table created successfully!');
    } catch (error) {
      console.error('Error creating Courses table:', error);
    }
  }
  
  createCoursesTable();
  