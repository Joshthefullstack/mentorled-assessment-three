import pool from '../config/dbConfig';
const { INTERVIEW, INTERVIEW_SCORING } = require("../utils/constants.js").TABLES;


class InterviewModel {

    constructor({ pool }) {
        this.pool = pool;
    }

    async addScore(interview_score) {
        let { interview_id, score, comments } = interview_score;
        if(interview_id < 1) throw new Error("Invalid interview, score must be given to a valid interview");
        const interview = await this.pool.query(`SELECT * FROM ${INTERVIEW} WHERE id = $1`, [interview_id]);
        if(interview.rows.length === 0)
        {
            throw new Error("Interview doesn't exist");
        }

        if(user_id < 1) throw new Error("Invalid user, interview must be done by a user");
        const user = await this.pool.query(`SELECT * FROM ${USER} WHERE id = $1`, [user_id]);
        if(user.rows.length === 0)
        {
            throw new Error("User doesn't exist");
        }

        try {
            const result = await this.pool.query(
                `INSERT INTO ${INTERVIEW_SCORING} (interview_id, score, comments) VALUES ($1, $2, $3) RETURNING *`,
                [interview_id, score, comments]
            );
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    async updateScore(interview_score_id, interview_score) {
        try {
            const { comments } = interview_score;
            const retInterview = await this.pool.query(`SELECT * FROM ${INTERVIEW_SCORING} WHERE id = $1`, [interview_score_id]);
            if (retInterview.rows.length === 0) {
                throw Error("Interview score doesn't exist");
            }
            const result = await this.pool.query(`UPDATE ${INTERVIEW_SCORING} SET comments = $1 WHERE interview_score_id = $2 RETURNING *`, [comments, interview_score_id]);
            return result.rows[0];
        }
        catch (error) {
            throw error;
        }

    }



    async getInterviewScoreById(interview_score_id) {
        try {
            const interview_score = await this.pool.query(`SELECT * FROM ${INTERVIEW_SCORING} WHERE id = $1`, [interview_score_id]);
            if (interview_score.rows.length === 0) {
                throw new Error("Interview doesn't exist");
            }
            return interview_score.rows[0];
        }
        catch (error) {

            throw error;
        }
    }

        
    async getAll() {
        try {
            const result = await this.pool.query(`SELECT * FROM ${INTERVIEW_SCORING}`);
            return result.rows;
        } catch (error) {
            throw error;
        }
    }

    async getInterviewScore(score) {
        try {
            const interviews = await this.getAll();
            if(interviews == null)
            {
                throw new Error("Interview list is empty")
            }
            const interviewScore = interviews.filter(m => m.score >= score);
            return interviewScore;
        }
        catch (error) {
            throw error;
        }
    }



}

const Interview = new InterviewModel({ pool });
module.exports = Interview;