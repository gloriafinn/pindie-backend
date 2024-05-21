const sendAllCategories= (req, res)=>{
    // Установим заголовок ответа в формате JSON
    res.setHeader('Content-Type', 'application/json');
    // Отправим данные в виде JSON-объекта, 
    // которые подготовим в миддлваре findAllCategories
    res.end(JSON.stringify(req.categoriesArray));
};

// controllers/categories.js
const sendCategoryCreated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.category));
  };

module.exports= {
    sendAllCategories,
    sendCategoryCreated
};