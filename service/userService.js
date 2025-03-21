const User = require("../model/user");


async function createUser(user)
{
    const exitingUser = await User.findByEmail(user.email)
    if(exitingUser)
    {
        throw new Error("User already exists");
    }

    try{
        const newUser = await User.create(user);
        return newUser;
    }
    catch(error)
    {
        throw error;
    }
}


async function userLogin(email, password)
{
    try{
        const user = await User.login(email, password);
        return user;
      } catch(error){
        throw error
      }
}



module.exports = {
    createUser,
    userLogin,
}