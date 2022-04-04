const siteRoute = require('./site');
const coursesRoute = require('./courses');
function route(app) {
  app.use('/courses', coursesRoute);
  app.use('/', siteRoute);
}
module.exports = route;
