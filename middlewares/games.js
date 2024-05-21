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

const createGame = async (req, res, next) => {
  console.log("POST /games");
  try {
    console.log(req.body);
    req.game = await games.create(req.body);
    next();
  } catch (error) {
      res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Ошибка создания игры" }));
  }
};

// Экспортируем функцию поиска всех игр
module.exports = {
  findAllGames, 
  createGame
};