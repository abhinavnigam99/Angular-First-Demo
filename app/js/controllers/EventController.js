'use strict';

eventsApp.controller('EventController',
    function EventController($scope,eventData){
        $scope.snippet='<span style="color:red">Hi There<span>';
        $scope.myStyle = {color:'red'};
        $scope.myClass = "blue";
        $scope.sortOrder = "-upVoteCount"
        $scope.btnDisabled = true;
        $scope.boolValue = true;
        eventData.getEvent(function(){
            $scope.event = event;
        });


        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        }

        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        }
    }
);