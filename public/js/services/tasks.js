/**
 * Created by umut.koseali on 28.02.2014.
 */
'use strict';

//Tasks service used for articles REST endpoint
angular.module('mean.tasks').factory('Tasks', ['$resource', function ($resource) {
    return $resource('tasks/:taskId', {
        taskId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);