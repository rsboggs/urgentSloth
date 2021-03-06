angular.module('UserService', []).factory('User', ['$http', function($http) {
  //TODO : rename get and delete to non-keywords....clean up code

  return {

      get : function() {
        return $http({
          method: 'GET',
          url: '/api/users/'
        }).then(function(res){
          return res.data;
        });
      },

      getFriends: function(fbId){
        return $http({
            method: 'GET',
            url: '/api/users/:' + fbId
          }).then(function(res){
            return res.data;
          }).catch(function(err){
            console.error(err);
        });
      },

      create : function(userData) {
        return $http({
          method: 'POST',
          url: '/api/users/',
          data: userData
        });
      },
 
      //should change name of this....
      delete : function(id) {
        return $http.delete('/api/users/' + id);
      },

      removeEvent : function(fbId, eventID) {
        return $http({
          method: 'POST',
          url: '/api/users/removeEvent',
          data: {
            eventID: eventID,
            fbId: fbId
          }
        });
      },

      notifyUser : function(emails, eventName, creatorName){
        return $http({
          method : 'POST',
          url : '/api/users/notify',
          data : {
            emailAddresses : emails,
            eventName : eventName,
            creatorName : creatorName
          }
        });
      },

      getUser : function(fbId){
        return $http({
          method: 'GET',
          url: '/api/user/:' + fbId
        })
        .then(function(res){
           return res.data;
        });
      }

  };

}]);