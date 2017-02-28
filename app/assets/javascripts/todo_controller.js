(function() {
  "use strict";

  angular.module("app").controller("todoController", function($scope) {
    
    $scope.tasks = [
                      {
                        text: "Take out garbage.",
                        completed: false
                      },

                      {
                        text: "Run errands.", 
                        completed: false
                        
                      },

                      {
                        text: "Spend time with family.",
                        completed: false

                      } 
                    ];

    $scope.addTask = function(newtext){
      if (newtext) {
        var task = {
                      text: newtext,
                      completed: false
                    }
        $scope.tasks.push(task);
        $scope.newTask = null;
      }
    };

    $scope.toggleComplete = function(task) {
      task.completed = !task.completed;
    };

    $scope.completedCounter = function() {
      var completedTasks = 0
      for (var i = 0; i < $scope.tasks.length; i++) {
        if ($scope.tasks[i].completed === true) {
          completedTasks += 1
        }
      }

      return completedTasks
    };

    $scope.deleteCompleted = function() {
      var completedTasks = 0
      for (var i = 0; i < $scope.tasks.length; i++) {
        if ($scope.tasks[i].completed === true) {
          completedTasks += 1
        }
      }
      for (var j = 0; j < completedTasks; j++) { 
        for (var k = 0; k < $scope.tasks.length; k++) {
          if ($scope.tasks[k].completed === true) {
            $scope.tasks.splice(k, 1)
          }
        }
      }
    };


    window.scope = $scope;
  });
}());