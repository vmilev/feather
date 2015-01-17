﻿(function () {
    angular.module('sfSelectors')
        .directive('sfLinkSelector', ["serverContext", function (serverContext) {
            return {
                restrict: 'E',
                templateUrl: function (elem, attrs) {
                    var assembly = attrs.sfTemplateAssembly || 'Telerik.Sitefinity.Frontend';
                    var url = attrs.sfTemplateUrl || 'client-components/selectors/tools/sf-link-selector.html';
                    return serverContext.getEmbeddedResourceUrl(assembly, url);
                },
                link: {
                    pre: function (scope, element, attrs, ctrl) {
                        
                    }
                }
            };
        }]);
})();