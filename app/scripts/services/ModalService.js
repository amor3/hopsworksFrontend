'use strict';

angular.module('hopsWorksApp')
    .factory('ModalService', ['$modal', function ($modal) {
        return {

            confirm: function (size, title, msg) {
                var modalInstance = $modal.open({
                    templateUrl: 'views/confirmModal.html',
                    controller: 'ModalCtrl as ctrl',
                    size: size,
                    resolve: {
                        title: function () {
                            return title;
                        },
                        msg: function () {
                            return msg;
                        }
                    }
                });
                return modalInstance.result;
            },

            createProject: function (size) {
                var modalInstance = $modal.open({
                    templateUrl: 'views/projectModal.html',
                    controller: 'ProjectCreatorCtrl as projectCreatorCtrl',
                    size: size,
                    resolve: {
                        auth: ['$q', '$location', 'AuthService',
                            function ($q, $location, AuthService) {
                                return AuthService.session().then(
                                    function (success) {
                                    },
                                    function (err) {
                                        $location.path('/login');
                                        $location.replace();
                                        return $q.reject(err);
                                    });
                            }]
                    }
                });
                return modalInstance.result;
            },

            projectSettings: function (size) {
                var modalInstance = $modal.open({
                    templateUrl: 'views/projectSettingsModal.html',
                    controller: 'ProjectCtrl as projectCtrl',
                    size: size,
                    resolve: {
                        auth: ['$q', '$location', 'AuthService',
                            function ($q, $location, AuthService) {
                                return AuthService.session().then(
                                    function (success) {
                                    },
                                    function (err) {
                                        $location.path('/login');
                                        $location.replace();
                                        return $q.reject(err);
                                    });
                            }]
                    }
                });
                return modalInstance.result;
            },


            profile: function (size) {
                var modalInstance = $modal.open({
                    templateUrl: 'views/profile.html',
                    controller: 'ProfileCtrl as profileCtrl',
                    size: size,
                    resolve: {
                        auth: ['$q', '$location', 'AuthService',
                            function ($q, $location, AuthService) {
                                return AuthService.session().then(
                                    function (success) {
                                    },
                                    function (err) {
                                        $location.path('/login');
                                        $location.replace();
                                        return $q.reject(err);
                                    });
                            }]
                    }
                });
                return modalInstance.result;
            }
        }

    }]);
