module.exports = function() {
    this.name = element(by.model('mealAdder.newMeal.name'));
    this.mealType = element(by.model('mealAdder.newMeal.meal_type'));
    this.path = element(by.model('mealAdder.newMeal.path'));
    //this.imagePath = element(by.model('mealAdder.newMeal.image_path'));
    this.fileType = element(by.model('mealAdder.newMeal.file_type'));
    this.meatType = element(by.model('mealAdder.newMeal.meat_type'));
    this.meatTypeBeef = element(by.cssContainingText('option', 'Beef'));
    this.nameValidation = element(by.id("nameValidation"));
    this.save = element(by.buttonText('Save'));
    this.cancel = element(by.buttonText('Cancel'));

    this.mealsUrl = element(by.id('breadcrumbMeals'));
}