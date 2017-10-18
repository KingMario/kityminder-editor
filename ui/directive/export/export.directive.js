angular.module('kityminderEditor')
    .directive('export', function() {
        return {
            restrict: 'E',
            templateUrl: 'ui/directive/export/export.html',
            scope: {
                minder: '='
            },
            replace: true,
            link: function($scope) {
                $scope.export = function () {
                    var link = document.createElement('a');
                    link.href = window.URL.createObjectURL(new Blob([
                        JSON.stringify(this.minder.exportJson(), null, 2)
                    ], {
                        type: 'application/json'
                    }));
                    link.setAttribute('visibility', 'hidden');
                    link.setAttribute('download', 'data.json');

                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                };
            }
        }
    });