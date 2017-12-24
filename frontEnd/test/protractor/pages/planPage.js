module.exports = function() {
    this.autoFill =  element(by.linkText('Automatically Generate Meal Plan'));
    this.planMeal =  element(by.linkText('Select Meal from Meals Available'));this.planUrl = element(by.id('navbarPlan'));
    this.navigateAutoFill = 'AutoFill';
    this.navigatePlanMeals = 'PlanMeals';
    

    
}