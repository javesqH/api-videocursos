
const Courses = require('../models/courses.models');
const Users = require('../models/users.models');
const UsersCourses = require('../models/users_courses.models');


class UserServices {
    static async getAll() {
        try {
            const result = await Users.findAll({
                attributes: ['id', 'first_name', 'last_name', 'email'],
            });
            return result;
        } catch (error) {
            throw(error);
        }
    }

    static async getById(id) {
        try {
            const result =await Users.findByPk(id, {
                attributes: {
                    exclude: ['password', 'createdAt', 'updatedAt'],
                },
            });
            return result;
        } catch (error) {
            throw (error);
        }
    }

    static async getUserJoinUsersCourses(id) {
        try {
            const result = await Users.findOne({
                where: { id },
                attributes:  ['id', 'first_name', 'last_name', 'email'],
                include: {
                    model: UsersCourses,
                    attributes: ['courseId'],
                    include: {
                        model: Courses,
                        attributes: ['title', 'description'],
                    },
                },
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async add (newUser){
        try {
           const result = await Users.create(newUser);
           return result;
        } catch (error) {
           throw error;
        }
   }


   static async update(updateData, id) {
    try {
        const result = await Users.update(updateData, {
            where: {id}
        });
        return result;
    } catch (error) {
        throw error;
    }
}
}

module.exports = UserServices;