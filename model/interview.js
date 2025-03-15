import pool from '../config/dbConfig';
const { INTERVIEW } = require("../utils/constants.js").TABLES;


class InterviewModel {

    constructor({ pool }) {
        this.pool = pool;
    }

    async create(interview) {
        let { title, description, questions } = interview;
        try {
            const result = await this.pool.query(
                `INSERT INTO ${INTERVIEW} (title, description, questions) VALUES ($1, $2, $3) RETURNING *`,
                [title, description, questions]
            );
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    async update(interview_id, interview) {
        try {
            const { title, description, questions } = interview;
            const retInterview = await this.pool.query(`SELECT * FROM ${INTERVIEW} WHERE id = $1`, [interview_id]);
            if (retInterview.rows.length === 0) {
                throw Error("Interview doesn't exist");
            }
            const result = await this.pool.query(`UPDATE ${INTERVIEW} SET title = $1, description = $2, questions = $3 WHERE interview_id = $4 RETURNING *`, [title, description, questions, interview_id]);
            return result.rows[0];
        }
        catch (error) {
            throw error;
        }

    }

    async delete(interview_id) {
        try {
            const interview = await this.pool.query(`SELECT * FROM ${INTERVIEW} WHERE id = $1`, [interview_id]);
            if (interview.rows.length === 0) {
                throw new Error("Interview doesn't exist");
            }
            const result = await this.pool.query(`DELETE FROM ${INTERVIEW} WHERE id = $1 RETURNING *`, [interview_id]);
            return result.rows[0];
        }
        catch (error) {

            throw error;
        }
    }

    async getInterviewById(interview_id) {
        try {
            const interview = await this.pool.query(`SELECT * FROM ${INTERVIEW} WHERE id = $1`, [interview_id]);
            if (interview.rows.length === 0) {
                throw new Error("Interview doesn't exist");
            }
            return interview.rows[0];
        }
        catch (error) {

            throw error;
        }
    }

    async findInterviewByPage(limit, offset)
    {
        try{
            const result = await this.pool.query(`SELECT * FROM ${INTERVIEW} ORDER BY id limit = $1, offset = $2`, [limit, offset]);
            return result.rows;
        } catch(error)
        {
            throw error;
        }
    }

    async getAll() {
        try {
            const result = await this.pool.query(`SELECT * FROM ${INTERVIEW}`);
            return result.rows;
        } catch (error) {
            throw error;
        }
    }

}

const Interview = new InterviewModel({ pool });
module.exports = Interview;