const pool = require("./config/dbConfig");
const process = require("node:process");
const {TYPES, TABLES} = require("./utils/constants");

const createTables = async () => {
    console.log("Creating tables... in schema", process.env.DB_SCHEMA);
    try {
  
      await pool.query(`CREATE TABLE IF NOT EXISTS ${TABLES.INTERVIEW}(
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        questions TEXT[] NOT NULL,
        user_id INT REFERENCES ${TABLES.USER}(user_id) ON DELETE CASCADE
      )`);
    console.log("Interview table created successfully");

    await pool.query(`CREATE TABLE IF NOT EXISTS ${TABLES.INTERVIEW_SCORING}(
      interview_score_id SERIAL PRIMARY KEY,
      interview_id INT REFERENCES ${TABLES.INTERVIEW}(id) ON DELETE CASCADE,
      score INT NOT NULL,
      comments TEXT NOT NULL,
      user_id INT REFERENCES ${TABLES.USER}(user_id) ON DELETE CASCADE
    )`);
  console.log("Interview Score table created successfully");

  await pool.query(`CREATE TABLE IF NOT EXISTS ${TABLES.USER}(
    user_id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    password VARCHAR(255) NOT NULL,
  )`);
console.log("User table created successfully");
  
  
      console.log("Tables created successfully");
    } catch (error) {
      console.log(error);
      // logger.error(error);
    }
  };
  
  const dropTables = async () => {
    try {
      await pool.query(`DROP TABLE IF EXISTS ${TABLES.INTERVIEW}`);
      console.log("Interview schedule table dropped successfully");
      await pool.query(`DROP TABLE IF EXISTS ${TABLES.INTERVIEW_SCORING}`);
      console.log("Interview scoring table dropped successfully");
      await pool.query(`DROP TABLE IF EXISTS ${TABLES.USER}`);
      console.log("User table dropped successfully");
    } catch (error) {
      console.log(error);
    }
  };
  
//   dropTables();
  createTables();
  
  // const syncDatabase = async () => {
  //   const command = process.argv[2];
  //   if (command === "up") {
  //     await createTables();
  //     process.exit();
  //   } else if (command === "down") {
  //     await dropTables();
  //     process.exit();
  //   }
  // };
  
  // syncDatabase()