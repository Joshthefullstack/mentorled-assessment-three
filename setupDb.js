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
      )`);
    console.log("Interview table created successfully");
  
  
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