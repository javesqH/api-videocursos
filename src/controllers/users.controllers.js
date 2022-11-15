
const UserServices = require('../services/users.services');


const getAllUsers = async (req, res) => {
  try {
    const result = await UserServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (req, res) => {
     try {
        const { id } = req.params;
        const result = await UserServices.getById(id);
        res.status(200).json(result);
     } catch (error) {
        console.log(error);
     }
};

const getUserWithUsersCourses = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await UserServices.getUserJoinUsersCourses(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
};

const createUser = async (req, res) => {
  try {
      const newUser = req.body;
      const result = await UserServices.add(newUser);
      res.status(201).json(result);
  } catch (error) {
     console.log(error);
  }
}

const updateUser = async (req, res) => {
  try {
      const { id } = req.params;
      const dataUpdate = req.body;
      const result = await UserServices.update(dataUpdate, id);
      res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
    getAllUsers,
    getUserById,
    getUserWithUsersCourses,
    createUser,
    updateUser,
};