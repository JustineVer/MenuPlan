module.exports = function() {
    this.modalWindow = element(by.className('modal-demo'));
    
    this.addNewMealUrl = "AddNewMeal";
    this.urlRoot = 'http://localhost/menuplan/index.html#/';
    
    
    this.name = element(by.model('event.name'));
    this.mealsName = element.all(by.repeater('meal in MealController.allMeals').row(0).column('meal.name'));
    this.mealsNameSrc = 'meal.name';
    this.mealsFirstElement = element.all(by.binding('name')).first();
    this.mealsAddNewMealLink =  element(by.css('a[href*='+this.addNewMealUrl+']'));

    this.modalEditMeal = element(by.buttonText('Edit Meal'));
    this.modalDeleteMeal = element(by.buttonText('Delete Meal'));
    this.modalCancel = element(by.buttonText('Cancel'));
    this.modalMealType = element(by.binding('meal_type'));
    this.modalMeatType = element(by.binding('meat_type'));

            
    
    
}