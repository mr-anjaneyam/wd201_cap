try {
    await sequelize.sync({ force: true });
    console.log('Courses table created successfully!');
  } catch (error) {
    console.error('Error creating Courses table:', error);
  }
  