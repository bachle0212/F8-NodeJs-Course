const SiteController = require('../app/controllers/SiteController');
const newRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./course')
const meRouter = require('./me')

function route(app) {
    app.use('/news', newRouter);
    app.use('/course', courseRouter);
    app.use('/me', meRouter);
    app.use('/', siteRouter);
}

module.exports = route;
