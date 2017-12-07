'use strict'
describe('Meal Controller', function(){
    var $this;
    var $controller, $q, $rootScope, $log, dataService, sharedData;
    var allMealsValue = [{"id":1,"name":"2-INGREDIENT CREAM CHEESE PANCAKES","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":2,"name":"Bacon Cheeseburger Cauliflower Casserole","path":"null","image_path":"../../images/bacon.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Bacon, Beef","meat_type_id":"1, 3"},{"id":3,"name":"Bacon Covered Meatloaf","path":null,"image_path":"../../images/beef.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Beef","meat_type_id":"3"},{"id":4,"name":"Bacon-wrapped meatloaf with roast vegetables","path":"null","image_path":"../../images/veal.jpg","file_type_desc":"png","file_type":4,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Bacon, Beef","meat_type_id":"1, 3"},{"id":5,"name":"Baked chicken with pumpkin and chorizo","path":"","image_path":"../../images/chicken.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken, Chorizo","meat_type_id":"2, 4"},{"id":6,"name":"Baked Moussaka Eggplants","path":null,"image_path":"../../images/lamb.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Lamb","meat_type_id":"8"},{"id":7,"name":"battered fish","path":null,"image_path":"../../images/fish.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Fish","meat_type_id":"7"},{"id":8,"name":"beef and cauli mash cottage pie","path":null,"image_path":"../../images/beef.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Beef","meat_type_id":"3"},{"id":9,"name":"Beef Stroganoff, Keto style","path":null,"image_path":"../../images/beef.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Beef","meat_type_id":"3"},{"id":10,"name":"blueberry and coconut breakfast muffins","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":11,"name":"Broccoli and blue cheese frittata","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Vegetarian","meat_type_id":"12"},{"id":12,"name":"broccoli and spinach soup with cheddar cheese","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Vegetarian","meat_type_id":"12"},{"id":13,"name":"butter chicken","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"pdf","file_type":3,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken","meat_type_id":"2"},{"id":14,"name":"Caprese Chicken","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken","meat_type_id":"2"},{"id":15,"name":"cauli mac and cheese with the works","path":null,"image_path":"../../images/bacon.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Bacon","meat_type_id":"1"},{"id":16,"name":"cauliflower and cheese tots1","path":"null","image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Vegetarian","meat_type_id":"12"},{"id":17,"name":"cheese and herb muffins","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":18,"name":"Chicken and cauliflower bake","path":null,"image_path":"../../images/bacon.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Bacon","meat_type_id":"1"},{"id":19,"name":"Chicken and celery casserole","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken","meat_type_id":"2"},{"id":20,"name":"Chicken and chorizo meatballs","path":null,"image_path":"../../images/sausage.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken, Chorizo","meat_type_id":"2, 4"},{"id":21,"name":"Chicken and Sage Burgers","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken","meat_type_id":"2"},{"id":22,"name":"Chicken casserole with macadamia and basil","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken","meat_type_id":"2"},{"id":23,"name":"Chicken Enchilada Cauliflower Casserole","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken","meat_type_id":"2"},{"id":24,"name":"Chicken meatball stroganoff","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken","meat_type_id":"2"},{"id":25,"name":"Chicken 'parmigiana' Tray Bake","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"pdf","file_type":3,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken","meat_type_id":"2"},{"id":26,"name":"chicken piccata","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"png","file_type":4,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken","meat_type_id":"2"},{"id":27,"name":"CHICKEN SAUSAGE MARSALA","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken","meat_type_id":"2"},{"id":28,"name":"Chicken Souvlaki","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken","meat_type_id":"2"},{"id":29,"name":"Chocolate brownie cookies (birthday biscuits)","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":30,"name":"Chocolate Mousse Cake","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"docx","file_type":1,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":31,"name":"Chorizo Sausage Ragout","path":null,"image_path":"../../images/veal.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chorizo, Pork, Veal","meat_type_id":"4, 5, 6"},{"id":32,"name":"CINNAMON TWISTS","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":33,"name":"Cloud Bread","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":34,"name":"coconut chicken strips","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken","meat_type_id":"2"},{"id":35,"name":"Coconut Lamb","path":null,"image_path":"../../images/lamb.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Lamb","meat_type_id":"8"},{"id":36,"name":"Coconut paleo breakfast loaf","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":37,"name":"cool cookies","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":38,"name":"creamy balsamic chicken","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken","meat_type_id":"2"},{"id":39,"name":"Creamy Cauliflower Mushroom Risotto","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Vegetarian","meat_type_id":"12"},{"id":40,"name":"creamy chicken and mushroom casserole with bacon and spinach","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Bacon, Chicken","meat_type_id":"1, 2"},{"id":41,"name":"Creamy chicken and pumpkin bake","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Bacon, Chicken","meat_type_id":"1, 2"},{"id":42,"name":"Creamy Salsa Chicken","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken","meat_type_id":"2"},{"id":43,"name":"Crustless keto cheesecake","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":44,"name":"Dairy-Free Chocolate Cake (birthday cake)","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":45,"name":"delicious rusks","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":46,"name":"dippy chippies","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":47,"name":"Easy Chicken Florentine Casserole","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken","meat_type_id":"2"},{"id":48,"name":"Easy Christmas pudding ice-cream recipe","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":49,"name":"Easy Mediterranean Chicken Bake","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken","meat_type_id":"2"},{"id":50,"name":"Easy Slow Cooker Pulled Pork","path":"null","image_path":"../../images/pork.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Pork","meat_type_id":"5"},{"id":51,"name":"Easy Taco Pie","path":null,"image_path":"../../images/beef.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Beef","meat_type_id":"3"},{"id":52,"name":"Extra Crispy Lemon and Thyme Chicken","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken","meat_type_id":"2"},{"id":53,"name":"Fish Sticks","path":null,"image_path":"../../images/fish.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Fish","meat_type_id":"7"},{"id":54,"name":"Garlic Parmesan Knots","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":55,"name":"Ginger, coconut and cashew bars","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":56,"name":"Gluten-free 'spaghetti' and meatballs","path":null,"image_path":"../../images/veal.jpg","file_type_desc":"pdf","file_type":3,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Pork, Veal","meat_type_id":"5, 6"},{"id":57,"name":"Greek beef burgers","path":null,"image_path":"../../images/beef.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Beef","meat_type_id":"3"},{"id":58,"name":"Grilled Eggplant Lamb Rolls with Tzatziki","path":null,"image_path":"../../images/lamb.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Lamb","meat_type_id":"8"},{"id":59,"name":"ham and cheese puffs","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":60,"name":"Hamburger Beef Stroganoff","path":null,"image_path":"../../images/beef.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Beef","meat_type_id":"3"},{"id":61,"name":"healthy muffins","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"png","file_type":4,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":62,"name":"Healthy fish sticks","path":null,"image_path":"../../images/fish.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Fish","meat_type_id":"7"},{"id":63,"name":"Italian meatball bake","path":null,"image_path":"../../images/beef.jpg","file_type_desc":"png","file_type":4,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Beef","meat_type_id":"3"},{"id":64,"name":"italian sausage soup","path":null,"image_path":"../../images/sausage.jpg","file_type_desc":"png","file_type":4,"meal_type":"Lunch soup","meal_type_id":"2","meat_type":"Sausage","meat_type_id":"10"},{"id":65,"name":"kale, pea and spinach soup with goat's curd","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"png","file_type":4,"meal_type":"Lunch soup","meal_type_id":"2","meat_type":"Vegetarian","meat_type_id":"12"},{"id":66,"name":"Keto Chicken Enchilada Bake","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken","meat_type_id":"2"},{"id":67,"name":"Keto Cinnamon Rolls with Low Carb Custard Cream","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":68,"name":"Keto Crepes","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":69,"name":"keto egg-chiladas","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Vegetarian","meat_type_id":"12"},{"id":70,"name":"lasagne with zucchini","path":null,"image_path":"../../images/beef.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Beef","meat_type_id":"3"},{"id":71,"name":"laurelle ritzs spinach and ricotta gnudi","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"png","file_type":4,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Vegetarian","meat_type_id":"12"},{"id":72,"name":"layered mexican cob dip","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"png","file_type":4,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":73,"name":"Lime and Blueberry Muffins","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":74,"name":"Low Carb Beef Burritos","path":null,"image_path":"../../images/beef.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Beef","meat_type_id":"3"},{"id":75,"name":"Low Carb Cauliflower Gnocchi","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Vegetarian","meat_type_id":"12"},{"id":76,"name":"Low Carb Cauliflower Tortillas","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":77,"name":"Low Carb Gnocchi","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":78,"name":"Low Carb Meatballs alla parmigiana","path":null,"image_path":"../../images/beef.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Beef","meat_type_id":"3"},{"id":79,"name":"Low Carb Mexican Lasagna","path":null,"image_path":"../../images/beef.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Beef","meat_type_id":"3"},{"id":80,"name":"Low Carb Rolls","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":81,"name":"lunchbox bars","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":82,"name":"marscarpone chicken with basil and tomato sauce","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken","meat_type_id":"2"},{"id":83,"name":"mashed cauliflower","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":84,"name":"Massaman beef skewers","path":null,"image_path":"../../images/beef.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Beef","meat_type_id":"3"},{"id":85,"name":"mexican beef and bean frying pan meatballs","path":null,"image_path":"../../images/beef.jpg","file_type_desc":"png","file_type":4,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Beef","meat_type_id":"3"},{"id":86,"name":"mexican mince","path":null,"image_path":"../../images/beef.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Beef","meat_type_id":"3"},{"id":87,"name":"mexican mixed bean slow-cooker soup","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"png","file_type":4,"meal_type":"Lunch soup","meal_type_id":"2","meat_type":"Vegetarian","meat_type_id":"12"},{"id":88,"name":"Microwave Lemon Curd","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":89,"name":"Minced pork pies","path":null,"image_path":"../../images/pork.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Bacon, Pork","meat_type_id":"1, 5"},{"id":90,"name":"morning tea muesli slice","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":91,"name":"moroccan chicken with butternut squash and red onion couscous","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken","meat_type_id":"2"},{"id":92,"name":"mozzarella dippers","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":93,"name":"Nacho Steak Skillet","path":null,"image_path":"../../images/beef.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Beef","meat_type_id":"3"},{"id":94,"name":"Naan bread","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"School Snack","meal_type_id":"3","meat_type":"Vegetarian","meat_type_id":"12"},{"id":95,"name":"Nutella Ice Cream","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":96,"name":"Paleo Apple Pie","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":97,"name":"paleo blueberry and almond loaf","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":98,"name":"Paleo cauliflower flatbread","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":99,"name":"Paleo Italian Mushroom Bake","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Vegetarian","meat_type_id":"12"},{"id":100,"name":"paleo walnut and date muffins","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":101,"name":"parmesan chicken strips","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken","meat_type_id":"2"},{"id":102,"name":"pizza","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Vegetarian","meat_type_id":"12"},{"id":103,"name":"Pork and veal meatballs with eggplant","path":null,"image_path":"../../images/veal.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Pork, Veal","meat_type_id":"5, 6"},{"id":104,"name":"Pork, cranberry and pistachio rissoles","path":null,"image_path":"../../images/pork.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Pork","meat_type_id":"5"},{"id":105,"name":"Pumpkin Carrot Muffins","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":106,"name":"quick and simple oven bake","path":null,"image_path":"../../images/sausage.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Sausage","meat_type_id":"10"},{"id":107,"name":"Quinoa carrot cake","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"School Snack","meal_type_id":"3","meat_type":"Vegetarian","meat_type_id":"12"},{"id":108,"name":"Ratatouille","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Vegetarian","meat_type_id":"12"},{"id":109,"name":"Ricotta and Spinach Balls in Tomato","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Vegetarian","meat_type_id":"12"},{"id":110,"name":"Sausage casserole","path":null,"image_path":"../../images/sausage.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Sausage","meat_type_id":"10"},{"id":111,"name":"sausage ragu","path":null,"image_path":"../../images/sausage.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Sausage","meat_type_id":"10"},{"id":112,"name":"Sausage risotto","path":null,"image_path":"../../images/sausage.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Sausage","meat_type_id":"10"},{"id":113,"name":"Sausage Stuffed Grilled Eggplant","path":null,"image_path":"../../images/sausage.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Sausage","meat_type_id":"10"},{"id":114,"name":"semolina dumpling soup","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"png","file_type":4,"meal_type":"Lunch soup","meal_type_id":"2","meat_type":"Vegetarian","meat_type_id":"12"},{"id":115,"name":"simple mushroom soup","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Lunch soup","meal_type_id":"2","meat_type":"Vegetarian","meat_type_id":"12"},{"id":116,"name":"SINGLE SERVE CHOCOLATE CHIP BROWNIES","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":117,"name":"slow bros double choc walnut brownies","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":118,"name":"Slow Cooked Mexican Beef Casserole","path":null,"image_path":"../../images/beef.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Beef","meat_type_id":"3"},{"id":119,"name":"slow cooker beef curry recipe","path":null,"image_path":"../../images/beef.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Beef","meat_type_id":"3"},{"id":120,"name":"Slow cooker broccoli cheesy chicken","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken","meat_type_id":"2"},{"id":121,"name":"SLOW COOKER HUNGARIAN GOULASH","path":null,"image_path":"../../images/beef.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Beef","meat_type_id":"3"},{"id":122,"name":"Slow cooker honey sesame chicken","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken","meat_type_id":"2"},{"id":123,"name":"Slow cooker lemon chicken","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken","meat_type_id":"2"},{"id":124,"name":"Slow Cooker Mock Moussaka","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Vegetarian","meat_type_id":"12"},{"id":125,"name":"slow-cooked beef and pancetta ragu","path":null,"image_path":"../../images/bacon.jpg","file_type_desc":"png","file_type":4,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Beef, Pancetta","meat_type_id":"3, 9"},{"id":126,"name":"slow-cooker broccoli and 3 cheese soup","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"png","file_type":4,"meal_type":"Lunch soup","meal_type_id":"2","meat_type":"Vegetarian","meat_type_id":"12"},{"id":127,"name":"Slow-cooker chicken and chorizo gumbo","path":null,"image_path":"../../images/sausage.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken, Chorizo","meat_type_id":"2, 4"},{"id":128,"name":"snert","path":null,"image_path":"../../images/sausage.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Pork, Sausage","meat_type_id":"5, 10"},{"id":129,"name":"spiced red lentil soup","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Lunch soup","meal_type_id":"2","meat_type":"Vegetarian","meat_type_id":"12"},{"id":130,"name":"Spinach, Artichoke & Chicken Bake","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken","meat_type_id":"2"},{"id":131,"name":"Strawberry Cheesecake Popsicles","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},{"id":132,"name":"Tomato and garlic chicken","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken","meat_type_id":"2"},{"id":133,"name":"tortilla soup","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"png","file_type":4,"meal_type":"Lunch soup","meal_type_id":"2","meat_type":"Chicken","meat_type_id":"2"},{"id":134,"name":"turkey meatloaf meatballs","path":null,"image_path":"../../images/turkey.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Turkey","meat_type_id":"11"},{"id":135,"name":"Yummy curried sausages","path":null,"image_path":"../../images/sausage.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Sausage","meat_type_id":"10"},{"id":136,"name":"Zucchini and haloumi fritters","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Vegetarian","meat_type_id":"12"},{"id":137,"name":"Anti-LCM bars","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":"School Snack","meal_type_id":"3","meat_type":"Vegetarian","meat_type_id":"12"},{"id":138,"name":"Blueberry scones","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":"School Snack","meal_type_id":"3","meat_type":"Vegetarian","meat_type_id":"12"},{"id":139,"name":"Chocolate Banana Brownies","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":"School Snack","meal_type_id":"3","meat_type":"Vegetarian","meat_type_id":"12"},{"id":140,"name":"Easy Hummus Recipe","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":"School Snack","meal_type_id":"3","meat_type":"Vegetarian","meat_type_id":"12"},{"id":141,"name":"healthy muffins","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"png","file_type":4,"meal_type":"School Snack","meal_type_id":"3","meat_type":"Vegetarian","meat_type_id":"12"},{"id":142,"name":"Oliebollen met krenten","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":"School Snack","meal_type_id":"3","meat_type":"Vegetarian","meat_type_id":"12"},{"id":143,"name":"Pepperoni Pizza Pocket","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":"School Snack","meal_type_id":"3","meat_type":"Vegetarian","meat_type_id":"12"},{"id":144,"name":"pizza muffins","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":"School Snack","meal_type_id":"3","meat_type":"Vegetarian","meat_type_id":"12"},{"id":145,"name":"ricotta and banana pikelets","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"School Snack","meal_type_id":"3","meat_type":"Vegetarian","meat_type_id":"12"},{"id":146,"name":"salami scrolls","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"School Snack","meal_type_id":"3","meat_type":"Vegetarian","meat_type_id":"12"},{"id":147,"name":"Vegetable and ham noodle muffins","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"School Snack","meal_type_id":"3","meat_type":"Vegetarian","meat_type_id":"12"},{"id":148,"name":"white bean dip","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"School Snack","meal_type_id":"3","meat_type":"Vegetarian","meat_type_id":"12"},{"id":149,"name":"Whole orange cake","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"School Snack","meal_type_id":"3","meat_type":"Vegetarian","meat_type_id":"12"},{"id":150,"name":"Zucchini Chocolate Chip Cookies","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":"School Snack","meal_type_id":"3","meat_type":"Vegetarian","meat_type_id":"12"},{"id":151,"name":"100s of biscuits","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"web","file_type":6,"meal_type":"School Snack","meal_type_id":"3","meat_type":"Vegetarian","meat_type_id":"12"},{"id":152,"name":"Chocolate banana muffins","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"web","file_type":6,"meal_type":"School Snack","meal_type_id":"3","meat_type":"Vegetarian","meat_type_id":"12"},{"id":153,"name":"World's Greatest Soft Pretzels","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":"School Snack","meal_type_id":"3","meat_type":"Vegetarian","meat_type_id":"12"},{"id":154,"name":"Gnocchi with puttenesca sauce","path":"http://allrecipes.com.au/recipe/2108/puttanesca-pasta.aspx","image_path":"../../images/vegetarian.jpg","file_type_desc":"web","file_type":6,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Vegetarian","meat_type_id":"12"},{"id":155,"name":"Quick Chinese Meatballs","path":"http://www.bestrecipes.com.au/recipe/quick-chinese-meatballs-L3563.html","image_path":"../../images/pork.jpg","file_type_desc":"web","file_type":6,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Pork","meat_type_id":"5"},{"id":156,"name":"Tomato and Lemon Meatballs","path":"","image_path":"../../images/veal.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Pork, Veal","meat_type_id":"5, 6"},{"id":157,"name":"Pork Piccadillo","path":"","image_path":"../../images/pork.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Pork","meat_type_id":"5"},{"id":158,"name":"Zucchini pasta with puttenesca sauce","path":"http://allrecipes.com.au/recipe/2108/puttanesca-pasta.aspx","image_path":"../../images/vegetarian.jpg","file_type_desc":"web","file_type":6,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Vegetarian","meat_type_id":"12"},{"id":159,"name":"Teriyaki Salmon","path":"http://www.epicurious.com/recipes/member/views/basic-teriyaki-sauce-with-several-variations-50020152","image_path":"../../images/fish.jpg","file_type_desc":"web","file_type":6,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Fish","meat_type_id":"7"},{"id":160,"name":"3asdfasdfdsaf","path":"path","image_path":"../../images/vegetarian.jpg","file_type_desc":"docx","file_type":1,"meal_type":null,"meal_type_id":null,"meat_type":"Chorizo","meat_type_id":"4"},{"id":168,"name":"214231231231232342342","path":"1234","image_path":"../../images/vegetarian.jpg","file_type_desc":"docx","file_type":1,"meal_type":null,"meal_type_id":null,"meat_type":"Fish, Pork","meat_type_id":"5, 7"},{"id":169,"name":"214231231231232342342","path":"1234","image_path":"../../images/vegetarian.jpg","file_type_desc":"docx","file_type":1,"meal_type":null,"meal_type_id":null,"meat_type":"Fish, Pork","meat_type_id":"5, 7"},{"id":170,"name":"214231231231232342342","path":"1234","image_path":"../../images/vegetarian.jpg","file_type_desc":"docx","file_type":1,"meal_type":null,"meal_type_id":null,"meat_type":"Fish, Pork","meat_type_id":"5, 7"},{"id":171,"name":"214231231231232342342","path":"1234","image_path":"../../images/vegetarian.jpg","file_type_desc":"docx","file_type":1,"meal_type":"Lunch soup","meal_type_id":"2","meat_type":"Fish, Pork","meat_type_id":"5, 7"},{"id":172,"name":"214231231231232342342","path":"1234","image_path":"../../images/vegetarian.jpg","file_type_desc":"docx","file_type":1,"meal_type":"Lunch soup","meal_type_id":"2","meat_type":"Fish, Pork","meat_type_id":"5, 7"},{"id":173,"name":"testing","path":"123","image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Lunch soup","meal_type_id":"2","meat_type":"Beef, Pancetta, Pork","meat_type_id":"3, 5, 9"},{"id":174,"name":"ytre","path":"qwert","image_path":"../../images/vegetarian.jpg","file_type_desc":"pdf","file_type":3,"meal_type":"School Snack","meal_type_id":"3","meat_type":"Veal, Vegetarian","meat_type_id":"6, 12"},{"id":175,"name":"asdf32456345yrt","path":"345364","image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"School Snack","meal_type_id":"3","meat_type":"Chorizo, Turkey","meat_type_id":"4, 11"},{"id":176,"name":"876543ertyujhgfg","path":"w435676iuyh","image_path":"../../images/vegetarian.jpg","file_type_desc":"png","file_type":4,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Beef, Pancetta","meat_type_id":"3, 9"},{"id":177,"name":"lkjhgfdfghjkjhgf","path":"fyuiuytdfgh","image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Lunch soup","meal_type_id":"2","meat_type":"Beef, Sausage","meat_type_id":"3, 10"},{"id":178,"name":"dataServiceTest2","path":"path","image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":null,"meal_type_id":null,"meat_type":"Chorizo, Pork","meat_type_id":"4, 5"}];

    beforeEach(module('app'));
    beforeEach(inject(function(_$controller_,_$q_, _$rootScope_,_$log_, _dataService_, _sharedData_){
        $rootScope = _$rootScope_;
        $q = _$q_;
        $log = _$log_;
        sharedData = _sharedData_;
        dataService = _dataService_;
        $controller = _$controller_;
    }));
    describe('Initialise controller', function(){
        
        it("should be created successfully", function() {
            $controller = $controller('mealController', {$log:$log, sharedData:sharedData, dataService:dataService});
            expect($controller).toBeDefined();
        });
        
        it("should query database for all meals", function(){
            sharedData.allMeals = "";
            spyOn(dataService, 'getAllMeals').and.callFake(function(){
                var deferred = $q.defer();
                deferred.resolve(allMealsValue);
                return deferred.promise;    
            });
            $controller = $controller('mealController', {$q:$q, $rootScope:$rootScope, $log:$log, sharedData:sharedData, dataService:dataService});
            $rootScope.$apply();
            expect(sharedData.allMeals).toBe(allMealsValue);
            expect($controller.allMeals).toBe(allMealsValue);
            expect(dataService.getAllMeals).toHaveBeenCalled();
        });

        xit("should cope with error query database if shared data all meals fails", function(){
            sharedData.allMeals = "";
            spyOn(dataService, 'getAllMeals').and.callFake(function(){
                var deferred = $q.defer();
                deferred.reject();
                return deferred.promise;    
            });
            $controller = $controller('mealController', {$q:$q, $rootScope:$rootScope, $log:$log, sharedData:sharedData, dataService:dataService});
            $rootScope.$apply();
            expect($controller.errorMessage).toBe('Argh something went wrong');
        });
    });
});

  