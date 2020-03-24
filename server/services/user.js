//import User model from models/index.js file
const { User, Resume } = require("../models");

// User service file includes functon thant interact with directly with the database
// After create a service export using the es6 synt

const createUser = async data => {
  //console.log("user service paramter ", data);
  try {
    await User.sync({ force: false });
    await Resume.sync({ forse: false });
    let newUser = await User.create({ AuthId: data });
    //create new Resume for each user
    newUser.createResume();
    return newUser;
  } catch (err) {
    console.log("UserService/createUser Error ", err);
  }
};

const getAllUser = async () => {
  try {
    let result = await User.findAll();
    return result;
  } catch (err) {
    console.log("UserService/getAllUser Error ", err);
  }
};

const createUserInfo = async (authId, data) => {
  try {
    let result = await (
      await User.findOne({ where: { AuthId: authId } })
    ).update({ ...data });
    return result;
  } catch (err) {
    console.log("UserService/generateDammyUser data Error ", err);
  }
};

module.exports = {
  createUser,
  getAllUser,
  createUserInfo
};
