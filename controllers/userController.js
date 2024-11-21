const USER = require("../models/user");

const getAllUsers = async (req, res) => {
  try {
    const users = await USER.find();
    return res.json(users);
  } catch (error) {
    return res.json(error);
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await USER.findOne({ _id: id });
    return res.json(user);
  } catch (error) {
    return res.json(error);
  }
};

const addUser = async (req, res) => {
  const { name, email, password } = req.body;

  const newUser = {
    name,
    email,
    password,
  };
  try {
    const oldUser = await USER.findOne({ email });
    if (oldUser) {
      return res.json({ message: "User already exists" });
    }
    const addNewUser = await USER.insertMany([newUser]);
    const findUser = await USER.findOne({ _id: addNewUser[0]._id }).select(
      "-__v"
    );
    return res.json(findUser);
  } catch (error) {
    return res.json(error);
  }
};

const updateUser = async (req, res) => {
  const { name, email, password, _id } = req.body;
  const { id } = req.params;

  try {
    const updateUser = await USER.findByIdAndUpdate(id, {
      name: name,
      email: email,
      password: password,
    });
    const User = await USER.findOne({ _id: id }).select("-__v");
    return res.json(User);
  } catch (error) {
    return res.json(error);
  }
};

const deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await USER.findOne({ _id: id });
    const deleteUser = await USER.deleteOne({ _id: id });
    return res.json(user);
  } catch (error) {
    return res.json(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUserById,
};
