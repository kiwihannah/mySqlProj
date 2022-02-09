module.exports = (sequelize, Sequelize) => {
  // name, email, password, phone, birthday
  const users = sequelize.define("users", { 
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
    birthday: {
      type: Sequelize.STRING,
    },
  });
  return users;
};
