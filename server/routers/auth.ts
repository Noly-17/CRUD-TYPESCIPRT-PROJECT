const router = require("express").Router();
// const hashSync = require("bcrypt");
let Userss = require("../models/user");

// import { loginUser, registerUser } from "../controllers/auth";
// const loginUser = require("../controllers/auth");
// const registerUser = require("../controllers/auth");

// router.route("/login").post(async (req: any, res: any) => {
//   try {
//     const user = await Userss.findOne({ username: req.body.username });
//     if (!user) {
//       res.status(401).json("Invalid username or password");
//     } else {
//       res.status(401).json("Invalid username or password");
//     }
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

router.route("/register").post(async (req: any, res: any) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new Userss({
    firstName,
    lastName,
    username,
    email,
    password,
  });

  newUser
    .save()
    .then((user: any) => res.json("New User Added"))
    .catch((err: any) => console.log("Error: ", err));
});

module.exports = router;
