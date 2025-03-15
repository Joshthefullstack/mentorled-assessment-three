const router = require("express").Router();
const interviewController = require("../controllers/interviewController");

router.post("/createInterview", interviewController.createInterview);
router.get("/?:page&:limit", interviewController.getAllInterviews);
router.put("/:id", interviewController.updateInterview);
router.delete("/:id", interviewController.deletedInterview);
router.get("/:id", interviewController.getInterviewById);

module.exports = router;