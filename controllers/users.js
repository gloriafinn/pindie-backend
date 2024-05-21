const sendAllUsers= (req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.usersArray));
};

// controllers/users.js
const sendUserCreated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.user));
  };


  const sendUserUpdated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify({ message: "Пользователь обновлен" }));
  };

module.exports= {
    sendAllUsers,
    sendUserCreated,
    sendUserUpdated
};