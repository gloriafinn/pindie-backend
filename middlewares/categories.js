const categories = require('../models/category');

const findAllCategories = async (req, res, next)=>{
    req.categoriesArray = await categories.find({});
    next();
};


const findCategoryById = async (req, res, next) => {
  console.log("GET /categories/:id");
  try {
      // Пробуем найти игру по id
    req.category = await categories.findById(req.params.id); // Загрузка связанных записей о пользователях
    next(); // Передаём управление в следующую функцию
  } catch (error) {
    // На случай ошибки вернём статус-код 404 с сообщением, что игра не найдена
    res.setHeader("Content-Type", "application/json");
    res.status(404).send(JSON.stringify({ message: "Категория не найдена" }));
  }
};



// middlewares/categories.js
const createCategory = async (req, res, next) => {
    console.log("POST /categories");
    try {
      //console.log(req.body);
      req.category = await categories.create(req.body);
      next();
    } catch (error) {
      res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Ошибка создания категории" }));
    }
  };


  const updateCategory = async (req, res, next) => {
    console.log("PUT /categories/:id");
    try {
        // В метод передаём id из параметров запроса и объект с новыми свойствами
      req.category = await categories.findByIdAndUpdate(req.params.id, req.body);
      next();
    } catch (error) {
      res.setHeader("Content-Type", "application/json");
      res.status(400).send(JSON.stringify({ message: "Ошибка обновления категории" }));
    }
  };

  const checkEmptyName= async (req,res,next)=>{
      if (!req.body.name){
        res.status(400).send(JSON.stringify({ message: "Введите название категории" }));
      }else{
        next();
      }
  };

module.exports = {
    findAllCategories,
    createCategory,
    findCategoryById,
    updateCategory,
    checkEmptyName
};