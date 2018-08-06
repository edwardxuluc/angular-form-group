'use strict';

angular.module('angular.form.group', [])

.directive('formGroup', function(){
    return{
        scope: {
            form : '=',
            name : '@',
        },
        restrict: 'AC',
        link: function( $scope, element, attrs, controller ){

            $scope.$watchGroup(["form['"+ $scope.name + "'].$valid", "form['"+ $scope.name + "'].$pristine"], function ( value1, value2 ){
                $scope.agregar_clases();
            }, true);

            $scope.agregar_clases = function (){
                if( $scope.form && $scope.name ){
                    if( $scope.form[ $scope.name ] ){
                        if( !$scope.form[ $scope.name ].$pristine ){
                            if( $scope.form[ $scope.name ].$valid ){
                                element.removeClass('has-error').addClass('has-success');
                            }else{
                                element.removeClass('has-success').addClass('has-error');
                            }
                        }else{
                            element.removeClass('has-success').removeClass('has-error');
                        }
                    }
                }
            };
        }
    };
})