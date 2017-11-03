(function () {
    
    angular.module('app')
    .factory('dataService', dataService);

    dataService.$inject = ['$q', '$http', 'constants', '$cacheFactory'];

    function dataService($q,$http,constants,$cacheFactory){
        return {
            getAllMeals: getAllMeals,
            addNewMeal: addNewMeal,
            getMealByID: getMealByID,
            updateMeal: updateMeal,
            addToPlan: addToPlan,
            getCurrentPlan: getCurrentPlan,
            deletePlan: deletePlan/*,
            deleteMeal: deleteMeal*/
        };

        function getAllMeals() {

            return $http({
                method: 'GET',
                url: constants.MEALS_URL,
                cache: true
            })
            .then(sendResponseData)
            .catch(sendGetMealsError)

        }

        function deleteAllMealsResponseFromCache() {

            var httpCache = $cacheFactory.get('$http');
            httpCache.remove(constants.MEALS_URL);

        }

        function deleteAllPlansResponseFromCache() {
            var httpCache = $cacheFactory.get('$http');
            httpCache.remove(constants.PLANS_URL);
        }

        function sendResponseData(response) {
            return response.data;

        }

        function sendGetMealsError(response) {

            return $q.reject('Error retrieving meal(s). (HTTP status: ' + response.status + ')');

        }

        function addNewMeal (newMeal){
            return $http.post(constants.MEALS_URL, newMeal, {
                transformRequest: transformPostRequest
            })
            .then(addMealSuccess)
            .catch(addMealError);
        }

        function transformPostRequest(data, headersGetter) {

        data.newMeal = true;

        return JSON.stringify(data);
        }

        function addMealSuccess(response) {
            deleteAllMealsResponseFromCache();
            return 'Meal added: ' + response.config.data;

        }

        function addMealError(response) {
            return $q.reject('Error adding plan. (HTTP status: ' + response.status + ')');
        }

        function getMealByID(mealID) {

            return $http.get(constants.MEALS_URL + mealID)
            .then(sendResponseData)
            .catch(sendGetMealsError);

        }

        function updateMeal(meal) {

            deleteAllPlansResponseFromCache();
            deleteAllMealsResponseFromCache();

            return $http({
                method: 'PUT',
                url: constants.MEALS_URL + meal.id,
                data: meal
            })
            .then(updateMealSuccess)
            .catch(updateMealError);

        }

        function updateMealSuccess(response) {

            return 'Meal updated: ' + response.config.data.name;

        }

        function updateMealError(response) {

            return $q.reject('Error updating meal.(HTTP status: ' + response.status + ')');

        }

        function addToPlan(meal) {

            return $http.post(constants.PLANS_URL, meal, {
                transformRequest: transformPostRequest
            })
            .then(addPlanSuccess)
            .catch(addPlanError);
        }

        function transformPostRequest(data, headersGetter) {

            data.newPlan = true;

            return JSON.stringify(data);
        }

        function addPlanSuccess(response) {
            return 'Plan added: ' + response.config.data;

        }

        function addPlanError(response) {

            return $q.reject('Error adding plan. (HTTP status: ' + response.status + ')');

        }

        function getCurrentPlan() {

            return $http({
                method: 'GET',
                url: constants.PLANS_URL,
                cache: false
            })
            .then(sendResponseData)
            .catch(sendGetPlanError)

        }

        function deleteCurrentPlanResponseFromCache() {

            var httpCache = $cacheFactory.get('$http');
            httpCache.remove(constants.PLANS_URL);

        }

        function sendResponseData(response) {
            return response.data;
        }

        function sendGetPlanError(response) {

            return $q.reject('Error retrieving plan(s). (HTTP status: ' + response.status + ')');

        }

        function deletePlan(planId) {

            return $http({
                method: 'DELETE',
                url: constants.PLANS_URL + planId
            })
                .then(deletePlanSuccess)
                .catch(deletePlanError);

        }

        function deletePlanSuccess(response) {

            return 'Plan deleted.';

        }

        function deletePlanError(response) {

            return $q.reject('Error deleting Plan. (HTTP status: ' + response.status + ')');

        }
/*
        function deleteBook(bookID) {

            deleteSummaryFromCache();
            deleteAllBooksResponseFromCache();

            return $http({
                method: 'DELETE',
                url: 'api/books/' + bookID
            })
                .then(deleteBookSuccess)
                .catch(deleteBookError);

        }

        function deleteBookSuccess(response) {

            return 'Book deleted.';

        }

        function deleteBookError(response) {

            return $q.reject('Error deleting book. (HTTP status: ' + response.status + ')');

        }

*/  }

}());
