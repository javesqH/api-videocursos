const CoursesServices = require("../services/courses.services");

const getAllCourses = async (req, res) => {
    try {
      const result = await CoursesServices.getAll();
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  };

  const createCourse = async (req, res) => {
    try {
        const newCourse = req.body;
        const result = await CoursesServices.add(newCourse);
        res.status(201).json(result);
    } catch (error) {
       console.log(error);
    }
  }

  const updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const dataUpdate = req.body;
        const result = await CoursesServices.update(dataUpdate, id);
        res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  }

  module.exports = {
    getAllCourses,
    createCourse,
    updateCourse,
  };