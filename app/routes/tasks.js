/**
 * Created by umut.koseali on 28.02.2014.
 */
'use strict';
// Tasks routes use tasks controller
var tasks = require('../controllers/tasks');

module.exports = function(app) {

    app.get('/tasks', tasks.all);
    app.post('/tasks', tasks.create);
    app.get('/tasks/:taskId', tasks.show);
    app.put('/tasks/:taskId', tasks.update);
    app.del('/tasks/:taskId', tasks.destroy);

    // Finish with setting up the taskId param
    app.param('taskId', tasks.task);

};