eventsApp.factory('eventData', function($http,$log){
    return{

        getEvent : function(successCb){
            $http({method : 'GET', url : '/data/event/1'}).
            success(function(data,status,headers,config){
                successCb(data);
            }).
            error(function(data,status,headers,config){
            $log.warn(data,status,headers(),config);
                
            });
            
        }

        /* event: {
            name: 'Abhinav Nigam',
            date: '27/5/2018',
            time: '06:17 PM',
            location: {
                address: 'SS Tower',
                city: 'Mumbai',
                state: 'Maharashtra'
            },
            imageUrl: './img/angularjs-logo.png',
            session: [
                {
                    name: 'Session 1',
                    cretaor: 'Name 1',
                    duration: 1,
                    level: '1',
                    abstract: 'Beginner',
                    upVoteCount: 0
                },
                {
                    name: 'Session 2',
                    cretaor: 'Name 2',
                    duration: 2,
                    level: '2',
                    abstract: 'Intermediate',
                    upVoteCount: 0
                },
                {
                    name: 'Session 3',
                    cretaor: 'Name 3',
                    duration: 3,
                    level: '3',
                    abstract: 'Advanced',
                    upVoteCount: 0
                }
            ]
        } */
    };
});