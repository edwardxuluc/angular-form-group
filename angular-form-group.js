'use strict';

angular.module('angular.form.group', [])

.directive('formGroup', function( $compile ){
    return {
        restrict : 'A',
        link : function ( scope, element, attrs ){

            var element   = angular.element( element );
            var formName  = element.parents('[ng-form]').length ? element.parents('[ng-form]').attr('ng-form') : element.parents('form').attr('name');
            var inputName = attrs.name || element.find('.form-control').attr('name');
            
            if( formName && inputName ){
                inputName       = inputName.replace(/[\{\}\[\]\(\)']+/g, '');
                var new_element = $compile('<div ng-class="{\'has-error\':' + formName + '.' + inputName + '.$invalid && !' + formName + '.' + inputName + '.$pristine, \'has-success\':' + formName + '.' + inputName + '.$valid && !' + formName + '.' + inputName + '.$pristine}"></div>')( scope );
                new_element.append( element.contents() );
                element.html( new_element );
            }
        }
    }
});