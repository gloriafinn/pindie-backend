const usersRouter=require("express").Router();

const {findAllUsers, createUser, updateUser, checkEmptyNameAndEmailAndPassword, deleteUser}=require('../middlewares/users');
const {sendAllUsers, sendUserCreated, sendUserUpdated,sendUserDeleted}=require('../controllers/users');

usersRouter.get("/users",findAllUsers,sendAllUsers);

// routes/users.js
usersRouter.post("/users",findAllUsers,createUser,checkEmptyNameAndEmailAndPassword,sendUserCreated);
usersRouter.put(
    "/users/:id", // Слушаем запросы по эндпоинту
    checkEmptyNameAndEmailAndPassword,
    updateUser, // Обновляем запись в MongoDB
    sendUserUpdated // Возвращаем ответ на клиент
  ); 
  usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

module.exports=usersRouter;