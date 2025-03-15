const Interview = require("../model/interview");

async function createInterview(interview) {
    try {
        let { title, description, questions } = interview;
        if (title.length < 3) {
            return new Error("Invalid title, title must be more than three characters")
        }

        if (description.length < 7) {
            return new Error("Invalid description, description must be more than three characters")
        }
        const newInterview = await Interview.create(interview);
        return newInterview;
    }
    catch (error) {
        throw error;
    }
}

async function getAllInterview() {
    try {
        const interview = await Interview.getAll();
        return interview;
    }
    catch (error) {
        throw error;
    }
}


async function updateInterview(interview_id, interview) {
    try {
        let { title, description, questions } = interview;
        if(interview_id < 1)
        {
            return new Error("Invalid interview")
        }
        if (title.length < 3) {
            return new Error("Invalid title, title must be more than three characters")
        }

        if (description.length < 7) {
            return new Error("Invalid description, description must be more than three characters")
        }

        const updateInterview = await Interview.update(interview_id, interview);
        return updateInterview;
    }
    catch (error) {
        throw error;
    }
}

async function deleteInterview(interview_id) {
    try {
        const deletedInterview = await Interview.delete(interview_id);
        return deletedInterview;
    }
    catch (error) {
        throw error;
    }
}

async function getInterviewById(interview_id) {
    try {
        const interview = await Interview.getInterviewById(interview_id);
        return interview;
    }
    catch (error) {
        throw error;
    }
}

async function findInterviewByPage(limit, offset) {
    try {
        const interview = await Interview.findInterviewByPage(limit, offset);
        return interview;
    }
    catch (error) {
        throw error;
    }
}


module.exports = {
    createInterview,
    getAllInterview,
    deleteInterview,
    updateInterview,
    getInterviewById,
    findInterviewByPage
}