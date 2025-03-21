const InterviewScoring = require("../model/interview_scoring");

async function createInterviewScore(interview_score) {
    try {
        let { score, comments } = interview_score;

        if(isNaN(score))
        {
            return new Error("Invalid score, user must input a valid score");
        }

        if(score === 0)
        {
            return new Error("Score cannot be zero, input a valid score");
        }

        if(comments.length < 3)
        {
            return new Error("Invalid comments, comments must be more than three characters")
        }

        if (description.length < 7) {
            return new Error("Invalid description, description must be more than three characters")
        }
        const newInterview = await InterviewScoring.addScore(interview_score);
        return newInterview;
    }
    catch (error) {
        throw error;
    }
}

async function getAllInterviewScores() {
    try {
        const interview_scores = await InterviewScoring.getAll();
        return interview_scores;
    }
    catch (error) {
        throw error;
    }
}


async function updateInterviewScore(interview_score_id, interview_score) {
    try {
        let { comments } = interview;

        if(comments.length < 3)
            {
                return new Error("Invalid comments, comments must be more than three characters")
            }
     
        const updateInterview = await InterviewScoring.updateInterview(interview_score_id, interview_score);
        return updateInterview;
    }
    catch (error) {
        throw error;
    }
}


async function getInterviewScoreById(interview_score_id) {
    try {
        const interview = await InterviewScoring.getInterviewScoreById(interview_score_id);
        return interview;
    }
    catch (error) {
        throw error;
    }
}

async function getInterviewScores(score) {
    try {
        const interview = await InterviewScoring.getInterviewScore(score);
        return interview;
    }
    catch (error) {
        throw error;
    }
}


module.exports = {
    createInterviewScore,
    getAllInterviewScores,
    getInterviewScores,
    updateInterviewScore,
    getInterviewScoreById,
}