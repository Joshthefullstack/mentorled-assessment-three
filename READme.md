Interview Session REST API

This is a simple REST API for managing interview sessions with paginations using Node.js, Express.js, and PostgreSQL.

Features

Create, Update, Get and Delete an interview session with title, description, and questions.

Stores data in a PostgreSQL database.

Gets interviews with pagination

Gets specific interview by their id


Installation

Prerequisites

Node.js (v14+ recommended)

PostgreSQL (installed and running)

Setup

Clone the repository:

git clone https://github.com/your-repo/interview-api.git
cd interview-api

Install dependencies:

npm install

Configure PostgreSQL connection in server.js:

const pool = new Pool({
    user: 'your_username',
    host: 'localhost',
    database: 'interviews_db',
    password: 'your_password',
    port: 5432,
});

Run the server:

node server.js

API Endpoints

1. Create an Interview Session

Endpoint:

POST /api/interviews/createInterview
GET /api/interviews?page=1&limit=10
PUT /api/interviews/:id
DELETE /api/interviews/:id
GET /api/interviews/:id

Request Body:

{
  "title": "Frontend Developer Interview",
  "description": "An interview for a frontend developer role",
  "questions": ["What is React?", "Explain useState hook"]
}

Response:

{
  "id": 1,
  "title": "Frontend Developer Interview",
  "description": "An interview for a frontend developer role",
  "questions": ["What is React?", "Explain useState hook"],
}

{
  "data": [
    { "id": 1, "title": "Frontend Developer Interview", "description": "An interview for a frontend developer role", "questions": ["What is React?", "Explain useState hook"]}
    currentPage: 1,
    totalPages: 4
  ]
  
  
  
}

Dependencies

Express.js - Web framework for Node.js

pg (node-postgres) - PostgreSQL client

express

dotenv

cors
