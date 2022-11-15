
const { Router } = require("express");
const { 
    getAllUsers,
    getUserById,
    getUserWithUsersCourses,
    createUser,
    updateUser,
} = require("../controllers/users.controllers");

const router = Router();

router.get('/users', getAllUsers);

router.get('/users/:id', getUserById);

router.get("/users/:id/usersCourses", getUserWithUsersCourses);

router.post("/users", createUser);

router.put("/users/:id", updateUser);

module.exports = router;