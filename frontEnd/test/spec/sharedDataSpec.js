xdescribe('shared data service', function() {
	var sharedData = {};
	var allMeals = [];
	var meatTypes = [];
	var mealTypes = [];
	var autoFilledMeals = [];
	var requestedMeals = [];
	var fileTypes = [];
	
	beforeEach(module('app'));

	beforeEach(inject(function(_sharedData_) {
		sharedData = _sharedData_;
	}));

	it('should return all meals variable', function() {
//		console.log(angular.mock.dump(sharedData.allMeals));
		expect(sharedData.allMeals).toEqual(allMeals);
	});
	it('should return meat types variable', function() {
		expect(sharedData.meatTypes).toEqual(meatTypes);
	});
	it('should return meal types variable', function() {
		expect(sharedData.mealTypes).toEqual(mealTypes);
	});
	it('should return auto filled meals variable', function() {
		expect(sharedData.autoFilledMeals).toEqual(autoFilledMeals);
	});
	it('should return requested meals variable', function() {
		expect(sharedData.requestedMeals).toEqual(requestedMeals);
	});
	it('should return file types variable', function() {
		expect(sharedData.fileTypes).toEqual(fileTypes);
	});
});