const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

var userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 40,
    },

    email: {
      type: String,
      trim: true,
      required: true,
      unique: true, // so same email cannot be used to create another account
    },
    //TODO edit password field

    encry_password: {
      type: String,
      required: true,
    },

    salt: String,

    phone: {
      type: String,
      trim: true,
    },
    //TODO edit the canvas field ... as know the type

    canvas: {
      type: [JSON]
    },

    userinfo: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.encry_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password;
  },

  securePassword: function (plainpassword) {
    if (!plainpassword) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

module.exports = mongoose.model("User", userSchema);
