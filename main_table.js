const Sequelize = require('sequelize');

// Replace with your database credentials
const sequelize = new Sequelize('postgres', 'postgres', '1111', {
  host: 'localhost',
  dialect: 'postgres',
});

// Define the Users model with the "role" column
const Users = sequelize.define('Users', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true, // Enforcing email uniqueness
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  role: {
    type: Sequelize.STRING, // Define the "role" column
    allowNull: false,
  },
  enrolled: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
}, {
  timestamps: true, // Add createdAt and updatedAt timestamps
});

async function createDatabase() {
  try {
    await sequelize.sync({ force: true }); // Creates database and tables if they don't exist
    console.log('Database and Users table created successfully!');
  } catch (error) {
    console.error('Error creating database:', error);
  }
}

createDatabase();
