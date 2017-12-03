describe('constants service', function() {
	var constants = {};
	var constantsData = { 
		APP_TITLE: 'Menu Plan',
		APP_DESCRIPTION: 'Organise your meals over a certain period.',
		APP_VERSION: '1.0',
		MEAT_TYPE_URL: 'http://localhost:3000/listValues/meat_type',
		MEAL_TYPE_URL: 'http://localhost:3000/listValues/meal_type',
		FILE_TYPE_URL: 'http://localhost:3000/listValues/file_type',
		MEALS_URL: 'http://localhost:3000/meal_options/',
		PLANS_URL: 'http://localhost:3000/eaten/'
	}
	
	beforeEach(module('app'));

	beforeEach(inject(function(_constants_) {
		constants = _constants_;
	}));

	it('should have the title constant set', function() {
		expect(angular.mock.dump(constants.APP_TITLE)).toEqual(constantsData.APP_TITLE);
	});
	it('should have the description constant set', function() {
		expect(angular.mock.dump(constants.APP_DESCRIPTION)).toEqual(constantsData.APP_DESCRIPTION);
	});
	it('should have the version constant set', function() {
		expect(angular.mock.dump(constants.APP_VERSION)).toEqual(constantsData.APP_VERSION);
	});
	it('should have the meat type url constant set', function() {
		expect(angular.mock.dump(constants.MEAT_TYPE_URL)).toEqual(constantsData.MEAT_TYPE_URL);
	});
	it('should have the meal type url constant set', function() {
		expect(angular.mock.dump(constants.MEAL_TYPE_URL)).toEqual(constantsData.MEAL_TYPE_URL);
	});
	it('should have the file type url constant set', function() {
		expect(angular.mock.dump(constants.FILE_TYPE_URL)).toEqual(constantsData.FILE_TYPE_URL);
	});
	it('should have the meals url constant set', function() {
		expect(angular.mock.dump(constants.MEALS_URL)).toEqual(constantsData.MEALS_URL);
	});
	it('should have the plans url constant set', function() {
		expect(angular.mock.dump(constants.PLANS_URL)).toEqual(constantsData.PLANS_URL);
	});
});