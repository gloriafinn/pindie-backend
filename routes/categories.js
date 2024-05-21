// Создаём роут для запросов категорий 
const categoriesRouter=require("express").Router();

// Импортируем вспомогательные функции
const {findAllCategories, createCategory, updateCategory, checkEmptyName}=require('../middlewares/categories');
const {sendAllCategories, sendCategoryCreated, sendCategoryUpdated}=require('../controllers/categories');

// Обрабатываем GET-запрос с роутом '/categories'
categoriesRouter.get("/categories",findAllCategories,sendAllCategories);
// routes/categories.js
categoriesRouter.post(
    "/categories", 
    checkEmptyName,
    findAllCategories, 
    createCategory, 
    sendCategoryCreated,
    
);
categoriesRouter.put(
    "/categories/:id", // Слушаем запросы по эндпоинту
    checkEmptyName,
    updateCategory, // Обновляем запись в MongoDB
    sendCategoryUpdated, // Возвращаем ответ на клиент
  ); 

// Экспортируем роут для использования в приложении — app.js
module.exports=categoriesRouter;