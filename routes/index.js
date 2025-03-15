module.exports = function (app) {
    app.use('/api/interviews', require("./interviewRoutes"));
  
  
  
    app.use((req, res, next) => {
      res.status(404).json({
        message: 'Invalid api endpoint',
      });
    });
  
  }