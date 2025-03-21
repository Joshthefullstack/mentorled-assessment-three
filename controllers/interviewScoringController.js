const interviewScoring = require("../service/interviewScoringService");

async function createInterviewScore(req, res, next) {
  try {
    const interview = await interviewScoring.createInterviewScore(req.body);
    return res.status(201).json({
      status: "success",
      data: interview,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      error: error.message
    })
  }
}

async function getAllInterviews(req, res, next) {
  try{
    
    const interviews = await interviewScoring.getAllInterviewScores();
    
    return res.status(200).json({
      status: "success",
      data: interviews
    });
  } catch(error){
    console.log(error);
  }
}


async function updateInterviewScore(req, res, next){
  try{
    const { interview_score_id } = req.params;
    const interview = await interviewScoring.updateInterviewScore(interview_score_id, req.body);
    return res.status(200).json({
      status: "success",
      data: interview,
    });
  } catch(error){
    return res.status(400).json({
      status: false,
      error: error.message
    })
  }
}

async function getInterviewScoreById(req, res, next){
  try{
    const { interview_score_id } = req.params;
    const interview = await interviewScoring.getInterviewById(interview_score_id);
    return res.status(200).json({
      status: "success",
      data: interview,
    });
  } catch(error){
    return res.status(400).json({
      status: false,
      error: error.message
    })
  }
}

async function getInterviewScore(req, res, next){
    try{
      const interview = await interviewScoring.getInterviewScores(req.score);
      return res.status(200).json({
        status: "success",
        data: interview,
      });
    } catch(error){
      return res.status(400).json({
        status: false,
        error: error.message
      })
    }
  }

module.exports = {
    createInterviewScore,
    updateInterviewScore,
    getInterviewScore,
    getAllInterviews,
    getInterviewScoreById
};