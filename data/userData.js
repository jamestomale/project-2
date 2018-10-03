// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var userArray = [
  {
    firstName: "Cole",
    lastName: "Lipman",
    userEmail: "cole@example.com",
    password: "pwrd"
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = userArray;
