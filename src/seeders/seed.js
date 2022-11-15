
const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const UsersCourses = require("../models/users_courses.models");
const Users = require("../models/users.models");
const Videos = require("../models/videos.models");
const initModels = require("../models/initModels");
const db = require("../utils/database");

initModels();

const users = [
     { first_name: "Juan", last_name: "Hernandez", password: "0000", email: "juan@gmail.com" },
     { first_name: "Arturo", last_name: "Ramirez", password: "1111", email: "arturo@gmail.com" },
     { first_name: "Luis", last_name: "Estrada", password: "2222", email: "luis@gmail.com" },
     { first_name: "Carlos", last_name: "Morales", password: "3333", email: "carlos@gmail.com" },
     { first_name: "Jaime", last_name: "Fernandez", password: "4444", email: "jaime@gmail.com" },
];

const courses = [
     { title: "Javascript", description: "Arrays", instructor: "Ian Rosas" },
     { title: "Javascript", description: "Objects", instructor: "Ian Rosas" },
     { title: "Javascript", description: "Methods", instructor: "Ian Rosas" },
     { title: "React", description: "Hooks", instructor: "Andres Mendoza" },
     { title: "React", description: "Components", instructor: "Andres Mendoza" },
     { title: "React", description: "Redux", instructor: "Andres Mendoza" },
     { title: "Node", description: "Nodejs", instructor: "Ian Rosas" },
     { title: "Node", description: "Express", instructor: "Ian Rosas" },
     { title: "Node", description: "Sequelize", instructor: "Ian Rosas" },
     { title: "Node", description: "Postgres", instructor: "Ian Rosas" },
];

const videos = [
     { title: "class 1", url: "https://week1", courseId: 1 },
     { title: "class 2", url: "https://week2", courseId: 2 },
     { title: "class 3", url: "https://week3", courseId: 3 },
     { title: "class 4", url: "https://week4", courseId: 4 },
     { title: "class 5", url: "https://week5", courseId: 5 },
];

const categories = [
     { name: "beginner", courseId: 1},
     { name: "middle", courseId: 2},
     { name: "advanced", courseId: 3},
     
];

const uc = [
     { userId: 1, courseId: 1 },
     { userId: 1, courseId: 2 },
     { userId: 2, courseId: 3 },
     { userId: 2, courseId: 4 },
     { userId: 3, courseId: 5 },
     { userId: 3, courseId: 1 },
     { userId: 4, courseId: 2 },
     { userId: 4, courseId: 3 },
     { userId: 5, courseId: 4 },
     { userId: 5, courseId: 5 },
];

db.sync({ force: true })
    .then(() => {
        console.log("Iniciando plantacion de informacion");
        users.forEach((user) => Users.create(user));
        setTimeout(() => {
            courses.forEach((course) => Courses.create(course));
        }, 100);
        setTimeout(() => {
            categories.forEach((category) => Categories.create(category));
        }, 200);
        setTimeout(() => {
            videos.forEach((video) => Videos.create(video));
        }, 300);
        setTimeout(() => {
            uc.forEach((uc) => UsersCourses.create(uc));
        }, 400);
    })
    .catch((error) => console.log(error));