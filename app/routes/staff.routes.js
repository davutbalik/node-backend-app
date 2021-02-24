const staffs = require("../controllers/staff.controller");
let staffRouter = require("express").Router();

staffRouter.post("/", staffs.create); // Create a new Collection
staffRouter.get("/", staffs.findAll); // Retrieve all Collections
staffRouter.get("/:id", staffs.findOne); // Retrieve a single Collection with id
staffRouter.put("/:id", staffs.update); // Update a Collection with id
staffRouter.delete("/:id", staffs.delete); // Delete a Collection with id
staffRouter.delete("/", staffs.deleteAll); // Delete all Collections

module.exports = staffRouter;


