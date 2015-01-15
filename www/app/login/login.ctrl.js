angular.module('LoginCtrl', [])

.controller('loginCtrl', ['$timeout', function($timeout) {
  var lc = this
  lc.showAnimated = false;
  $timeout(function() {
        lc.showAnimated = true;
        console.log(lc.showAnimated)
      }, 3000);

}])

;
