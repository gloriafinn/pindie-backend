const games = require('../models/game');

const findAllGames = async (req, res, next)=>{
    // По GET-запросу на эндпоинт /games найдём все документы категорий
    req.gamesArray = await games.find({}).populate("categories").populate({
      path:"users",
      select:"-password"
    });
     // Выведем в терминал результат поиска 
  console.log(req.gamesArray);
    next();
};


// Файл middlewares/games.js

const findGameById = async (req, res, next) => {
  console.log("GET /games/:id");
  try {
      // Пробуем найти игру по id
    req.game = await games.findById(req.params.id).populate("categories"); // Загрузка связанных записей о пользователях
    next(); // Передаём управление в следующую функцию
  } catch (error) {
    // На случай ошибки вернём статус-код 404 с сообщением, что игра не найдена
    res.setHeader("Content-Type", "application/json");
    res.status(404).send(JSON.stringify({ message: "Игра не найдена" }));
  }
};


const createGame = async (req, res, next) => {
  console.log("POST /games");
  try {
    //console.log(req.body);
    req.game = await games.create(req.body);
    next();
  } catch (error) {
      res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Ошибка создания игры" }));
  }
};


// Файл middlewares/games.js

const updateGame = async (req, res, next) => {
  console.log("PUT /games/:id");
  try {
      // В метод передаём id из параметров запроса и объект с новыми свойствами
    req.game = await games.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Ошибка обновления игры" }));
  }
};




// Экспортируем функцию поиска всех игр
module.exports = {
  findAllGames, 
  createGame,
  findGameById,
  updateGame
};