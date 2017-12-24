module.exports = function() {
    this.imagePath = element(by.model('mealUpdate.currentMeal.image_path'));
    this.name = element(by.model('mealUpdate.currentMeal.name'));
    this.mealType = element(by.model('mealUpdate.currentMeal.meal_type'));
    this.meatTypeBeef = element(by.cssContainingText('option', 'Beef'));
    this.save = element(by.buttonText('Save'));
    this.cancel = element(by.buttonText('Cancel'));
    
}