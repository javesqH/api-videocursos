
const Categories = require("./categories.models");
const Courses = require("./courses.models");
const UsersCourses = require("./users_courses.models");
const Users = require("./users.models");
const Videos = require("./videos.models");

const initModels = () => {

    Videos.belongsTo(Courses, {foreignKey: 'course_id'});
    Courses.hasMany(Videos, {foreignKey: 'course_id'});

    Categories.belongsTo(Courses, {foreignKey: 'course_id'});
    Courses.hasMany(Categories, {foreignKey: 'course_id'});

    UsersCourses.belongsTo(Users, {foreignKey: "user_id"});
    Users.hasMany(UsersCourses, {foreignKey: "user_id"});

    UsersCourses.belongsTo(Courses, {foreignKey: "course_id"});
    Courses.hasMany(UsersCourses, {foreignKey: "course_id"});

     Categories;
     Courses;
     UsersCourses;
     Users;
     Videos;
};



module.exports = initModels;