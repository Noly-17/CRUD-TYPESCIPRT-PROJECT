const hashSync = require("bcrypt");
let User = require("../models/user");

exports.registerUser = async (req: any, res: any) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    password: hashSync(req.body.password, 10),
  });

  const savedUser = await newUser.save();
  res.status(201).json(savedUser);

  res.status(200).json(`user created`);
};

exports.loginUser = async (req: any, res: any) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(401).json("Invalid username or password");
    } else {
      res.status(401).json("Invalid username or password");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
