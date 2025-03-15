const interviewService = require("../service/interviewService");

async function createInterview(req, res, next) {
  try {
    const interview = await interviewService.createInterview(req.body);
    return res.status(201).json({
      status: "success",
      data: interview,
    });
  } catch (error) {
    // next(error);
    // console.log(error);
    return res.status(400).json({
      status: false,
      error: error.message
    })
  }
}

async function getAllInterviews(req, res, next) {
  try{
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    if((page < 1) || (limit < 1))
    {
      return res.status(400).json({ message: "Page and Page Limit must be greate than zero"});
    }

    if(page > limit)
    {
      return res.status(400).json({ message: "Page must be greater than limit"})
    }

    const offset = (page - 1) * limit;
    
    const interviews = await interviewService.findInterviewByPage(limit, offset);
    
    return res.status(200).json({
      status: "success",
      data: interviews,
      currentPage: page,
      totalPages: Math.floor(offset / limit)
    });
  } catch(error){
    console.log(error);
  }
}


async function updateInterview(req, res, next){
  try{
    const { id } = req.params;
    const interview = await interviewService.updateInterview(id, req.body);
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

async function deletedInterview(req, res, next){
  try{
    const { id } = req.params;
    const interview = await interviewService.deleteInterview(id);
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

async function getInterviewById(req, res, next){
  try{
    const { id } = req.params;
    const interview = await interviewService.getInterviewById(id);
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
    createInterview,
    updateInterview,
    deletedInterview,
    getAllInterviews,
    getInterviewById
};