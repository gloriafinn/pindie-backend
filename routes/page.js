
// Импорты и другие маршруты

const pagesRouter = require("express").Router();
const { sendIndex } = require("../controllers/auth.js");

pagesRouter.get("/", sendIndex); 
pagesRouter.get("/admin/**", sendDashboard); 
pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth, sendDashboard);

module.exports=pagesRouter;