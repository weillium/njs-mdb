const resumeRoutes    = require('./resume_routes');
const userRoutes      = require('./user_routes');

module.exports = function(app, db) {
    resumeRoutes(app, db);
}

module.exports = function(app, db) {
    userRoutes(app, db);
}