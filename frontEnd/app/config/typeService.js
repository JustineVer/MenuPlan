(function () {
    
    angular.module('app')
    .factory('typeService', typeService);

    typeService.$inject = ['$q', '$http', 'constants', '$cacheFactory'];

    function typeService($q,$http,constants,$cacheFactory){
        return {
            getMeatTypes: getMeatTypes,
            getMealTypes: getMealTypes,
            getFileTypes: getFileTypes
        };

        function getMeatTypes() {

            return $http({
                method: 'GET',
                url: constants.MEAT_TYPE_URL,
                cache: true
            })
            .then(sendResponseData)
            .catch(sendGetMeatTypesError)

        }

        function getMealTypes() {
            
            return $http({
                method: 'GET',
                url: constants.MEAL_TYPE_URL,
                cache: true
            })
            .then(sendResponseData)
            .catch(sendGetMealTypesError)

        }
/*
        function deleteAllMeatTypesResponseFromCache() {

            var httpCache = $cacheFactory.get('$http');
            httpCache.remove('http://localhost:3000/listValues/meat_type');

        }
*/
        function getFileTypes() {
    
            return $http({
                method: 'GET',
                url: constants.FILE_TYPE_URL,
                cache: true
            })
            .then(sendResponseData)
            .catch(sendGetFileTypesError)

        }
        function sendResponseData(response) {
            return response.data;

        }

        function sendGetMeatTypesError(response) {

            return $q.reject('Error retrieving meat type(s). (HTTP status: ' + response.status + ')');

        }
        function sendGetMealTypesError(response) {
            
            return $q.reject('Error retrieving meal type(s). (HTTP status: ' + response.status + ')');

        }
        function sendGetFileTypesError(response) {
            
            return $q.reject('Error retrieving file type(s). (HTTP status: ' + response.status + ')');

        }
    }

}());
