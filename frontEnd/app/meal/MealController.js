(function() {
    
        angular.module('app')
            .controller('mealController', ['$q', 'dataService', '$log', '$route', 'sharedData', MealController]);
    
    
        function MealController($q, dataService, $log, $route, sharedData) {
    
            var vm = this;

            
            dataService.getAllMeals()
                .then(getMealsSuccess, null, getMealsNotification)
                .catch(errorCallback)
                .finally(getAllMealsComplete);
    
            function getMealsSuccess(meals) {
                //console.log(meals);
                sharedData.allMeals = meals;
                vm.allMeals = meals;
                console.log(vm.allMeals);
            }
    
            function getMealsNotification(notification) {
                //console.log('Promise Notification: ' + notification);
            }
    
            function errorCallback(errorMsg) {
                console.log('Error Message: ' + errorMsg);
            }
    
            function getAllMealsComplete() {
                //console.log('getAllBooks has completed');
            }
    /*
            dataService.getAllReaders()
                .then(getReadersSuccess)
                .catch(errorCallback)
                .finally(getAllReadersComplete);
    
            function getReadersSuccess(readers) {
                vm.allReaders = readers;
            }
    
            function getAllReadersComplete() {
                $log.awesome('All readers retrieved');
            }
    
            vm.getBadge = badgeService.retrieveBadge;
    
            vm.favoriteBook = $cookies.favoriteBook;
    
            vm.currentUser = currentUser;
    
            vm.deleteBook = function (bookID) {
    
                dataService.deleteBook(bookID)
                    .then(deleteBookSuccess)
                    .catch(deleteBookError);
    
            };
    
            function deleteBookSuccess(message) {
                $log.info(message);
                $route.reload();
            }
    
            function deleteBookError(errorMessage) {
                $log.error(errorMessage);
            }
    */
        }
    
    }());