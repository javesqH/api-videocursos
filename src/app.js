const express = require("express");
const db = require("./utils/database.js");
const initModels = require("./models/initModels");
//const Users = require("./models/users.models.js");
//const Courses = require("./models/courses.models.js");
//const Videos = require("./models/videos.models.js");
//const Categories = require("./models/categories.models.js");
//const UsersCourses = require("./models/users_courses.models.js");
const userRoutes = require('./routes/users.routes');
const coursesRoutes = require('./routes/courses.routes');
const categoriesRoutes = require('./routes/categories.routes');
const videosRoutes = require('./routes/videos.routes');

const app = express();

app.use(express.json());

const PORT = 8000;

db.authenticate()
.then(() => console.log("Autenticacion exitosa"))
.catch((error) => console.log(error));

db.sync( { force: false })
    .then(() => console.log("Base sincronizada"))
    .catch((error) => console.log(error));

initModels();

app.get ("/", (req, res) => {
    res.status(200).json({ message: "Bienvenido al server"});
});


app.use('/api/v1', userRoutes);
app.use('/api/v1', coursesRoutes);
app.use('/api/v1', categoriesRoutes);
app.use('/api/v1', videosRoutes);

/* app.get("/api/v1/users", async (req, res) => {
    try {
        const result = await Users.findAll({
            attributes: ['id', 'first_name', 'last_name', 'email'],
        });
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}); */

/* app.get("/api/v1/users/:email", async (req, res) => {
    try {
      const { email } = req.params;
      const result = await Users.findOne({
        where: { email },
      });
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  }); */

  /* app.get("/api/v1/users/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Users.findByPk(id, {
        attributes: {
            exclude: ['password', 'createdAt', 'updatedAt'],
        },
      });
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  }); */

 /*  app.post("/api/v1/users", async (req, res) => {
	try {
	  const newUser = req.body;
		const result = await Users.create(newUser);
		res.status(201).json(result);
	} catch (error) {
		console.log(error);
	}
}); */

  /* app.put("/api/v1/users/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const result = await Users.update(data, {
        where: { id },
      });
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  }); */

  /* app.delete("/api/v1/users/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Users.destroy({
        where: { id },
    });
    res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  }); */

  //--------------------------------------------------------------------------//


  /* app.get("/api/v1/courses", async (req, res) => {
    try {
        const result = await Courses.findAll({
            attributes: ['id', 'title', 'description', 'instructor'],
        });
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}); */

/* app.post("/api/v1/courses", async (req, res) => {
	try {
	  const newUser = req.body;
		const result = await Courses.create(newUser);
		res.status(201).json(result);
	} catch (error) {
		console.log(error);
	}
}); */

/* app.put("/api/v1/courses/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await Courses.update(data, {
      where: { id },
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}); */

//--------------------------------------------------------------------------//

/* app.post("/api/v1/videos", async (req, res) => {
	try {
	  const newUser = req.body;
		const result = await Videos.create(newUser);
		res.status(201).json(result);
	} catch (error) {
		console.log(error);
	}
}); */

/* app.delete("/api/v1/videos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Videos.destroy({
      where: { id },
  });
  res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}); */

//--------------------------------------------------------------------------//

/* app.post("/api/v1/categories", async (req, res) => {
	try {
	  const newUser = req.body;
		const result = await Categories.create(newUser);
		res.status(201).json(result);
	} catch (error) {
		console.log(error);
	}
}); */

/* app.delete("/api/v1/categories/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Categories.destroy({
      where: { id },
  });
  res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}); */

//--------------------------------------------------------------------------//

/* app.get("/api/v1/users/:id/courses", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Users.findOne({
      where: { id },
      attributes: ['id', 'first_name', 'last_name', 'email'],
      imclude: {
        model: UsersCourses,
        attributes: ['id'],
        include: {
          model: Courses,
          attributes: ['title']
        },
      },
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
})
 */
app.listen (PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});