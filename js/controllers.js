angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, $http, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

      $scope.chats = Chats.all();
      $http({
      url:'http://localhost/index.php/home/bestforbaby?way=ngview',
      method:'GET'
      }).success(function(newItems) {
       console.log("success");
       //$scope.chats = newItems;
     }).error(function(){
      console.log("fail");
      //$scope.chats = Chats.all();
     })

  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
  $scope.chats = Chats;
  $scope.photoSlides = 0;
})
.controller('LoginCtrl', function($scope) {

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.controller('PhoneListCtrl', function($scope) {
  $scope.phones = [
    {"name": "Nexus S",
     "snippet": "Fast just got faster with Nexus S."},
    {"name": "Motorola XOOM™ with Wi-Fi",
     "snippet": "The Next, Next Generation tablet."},
    {"name": "MOTOROLA XOOM™",
     "snippet": "The Next, Next Generation tablet."}
  ];
})
.controller('registerCtrl',function($scope){})
.controller('AddCardCtrl',function($scope){})
.controller('111Ctrl',function($scope){})
.controller('productCtrl', function ($scope) {
})

.controller('chanpinCtrl', function ($scope) {

})
.controller('homepageCtrl', function ($scope) {

})

.controller('actionCtrl', function ($scope) {

})

.controller('nightCtrl', function ($scope) {

})
.controller('111Ctrl', function ($scope) {

})

.controller('222Ctrl', function ($scope) {

})

.controller('cameraTabDefaultPageCtrl', function ($scope) {

})

.controller('cartTabDefaultPageCtrl', function ($scope) {

})

.controller('cloudTabDefaultPageCtrl', function ($scope) {

})
.controller('mybzCtrl', function ($scope) {

})
.controller('CardListCtrl',function($scope){
  $scope.cards = [
    {"bank": "北京银行",
     "number": "4225 **** **** 2548"},
     {"bank": "山西银行",
     "number": "4225 **** **** 2548"},
     {"bank": "招商银行",
     "number": "4235 **** **** 2542"}
  ];
})
.controller('introCtrl', function ($scope) {

})

.controller('feedbackCtrl', function ($scope) {

})

.controller('beginnerCtrl', function ($scope) {

})

.controller('guaranteeCtrl', function ($scope) {

})

.controller('settingCtrl', function ($scope) {

})

.controller('homepageCtrl', function ($scope) {

})
;