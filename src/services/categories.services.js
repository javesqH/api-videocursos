const Categories = require("../models/categories.models");


class CategoriesServices {
    static async add (newCategory){
        try {
           const result = await Categories.create(newCategory);
           return result;
        } catch (error) {
           throw error;
        }
   }

   static async delete(id) {
    try {
        const result = await Categories.destroy({
            where: {id}
        });
        return result;
    } catch (error) {
        throw error;
    }
   }

}

module.exports = CategoriesServices;