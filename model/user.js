import pool from '../config/dbConfig';
const { USER } = require("../utils/constants.js").TABLES;
const bcrypt = require("bcrypt");




class UserModel{
    constructor({ pool }) {
        this.pool = pool;
    }


    async create(user) {
        let { username, password } = user;
        const salt = await bcrypt.genSalt();
        password = await bcrypt.hash(password, salt);
        try {
          const result = await this.pool.query(
            `INSERT INTO ${USER} (username, password_hash ) VALUES ($1, $2) RETURNING *`,
            [username, password]
          );
          return result.rows[0];
        } catch (error) {
          throw error;
        }
    }

    async findByEmail(email){
        try{
          const result = await this.pool.query(`SELECT * FROM ${USER} WHERE email = $1`, [email]);
          return result.rows[0];
        }
        catch(error){
          throw error;
        }
      }


      async login(email, password) {
        try {
          const user = await this.findByEmail(email);
          if(user){
           
            const isMatch = await bcrypt.compare(password, user.password_hash);
            if(isMatch){
              return user;
            }
            else{
              throw new Error("Invalid password");
            }
          }
          else{
            throw new Error("This email does not exist");
          }
        } catch (error) {
          throw error;
        }
      }


}

const User = new UserModel({pool});
module.exports = User;