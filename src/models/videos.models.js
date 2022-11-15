
const db = require("../utils/database");

const { DataTypes } = require("sequelize");
const Courses = require("./courses.models");

const Videos = db.define("videos", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    url:{
        type: DataTypes.STRING,
    },
    courseId: {
        type: DataTypes.INTEGER,
        references: {
            model: Courses,
            key: "id",
        },
        allowNull: false,
        field: "course_id",
    },
});

module.exports = Videos;