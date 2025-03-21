const userService = require("../service/userService");

async function createUser(req, res, next) {
  try {
    const user = await userService.createUser(req.body);
    return res.status(201).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      error: error.message
    })
  }
}

async function loginUser(req, res, next) {
  try{
    const { email, password } = req.body; 
    const user = await userService.userLogin(email, password);
    
    return res.status(200).json({
      status: "success",
      data: user
    });
  } catch(error){
    console.log(error);
  }
}



module.exports = {
    createUser,
    loginUser
};