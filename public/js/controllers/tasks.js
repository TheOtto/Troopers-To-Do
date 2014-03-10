/**
 * Created by umut.koseali on 28.02.2014.
 */
'use strict';

angular.module('mean.tasks').controller('TasksController', ['$scope', '$stateParams', '$location', 'Global', 'Tasks', function ($scope, $stateParams, $location, Global, Tasks) {
    $scope.global = Global;
    //var self = this;

    $scope.create = function () {
        var task = new Tasks({
            content: $scope.content,
            project: $scope.project,
            isComplete: $scope.isComplete | false
        });
        task.$save(function (response) {
            $location.path('tasks/' + response._id);
        });

        $scope.content = '';
        $scope.project = '';
        $scope.isComplete = false;
        $scope.find();
    };

    $scope.remove = function (task) {
        if (task) {
            task.$remove();

            for (var i in $scope.tasks) {
                if ($scope.tasks[i] === task) {
                    $scope.tasks.splice(i, 1);
                }
            }
        }
        else {
            $scope.task.$remove();
            $location.path('tasks');
        }
    };

    $scope.update = function (task) {
        task.$update(function () {
            $location.path('task/' + task._id);
        });
    };

    $scope.find = function () {
        Tasks.query(function (tasks) {
            $scope.tasks = tasks;
        });
    };

    $scope.find();

    $scope.findOne = function () {
        Tasks.get({
            taskId: $stateParams.taskId
        }, function (task) {
            $scope.task = task;
        });
    };

    $scope.complete = function(task){
      task.isComplete = !task.isComplete;
      task.modifiedDate = new Date().getTime();
      $scope.update(task);
    };

    $scope.active = function(task){
      task.isActive = !task.isActive;
      task.modifiedDate = new Date().getTime();
      $scope.update(task);
    };
}]);