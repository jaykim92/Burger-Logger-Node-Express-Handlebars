// import orm
const orm = require("../config/orm")

// call ORM functions
orm.selectAll();
orm.insertOne();
orm.updateOne();

// export model
module.exports = model;