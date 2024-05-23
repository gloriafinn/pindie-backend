const usersRouter=require("express").Router();

const {
  findAllUsers, 
  createUser, 
  updateUser, 
  checkEmptyNameAndEmailAndPassword,
  checkIsUserExists,
  checkEmptyNameAndEmail, 
  deleteUser,
  hashPassword
}=require('../middlewares/users');

const {
  sendAllUsers, 
  sendUserCreated, 
  sendUserUpdated,
  sendUserDeleted
}=require('../controllers/users');

usersRouter.get(
  "/users",
  findAllUsers,
  sendAllUsers);


usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  hashPassword,
  createUser,
  sendUserCreated
);

usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  updateUser,
  sendUserUpdated
);

usersRouter.delete(
  "/users/:id", 
  deleteUser, 
  sendUserDeleted);

module.exports=usersRouter;