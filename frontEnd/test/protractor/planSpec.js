"use strict"
var IndexPage = require('./pages/indexPage.js');
var PlanPage = require ('./pages/planPage.js');
//var EditPage = require ('./pages/editPage.js');
//var AddPage = require ('./pages/addPage.js');
var MealsPage = require ('./pages/mealsPage.js');

describe('Plan Details:',function(){
    var mealsPage = new MealsPage();
    var planPage = new PlanPage();
//    var editPage = new EditPage();
//    var addPage = new AddPage();
    var indexPage = new IndexPage();
    var firstElement;
    describe('when testing navigation', function(){
        beforeEach(function(){
            browser.get(mealsPage.urlRoot);            
        });
        it('should navigate to plans screen when clicking on navbar', function(){
            indexPage.planUrl.click();
            browser.waitForAngular();
            expect(browser.getCurrentUrl()).toMatch(indexPage.navigatePlan);
        });
        it('should navigate to autofill screen when clicking on Automatically Generate Meal Plan link', function(){
            indexPage.planUrl.click();
            browser.waitForAngular();
            planPage.autoFill.click();
            browser.waitForAngular();
            expect(browser.getCurrentUrl()).toMatch(planPage.navigateAutoFill);
        });
        it('should navigate to plan meals screen when clicking on Select Meal from Meals Available link', function(){
            indexPage.planUrl.click();
            browser.waitForAngular();
            planPage.planMeal.click();
            browser.waitForAngular();
            expect(browser.getCurrentUrl()).toMatch(planPage.navigatePlanMeals);
        });
    });
    xdescribe('when clicking on Add a New Meal',function(){
        beforeEach(function(){
            //inital load of the page
            browser.get(urlRoot);
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
    xdescribe('when clicking on an event',function(){
        beforeEach(function(){
            //inital load of the page
            browser.get(urlRoot);
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
    xdescribe('when clicking on item added previously', function(){
        beforeEach(function(){
            browser.get(urlRoot);
            
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