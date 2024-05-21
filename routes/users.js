const usersRouter=require("express").Router();

const {findAllUsers, createUser, updateUser, checkEmptyNameAndEmailAndPassword,checkIsUserExists,checkEmptyNameAndEmail, deleteUser}=require('../middlewares/users');
const {sendAllUsers, sendUserCreated, sendUserUpdated,sendUserDeleted}=require('../controllers/users');

usersRouter.get("/users",findAllUsers,sendAllUsers);


usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  createUser,
  sendUserCreated
);

usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  updateUser,
  sendUserUpdated
);

usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

module.exports=usersRouter;