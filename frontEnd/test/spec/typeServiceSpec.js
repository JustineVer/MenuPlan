describe('type service', function() {
	var typeService = {};
	var $httpBackend;
	var meatTypeData = [{"id":1,"meat_type":"Bacon"},{"id":2,"meat_type":"Chicken"},{"id":3,"meat_type":"Beef"},{"id":4,"meat_type":"Chorizo"},{"id":5,"meat_type":"Pork"},{"id":6,"meat_type":"Veal"},{"id":7,"meat_type":"Fish"},{"id":8,"meat_type":"Lamb"},{"id":9,"meat_type":"Pancetta"},{"id":10,"meat_type":"Sausage"},{"id":11,"meat_type":"Turkey"},{"id":12,"meat_type":"Vegetarian"}];
	var mealTypeData = [{"id":1,"meal_type":"Dinner"},{"id":2,"meal_type":"Lunch soup"},{"id":3,"meal_type":"School Snack"}];
	var fileTypeData = [{"id":1,"file_type":"docx"},{"id":2,"file_type":"jpg"},{"id":3,"file_type":"pdf"},{"id":4,"file_type":"png"},{"id":5,"file_type":"txt"},{"id":6,"file_type":"web"}];
	var meatTypeURL = 'http://localhost:3000/listValues/meat_type';
	var mealTypeURL = 'http://localhost:3000/listValues/meal_type';
	var fileTypeURL = 'http://localhost:3000/listValues/file_type';
	
	beforeEach(module('app'));

	beforeEach(inject(function(_typeService_, _$httpBackend_) {
		typeService = _typeService_;
		$httpBackend = _$httpBackend_;
	}));

	it('should return all meal types', function() {
		var response;

		$httpBackend.when('GET', mealTypeURL)
		.respond(200, mealTypeData);

		typeService.getMealTypes()
		.then(function(data){
			response = data;
		});

		$httpBackend.flush();

		//console.log(angular.mock.dump(response));
		expect(response).toEqual(mealTypeData);
	});

	it('should handle meal type data error', function() {
		var response;

		$httpBackend.when('GET', mealTypeURL)
		.respond(500);

		typeService.getMealTypes()
		.then(function(data){
			response = data;
		})
		.catch(function(){
			response = 'Error retrieving meal type(s). (HTTP status: 500)';
		});
		$httpBackend.flush();
		expect(response).toEqual('Error retrieving meal type(s). (HTTP status: 500)');
	});

	it('should return meat type data', function() {
		var response;

		$httpBackend.when('GET', meatTypeURL)
		.respond(200, meatTypeData);

		typeService.getMeatTypes()
		.then(function(data){
			response = data;
		});

		$httpBackend.flush();

		//console.log(angular.mock.dump(meal2Data));
		expect(response).toEqual(meatTypeData);
	});

	it('should handle meat type data error', function() {
		var response;

		$httpBackend.when('GET', meatTypeURL)
		.respond(500);

		typeService.getMeatTypes()
		.then(function(data){
			response = data;
		})
		.catch(function(){
			response = 'Error retrieving meat type(s). (HTTP status: 500)';
		});
		$httpBackend.flush();
		expect(response).toEqual('Error retrieving meat type(s). (HTTP status: 500)');
	});


	it('should return file type data', function() {
		var response;

		$httpBackend.when('GET', fileTypeURL)
		.respond(200, fileTypeData);

		typeService.getFileTypes()
		.then(function(data){
			response = data;
		});

		$httpBackend.flush();

		//console.log(angular.mock.dump(meal2Data));
		expect(response).toEqual(fileTypeData);
	});

	it('should handle file type data error', function() {
		var response;

		$httpBackend.when('GET', fileTypeURL)
		.respond(500);

		typeService.getFileTypes()
		.then(function(data){
			response = data;
		})
		.catch(function(){
			response = 'Error retrieving file type(s). (HTTP status: 500)';
		});
		$httpBackend.flush();
		expect(response).toEqual('Error retrieving file type(s). (HTTP status: 500)');
	});
});