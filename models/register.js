// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "user" model that matches up with DB
var User = sequelize.define("user", {
  firstName: {
    type: Sequelize.STRING,
    notNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    notNull: false
  },
  userEmail: {
    type: Sequelize.STRING,
    unique: true,
    notNull: false
  },
  password: {
    type: Sequelize.STRING,
    notNull: false
  },
  created_at: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});

// Syncs with DB
User.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = User;
