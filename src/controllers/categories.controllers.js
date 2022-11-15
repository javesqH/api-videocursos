const CategoriesServices = require("../services/categories.services");



 const createCategory = async (req, res) => {
    try {
        const newCategory = req.body;
        const result = await CategoriesServices.add(newCategory);
        res.status(201).json(result);
    } catch (error) {
       console.log(error);
    }
  }

  const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
      
        const result = await CategoriesServices.delete(id);
        res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  }


  module.exports = {
    createCategory,
    deleteCategory,
  };