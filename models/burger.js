// import orm
const orm = require("../config/orm")

// call ORM functions
const burger = {
   selectAll: (cb) => {
       orm.selectAll("burgers", (res) => {
           cb(res);
       });
   },
   insertOne: (cols, vals, cb) => {
       orm.insertOne("burgers", cols, vals, res => {
           cb(res)
       });
   },
   updateOne: (objColVals, condition, cb) => {
       orm.updateOne("burgers", condition, res => {
           cb(res);
       });
   }
};

// export model to controller/router
module.exports = burger;
