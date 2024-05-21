const usersRouter=require("express").Router();

const {findAllUsers, createUser, updateUser}=require('../middlewares/users');
const {sendAllUsers, sendUserCreated, sendUserUpdated}=require('../controllers/users');

usersRouter.get("/users",findAllUsers,sendAllUsers);

// routes/users.js
usersRouter.post("/users",findAllUsers,createUser,sendUserCreated);
usersRouter.put(
    "/users/:id", // Слушаем запросы по эндпоинту
    updateUser, // Обновляем запись в MongoDB
    sendUserUpdated // Возвращаем ответ на клиент
  ); 

module.exports=usersRouter;