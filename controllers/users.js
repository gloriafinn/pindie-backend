const sendAllUsers= (req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.usersArray));
};

// controllers/users.js
const sendUserCreated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.user));
  };

module.exports= {
    sendAllUsers,
    sendUserCreated
};