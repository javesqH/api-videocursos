const Courses = require("../models/courses.models");

class CoursesServices {
    static async getAll() {
        try {
            const result = await Courses.findAll({
                attributes: ['id', 'title', 'description', 'instructor'],
            });
            return result;
        } catch (error) {
            throw(error);
        }
    }

    static async add (newCourse){
        try {
           const result = await Courses.create(newCourse);
           return result;
        } catch (error) {
           throw error;
        }
   }

   static async update(updateData, id) {
    try {
        const result = await Courses.update(updateData, {
            where: {id}
        });
        return result;
    } catch (error) {
        throw error;
    }
   }

}

module.exports = CoursesServices;