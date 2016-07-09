 /**
 * Confirm Message Directive
 * https://github.com/DevTeamHub/confirm-message-directive
 * (c) 2016 Dev Team Inc. http://dev-team.com
 * License: MIT
 */

var confirmMessageModule = angular.module('dev-team-confirm-message', []);

confirmMessageModule.directive('dtConfirmMessage', dtConfirmMessageDirective)
                    .directive('dtConfirmLink', dtConfirmLinkDirective);

function dtConfirmMessageDirective() {
    return {
        scope: {},
        restrict: "E",
        replace: true,
        templateUrl: templateSelector,
        controller: ['$scope', dtConfirmMessageController],
        controllerAs: "ctrl",
        link: function ($scope) {
            $scope.$on("DtConfirmMessageShow", function (event, data) {
                $scope.message = data.message;
                $scope.note = data.note;
                $scope.isSuccess = data.isSuccess;
                $scope.confirmAction = data.confirmAction;
                $scope.cancelAction = data.cancelAction;
                $scope.addMode = true;
            });
        }
    };

    function templateSelector(element, attrs) {
        if (attrs.templateUrl) {
            return attrs.templateUrl;
        }
        return "dt-confirm-message.tmpl.html";
    }
}

function dtConfirmMessageController($scope) {
    this.cancel = function () {
        $scope.addMode = false;
    };

    this.confirm = function () {
        return $scope.confirmAction().then(function(){
            $scope.addMode = false;
        });
    };
}

function dtConfirmLinkDirective() {
    return {
        scope: {
            text: "@",
            message: "@",
            note: "@",
            confirmAction: "&",
            cancelAction: "&",
            isSuccess: "@"
        },
        restrict: "E",
        replace: true,
        controller: ['$scope', '$rootScope', dtConfirmLinkController],
        controllerAs: "ctrl",
        template: '<button ng-click="ctrl.open()">{{text}}</button>'
    }
}

function dtConfirmLinkController($scope, $rootScope) {
    this.open = function () {
        $rootScope.$broadcast("DtConfirmMessageShow", $scope);
    }
}



angular.module("dev-team-confirm-message").run(["$templateCache", function ($templateCache) {
    $templateCache.put("dt-confirm-message.tmpl.html",
    "<div class=\"fade\" ng-class=\"{modal: addMode, in: addMode}\" tabindex=\"-1\" ng-style=\"addMode && {'display': 'block'} || {'display': 'none'}\"><div class=\"modal-dialog modal-dialog-center\"><div class=\"modal-content\"><div class=\"modal-header message-header\"><h4 class=\"modal-title text-center\">{{message}}<\/h4><\/div><div class=\"modal-footer message-footer\"><button type=\"button\" class=\"btn btn-success\" ng-click=\"ctrl.confirm()\">Ok<\/button><button type=\"button\" class=\"btn btn-danger\" ng-click=\"ctrl.cancel()\">Cancel<\/button><\/div><\/div><\/div><\/div>");
}]);