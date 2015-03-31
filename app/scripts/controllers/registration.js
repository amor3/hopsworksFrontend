'use strict';

angular.module('hopsWorksApp')
  .controller('RegCtrl', ['RegisterService', '$location', function (RegisterService, $location) {

    var self = this;

    self.newUser = {
      firstName: '',
      lastName: '',
      email: '',
      tel: '',
      chosenPassword: '',
      repeatedPassword: '',
      secQuestion: '',
      secAnswer: '',
      ToS: ''
    };

    self.register = function () {
      RegisterService.register(self.newUser).then(function (success) {
        self.message = success.data.msg;
        $location.path('/login.html');
      }, function (error) {
        self.errorMessage = error.data.msg;
      })
    }
  }]);
