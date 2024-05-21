// Создаём роут для запросов категорий 
const categoriesRouter=require("express").Router();

// Импортируем вспомогательные функции
const {findAllCategories, createCategory, updateCategory, checkEmptyName, deleteCategory,  checkIsCategoryExists}=require('../middlewares/categories');
const {sendAllCategories, sendCategoryCreated, sendCategoryUpdated, sendCategoryDeleted}=require('../controllers/categories');

// Обрабатываем GET-запрос с роутом '/categories'
categoriesRouter.get("/categories",findAllCategories,sendAllCategories);
// routes/categories.js
categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  createCategory,
  sendCategoryCreated
);

categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  updateCategory,
  sendCategoryUpdated
);

  categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted);
  
// Экспортируем роут для использования в приложении — app.js
module.exports=categoriesRouter;