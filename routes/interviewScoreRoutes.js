const router = require("express").Router();
const interviewScoringController = require("../controllers/interviewScoringController");

router.post("/createInterviewScore", interviewScoringController.createInterviewScore);
router.get("/", interviewScoringController.getAllInterviews);
router.put("/:id", interviewScoringController.updateInterviewScore);
router.get("/getInterviewScore", interviewScoringController.getInterviewScore);
router.get("/:id", interviewScoringController.getInterviewScoreById);

module.exports = router;