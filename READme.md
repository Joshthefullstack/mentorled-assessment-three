Interview Session REST API

This is a simple REST API for managing interview sessions, scores and comments, and creating the users of the application (the interviewer) with paginations using Node.js, Express.js, and PostgreSQL.

Features

Create, Update, Get and Delete an interview session with title, description, and questions.

Create, Update, Get interview scores and comments

Stores data in a PostgreSQL database.

Gets specific interview and interview score by their id

User creation and login


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

POST /api/interviewScore/createInterviewScore
GET /api/interviewScore
PUT /api/interviewScore/:id
GET /api/interviewScore/:id
GET /api/interviews/getInterviewScore

POST /api/user/createUser
POST /api/user/login


Request Body:

{
  "title": "Frontend Developer Interview",
  "description": "An interview for a frontend developer role",
  "questions": ["What is React?", "Explain useState hook"]
}

{
  "interview_id": "1 (referencing interview table)",
  "score": 60,
  "comments": "Technical, and straightforward, always ready to tackle problems.",
  "user_id": "1 (referencing user table)"
}

{
  "username": "jibiam",
  "password": "Pasxw0rd"
}

Response:

{
  "id": 1,
  "title": "Frontend Developer Interview",
  "description": "An interview for a frontend developer role",
  "questions": ["What is React?", "Explain useState hook"],
}

{
  "interview_score_id": 1,
  "interview_id": 1,
  "score": 60,
  "comments": "Technical, and straightforward, always ready to tackle problems.",
  "user_id": "1"
}

{
  "user_id": 1,
  "username": "jibiam",
  "password": "Pasxw0rd"
}

Dependencies

Express.js - Web framework for Node.js

pg (node-postgres) - PostgreSQL client

express

dotenv

cors

bcrypt
