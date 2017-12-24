"use strict"
var MealsPage = require ('./pages/mealsPage.js');
var EditPage = require ('./pages/editPage.js');
var AddPage = require ('./pages/addPage.js');
var IndexPage = require('./pages/indexPage.js');

describe('Meal Details:',function(){
    var nameBeforeEdit;
    var mealsPage = new MealsPage();
    var editPage = new EditPage();
    var addPage = new AddPage();
    var indexPage = new IndexPage();
    var firstElement;
    var testMealName = 'testMeal';
    describe('when testing navigation', function(){
        beforeEach(function(){
            browser.get(mealsPage.urlRoot);
        });
        it('should navigate to meals screen when clicking on breadcrumb', function(){
            mealsPage.mealsAddNewMealLink.click();
            addPage.mealsUrl.click();
            browser.waitForAngular();
            expect(browser.getCurrentUrl()).toMatch('/');
        });
        it('should navigate to meals screen when clicking on navbar', function(){
            mealsPage.mealsAddNewMealLink.click();
            indexPage.mealsUrl.click();
            browser.waitForAngular();
            expect(browser.getCurrentUrl()).toMatch('/');
        });
        it('should navigate to plans screen when clicking on navbar', function(){
            indexPage.planUrl.click();
            browser.waitForAngular();
            expect(browser.getCurrentUrl()).toMatch(indexPage.navigatePlan);
        });
    });
    describe('when clicking on Add a New Meal',function(){
        beforeEach(function(){
            //inital load of the page
            browser.get(mealsPage.urlRoot);
            mealsPage.mealsAddNewMealLink.click();
            browser.waitForAngular();
            
        });
        it('should navigate to New Meal screen',function(){
            expect(browser.getCurrentUrl()).toMatch(mealsPage.addNewMealUrl);
        });
        
        it('should add new meal',function(){
            addPage.name.sendKeys(testMealName);
            addPage.mealType.sendKeys('Dinner');
            addPage.path.sendKeys('http://www.test.com');
            //addPage.imagePath.sendKeys(testImage);
            addPage.fileType.sendKeys('txt');
            addPage.meatType.sendKeys('beef');

            addPage.save.click();
            expect(browser.getCurrentUrl()).toMatch('/');
            var listElements = element.all(by.binding('name'));
            expect(listElements.getText()).toMatch(testMealName);
        });

        it('should not enable save button unless mandatory fields entered',function(){
            var testMealName = 'mandatoryTestMeal';
            expect(addPage.save.isEnabled()).toBe(false);
            addPage.name.sendKeys(testMealName);
            expect(addPage.save.isEnabled()).toBe(false);
            addPage.meatTypeBeef.click();
            expect(addPage.save.isEnabled()).toBe(false);
            addPage.mealType.sendKeys('Dinner');
            expect(addPage.save.isEnabled()).toBe(true);
            addPage.meatTypeBeef.click();
            expect(addPage.save.isEnabled()).toBe(false);
            addPage.meatTypeBeef.click();
            expect(addPage.save.isEnabled()).toBe(true);
            addPage.name.clear().then(function() {
                expect(addPage.save.isEnabled()).toBe(false);
//                expect(addPage.nameValidation.isPresent()).toBeTruthy();
//                expect(addPage.nameValidation.isDisplayed()).toBeTruthy();
                addPage.name.sendKeys(testMealName);
                expect(addPage.save.isEnabled()).toBe(true);
//                browser.wait(protractor.ExpectedConditions.invisibilityOf(addPage.nameValidation), 10000);
//                expect(addPage.nameValidation.isPresent()).toBeFalsy();
//                expect(addPage.nameValidation.isDisplayed()).toBeFalsy();
            });
            
        });
    });
    describe('when clicking on an event',function(){
        beforeEach(function(){
            //inital load of the page
            browser.get(mealsPage.urlRoot);
            firstElement = mealsPage.mealsFirstElement;
        });

        it('Should display modal',function(){
            firstElement.click();
            expect(mealsPage.modalWindow.isDisplayed()).toBe(true);
            expect(mealsPage.modalWindow.isPresent()).toBe(true);
            var mealType = mealsPage.modalMealType;
            var meatType = mealsPage.modalMeatType;
            expect(mealType.getText()).toMatch('Dinner');
            expect(meatType.getText()).toMatch('Vegetarian');
        });

        xit('Should hide modal when cancel button pressed',function(){
            firstElement.click();
            mealsPage.modalCancel.click();
            expect(mealsPage.modalWindow.isPresent()).toBeFalsy();
            //expect(mealsPage.modalWindow.isDisplayed()).toBeFalsy();
        });

        describe('when clicking on Edit button',function(){
            it('Should navigate to Edit screen',function(){
                firstElement.click();
                
                mealsPage.modalEditMeal.click();
                browser.waitForAngular();
                expect(browser.getCurrentUrl()).toMatch('EditMeal/');
            });

            it('Should update meal in Edit screen',function(){
                firstElement.click();

                mealsPage.modalEditMeal.click();
                browser.waitForAngular();

                editPage.name.getAttribute('value').then(function(text) {
                nameBeforeEdit = text;
                });

                editPage.name.clear().then(function() {
                    editPage.name.sendKeys('test'+nameBeforeEdit);
                });
                
                editPage.save.click();
                expect(browser.getCurrentUrl()).toMatch('/');
                //expect(mealsPage.modalWindow.isPresent()).toEqual(false);
                
                mealsPage.mealsName.evaluate(mealsPage.mealsNameSrc)
                .then(function(text){
                    expect(text).toMatch('test'+nameBeforeEdit);
                });
                
            });

            it('Should return meal to previous values using Edit screen',function(){
                firstElement.click();
                mealsPage.modalEditMeal.click();
                browser.waitForAngular();

                editPage.name.clear().then(function() {
                    editPage.name.sendKeys(nameBeforeEdit);
                });
                
                editPage.save.click();
                expect(browser.getCurrentUrl()).toMatch('/');
                mealsPage.mealsName.evaluate(mealsPage.mealsNameSrc)
                .then(function(text){
                    expect(text).toMatch(nameBeforeEdit);
                });
            });

            it('Should return to meal screen when cancel button is pressed in Edit screen',function(){
                firstElement.click();
                mealsPage.modalEditMeal.click();
                browser.waitForAngular();
                
                editPage.cancel.click();
                expect(browser.getCurrentUrl()).toMatch('/');
            });

            it('should not enable save button unless mandatory fields entered',function(){                
                var items = element.all(by.repeater('meal in MealController.allMeals')).filter(function(item) {
                    return item.element(by.binding('meal.name')).getText().then(function(label) {
                            return label == testMealName;
                    });
                });
                browser.waitForAngular();
                items.get(0).click();
                mealsPage.modalEditMeal.click();
                browser.waitForAngular();

                expect(editPage.save.isEnabled()).toBe(true);
                editPage.name.clear().then(function() {
                    expect(editPage.save.isEnabled()).toBe(false);
                    editPage.name.sendKeys('Dinner');    
                });
                editPage.meatTypeBeef.click();
                expect(editPage.save.isEnabled()).toBe(false);
                editPage.meatTypeBeef.click();
                editPage.mealType.sendKeys('Select Meal');
                expect(addPage.save.isEnabled()).toBe(false);
            });
        });
    });
    describe('when clicking on item added previously', function(){
        beforeEach(function(){
            browser.get(mealsPage.urlRoot);
            
            var items = element.all(by.repeater('meal in MealController.allMeals')).filter(function(item) {
                return item.element(by.binding('meal.name')).getText().then(function(label) {
                        return label == testMealName;
                });
            });
            browser.waitForAngular();
            items.get(0).click();
        });
        it('Should display modal screen for newly added meal',function(){
            expect(mealsPage.modalWindow.isDisplayed()).toBeTruthy();
        });
        it('Should delete meal when delete button clicked',function(){
            var NoOfItems = 0;
            mealsPage.modalDeleteMeal.click();
            browser.waitForAngular();
            //var listElements = element.all(by.binding('name'));
            //expect(listElements.getText()).toMatch(testMealName);
            var items = element.all(by.repeater('meal in MealController.allMeals')).filter(function(item) {
                return item.element(by.binding('meal.name')).getText().then(function(label) {
                        return label == testMealName;
                });
            });
            items.getText().then(function (text) {
                NoOfItems = text.length;
            });
            expect(NoOfItems).toBe(0);
            //expect(mealsPage.modalWindow.isDisplayed()).toBeFalsy();
        });

    });  
});