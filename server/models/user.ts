const mongo = require("mongoose");

const userSchema = new mongo.Schema(
  {
    firstName: {
      type: String,
     },
    lastName: {
      type: String,
     },
    username: {
      type: String,
       unique: true,
    },
    image: {
      type: String,
    },
    email: {
      type: String,
       unique: true,
    },
    password: {
      type: String,
     },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Users = mongo.model("User", userSchema);

module.exports = Users;

// export default mongoose.model("User", userSchema);
