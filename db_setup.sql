
create table meal_options (id int not null primary key auto_increment,
    name varchar(255),
    file_type integer, 
    path varchar(255),
    image_path varchar(255));


create table file_type (id int not null primary key auto_increment,
    file_type varchar(255));


create table meal_type (id int not null primary key auto_increment,
    meal_type varchar(255));

create table meal_type_options (id int not null primary key auto_increment,
    meal_option_id int,
    meal_type_id integer);

create table meat_type (id int not null primary key auto_increment,
    meat_type varchar(255));

create table meat_type_options (id int not null primary key auto_increment,
    meal_option_id int,
    meat_type_id int);

create table eaten (id int not null primary key auto_increment,
    meal_option_id integer,
    date_eaten date,
    liked varchar(255));


insert into file_type( file_type) values ('docx');
insert into file_type( file_type) values ('jpg');
insert into file_type( file_type) values ('pdf');
insert into file_type( file_type) values ('png');
insert into file_type( file_type) values ('txt');
insert into file_type( file_type) values ('web');

insert into meal_options(name, file_type) values ('2-INGREDIENT CREAM CHEESE PANCAKES',5);
insert into meal_options(name, file_type) values ('Bacon Cheeseburger Cauliflower Casserole',5);
insert into meal_options(name, file_type) values ('Bacon Covered Meatloaf',5);
insert into meal_options(name, file_type) values ('Bacon-wrapped meatloaf with roast vegetables',4);
insert into meal_options(name, file_type) values ('Baked chicken with pumpkin and chorizo',5);
insert into meal_options(name, file_type) values ('Baked Moussaka Eggplants',5);
insert into meal_options(name, file_type) values ('battered fish',2);
insert into meal_options(name, file_type) values ('beef and cauli mash cottage pie',2);
insert into meal_options(name, file_type) values ('Beef Stroganoff, Keto style',5);
insert into meal_options(name, file_type) values ('blueberry and coconut breakfast muffins',2);
insert into meal_options(name, file_type) values ('Broccoli and blue cheese frittata',5);
insert into meal_options(name, file_type) values ('broccoli and spinach soup with cheddar cheese',2);
insert into meal_options(name, file_type) values ('butter chicken',3);
insert into meal_options(name, file_type) values ('Caprese Chicken',5);
insert into meal_options(name, file_type) values ('cauli mac and cheese with the works',2);
insert into meal_options(name, file_type) values ('cauliflower and cheese tots',2);
insert into meal_options(name, file_type) values ('cheese and herb muffins',2);
insert into meal_options(name, file_type) values ('Chicken and cauliflower bake',2);
insert into meal_options(name, file_type) values ('Chicken and celery casserole',5);
insert into meal_options(name, file_type) values ('Chicken and chorizo meatballs',5);
insert into meal_options(name, file_type) values ('Chicken and Sage Burgers',2);
insert into meal_options(name, file_type) values ('Chicken casserole with macadamia and basil',2);
insert into meal_options(name, file_type) values ('Chicken Enchilada Cauliflower Casserole',5);
insert into meal_options(name, file_type) values ('Chicken meatball stroganoff',5);
insert into meal_options(name, file_type) values ("Chicken 'parmigiana' Tray Bake",3);
insert into meal_options(name, file_type) values ('chicken piccata',4);
insert into meal_options(name, file_type) values ('CHICKEN SAUSAGE MARSALA',5);
insert into meal_options(name, file_type) values ('Chicken Souvlaki',5);
insert into meal_options(name, file_type) values ('Chocolate brownie cookies (birthday biscuits)',5);
insert into meal_options(name, file_type) values ('Chocolate Mousse Cake',1);
insert into meal_options(name, file_type) values ('Chorizo Sausage Ragout',5);
insert into meal_options(name, file_type) values ('CINNAMON TWISTS',5);
insert into meal_options(name, file_type) values ('Cloud Bread',5);
insert into meal_options(name, file_type) values ('coconut chicken strips',2);
insert into meal_options(name, file_type) values ('Coconut Lamb',2);
insert into meal_options(name, file_type) values ('Coconut paleo breakfast loaf',5);
insert into meal_options(name, file_type) values ('cool cookies',2);
insert into meal_options(name, file_type) values ('creamy balsamic chicken',2);
insert into meal_options(name, file_type) values ('Creamy Cauliflower Mushroom Risotto',5);
insert into meal_options(name, file_type) values ('creamy chicken and mushroom casserole with bacon and spinach',2);
insert into meal_options(name, file_type) values ('Creamy chicken and pumpkin bake',5);
insert into meal_options(name, file_type) values ('Creamy Salsa Chicken',5);
insert into meal_options(name, file_type) values ('Crustless keto cheesecake',5);
insert into meal_options(name, file_type) values ('Dairy-Free Chocolate Cake (birthday cake)',5);
insert into meal_options(name, file_type) values ('delicious rusks',2);
insert into meal_options(name, file_type) values ('dippy chippies',2);
insert into meal_options(name, file_type) values ('Easy Chicken Florentine Casserole',5);
insert into meal_options(name, file_type) values ('Easy Christmas pudding ice-cream recipe',5);
insert into meal_options(name, file_type) values ('Easy Mediterranean Chicken Bake',5);
insert into meal_options(name, file_type) values ('Easy Slow Cooker Pulled Pork',5);
insert into meal_options(name, file_type) values ('Easy Taco Pie',5);
insert into meal_options(name, file_type) values ('Extra Crispy Lemon and Thyme Chicken',5);
insert into meal_options(name, file_type) values ('Fish Sticks',5);
insert into meal_options(name, file_type) values ('Garlic Parmesan Knots',5);
insert into meal_options(name, file_type) values ('Ginger, coconut and cashew bars',5);
insert into meal_options(name, file_type) values ("Gluten-free 'spaghetti' and meatballs",3);
insert into meal_options(name, file_type) values ('Greek beef burgers',5);
insert into meal_options(name, file_type) values ('Grilled Eggplant Lamb Rolls with Tzatziki',5);
insert into meal_options(name, file_type) values ('ham and cheese puffs',2);
insert into meal_options(name, file_type) values ('Hamburger Beef Stroganoff',5);
insert into meal_options(name, file_type) values ('healthy muffins',4);
insert into meal_options(name, file_type) values ('Healthy fish sticks',2);
insert into meal_options(name, file_type) values ('Italian meatball bake',4);
insert into meal_options(name, file_type) values ('italian sausage soup',4);
insert into meal_options(name, file_type) values ("kale, pea and spinach soup with goat's curd",4);
insert into meal_options(name, file_type) values ('Keto Chicken Enchilada Bake',5);
insert into meal_options(name, file_type) values ('Keto Cinnamon Rolls with Low Carb Custard Cream',5);
insert into meal_options(name, file_type) values ('Keto Crepes',5);
insert into meal_options(name, file_type) values ('keto egg-chiladas',5);
insert into meal_options(name, file_type) values ('lasagne with zucchini',2);
insert into meal_options(name, file_type) values ('laurelle ritzs spinach and ricotta gnudi',4);
insert into meal_options(name, file_type) values ('layered mexican cob dip',4);
insert into meal_options(name, file_type) values ('Lime and Blueberry Muffins',5);
insert into meal_options(name, file_type) values ('Low Carb Beef Burritos',5);
insert into meal_options(name, file_type) values ('Low Carb Cauliflower Gnocchi',5);
insert into meal_options(name, file_type) values ('Low Carb Cauliflower Tortillas',5);
insert into meal_options(name, file_type) values ('Low Carb Gnocchi',5);
insert into meal_options(name, file_type) values ('Low Carb Meatballs alla parmigiana',5);
insert into meal_options(name, file_type) values ('Low Carb Mexican Lasagna',5);
insert into meal_options(name, file_type) values ('Low Carb Rolls',5);
insert into meal_options(name, file_type) values ('lunchbox bars',2);
insert into meal_options(name, file_type) values ('marscarpone chicken with basil and tomato sauce',2);
insert into meal_options(name, file_type) values ('mashed cauliflower',2);
insert into meal_options(name, file_type) values ('Massaman beef skewers',5);
insert into meal_options(name, file_type) values ('mexican beef and bean frying pan meatballs',4);
insert into meal_options(name, file_type) values ('mexican mince',2);
insert into meal_options(name, file_type) values ('mexican mixed bean slow-cooker soup',4);
insert into meal_options(name, file_type) values ('Microwave Lemon Curd',5);
insert into meal_options(name, file_type) values ('Minced pork pies',2);
insert into meal_options(name, file_type) values ('morning tea muesli slice',2);
insert into meal_options(name, file_type) values ('moroccan chicken with butternut squash and red onion couscous',2);
insert into meal_options(name, file_type) values ('mozzarella dippers',2);
insert into meal_options(name, file_type) values ('Nacho Steak Skillet',5);
insert into meal_options(name, file_type) values ('Naan bread',2);
insert into meal_options(name, file_type) values ('Nutella Ice Cream',5);
insert into meal_options(name, file_type) values ('Paleo Apple Pie',5);
insert into meal_options(name, file_type) values ('paleo blueberry and almond loaf',2);
insert into meal_options(name, file_type) values ('Paleo cauliflower flatbread',2);
insert into meal_options(name, file_type) values ('Paleo Italian Mushroom Bake',5);
insert into meal_options(name, file_type) values ('paleo walnut and date muffins',2);
insert into meal_options(name, file_type) values ('parmesan chicken strips',2);
insert into meal_options(name, file_type) values ('pizza',2);
insert into meal_options(name, file_type) values ('Pork and veal meatballs with eggplant',5);
insert into meal_options(name, file_type) values ('Pork, cranberry and pistachio rissoles',5);
insert into meal_options(name, file_type) values ('Pumpkin Carrot Muffins',5);
insert into meal_options(name, file_type) values ('quick and simple oven bake',2);
insert into meal_options(name, file_type) values ('Quinoa carrot cake',2);
insert into meal_options(name, file_type) values ('Ratatouille',5);
insert into meal_options(name, file_type) values ('Ricotta and Spinach Balls in Tomato',5);
insert into meal_options(name, file_type) values ('Sausage casserole',5);
insert into meal_options(name, file_type) values ('sausage ragu',2);
insert into meal_options(name, file_type) values ('Sausage risotto',2);
insert into meal_options(name, file_type) values ('Sausage Stuffed Grilled Eggplant',5);
insert into meal_options(name, file_type) values ('semolina dumpling soup',4);
insert into meal_options(name, file_type) values ('simple mushroom soup',2);
insert into meal_options(name, file_type) values ('SINGLE SERVE CHOCOLATE CHIP BROWNIES',5);
insert into meal_options(name, file_type) values ('slow bros double choc walnut brownies',2);
insert into meal_options(name, file_type) values ('Slow Cooked Mexican Beef Casserole',5);
insert into meal_options(name, file_type) values ('slow cooker beef curry recipe',5);
insert into meal_options(name, file_type) values ('Slow cooker broccoli cheesy chicken',2);
insert into meal_options(name, file_type) values ('SLOW COOKER HUNGARIAN GOULASH',5);
insert into meal_options(name, file_type) values ('Slow cooker honey sesame chicken',5);
insert into meal_options(name, file_type) values ('Slow cooker lemon chicken',2);
insert into meal_options(name, file_type) values ('Slow Cooker Mock Moussaka',5);
insert into meal_options(name, file_type) values ('slow-cooked beef and pancetta ragu',4);
insert into meal_options(name, file_type) values ('slow-cooker broccoli and 3 cheese soup',4);
insert into meal_options(name, file_type) values ('Slow-cooker chicken and chorizo gumbo',5);
insert into meal_options(name, file_type) values ('snert',5);
insert into meal_options(name, file_type) values ('spiced red lentil soup',2);
insert into meal_options(name, file_type) values ('Spinach, Artichoke & Chicken Bake',5);
insert into meal_options(name, file_type) values ('Strawberry Cheesecake Popsicles',5);
insert into meal_options(name, file_type) values ('Tomato and garlic chicken',5);
insert into meal_options(name, file_type) values ('tortilla soup',4);
insert into meal_options(name, file_type) values ('turkey meatloaf meatballs',2);
insert into meal_options(name, file_type) values ('Yummy curried sausages',5);
insert into meal_options(name, file_type) values ('Zucchini and haloumi fritters',5);
insert into meal_options(name, file_type) values ('Anti-LCM bars',5);
insert into meal_options(name, file_type) values ('Blueberry scones',5);
insert into meal_options(name, file_type) values ('Chocolate Banana Brownies',5);
insert into meal_options(name, file_type) values ('Easy Hummus Recipe',5);
insert into meal_options(name, file_type) values ('healthy muffins',4);
insert into meal_options(name, file_type) values ('Oliebollen met krenten',5);
insert into meal_options(name, file_type) values ('Pepperoni Pizza Pocket',5);
insert into meal_options(name, file_type) values ('pizza muffins',5);
insert into meal_options(name, file_type) values ('ricotta and banana pikelets',2);
insert into meal_options(name, file_type) values ('salami scrolls',2);
insert into meal_options(name, file_type) values ('Vegetable and ham noodle muffins',2);
insert into meal_options(name, file_type) values ('white bean dip',2);
insert into meal_options(name, file_type) values ('Whole orange cake',2);
insert into meal_options(name, file_type) values ('Zucchini Chocolate Chip Cookies',5);
insert into meal_options(name, file_type) values ('100s of biscuits',6);
insert into meal_options(name, file_type) values ('Chocolate banana muffins',6);
insert into meal_options(name, file_type) values ("World's Greatest Soft Pretzels",5);


insert into meal_options(name, path, file_type) values ('Gnocchi with puttenesca sauce','http://allrecipes.com.au/recipe/2108/puttanesca-pasta.aspx',6);
insert into meal_options(name, path, file_type) values ('Quick Chinese Meatballs','http://www.bestrecipes.com.au/recipe/quick-chinese-meatballs-L3563.html',6);
insert into meal_options(name, path, file_type) values ('Tomato and Lemon Meatballs','',2);
insert into meal_options(name, path, file_type) values ('Pork Piccadillo','',2);
insert into meal_options(name, path, file_type) values ('Zucchini pasta with puttenesca sauce','http://allrecipes.com.au/recipe/2108/puttanesca-pasta.aspx',6);
insert into meal_options(name, path, file_type) values ('Teriyaki Salmon','http://www.epicurious.com/recipes/member/views/basic-teriyaki-sauce-with-several-variations-50020152',6);


insert into meal_type (meal_type) values ("Dinner");
insert into meal_type (meal_type) values ("Lunch soup");
insert into meal_type (meal_type) values ("School Snack");

Insert into meal_type_options (meal_option_id, meal_type_id) values(2,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(3,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(4,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(5,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(6,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(7,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(8,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(9,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(11,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(12,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(13,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(14,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(15,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(16,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(18,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(19,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(20,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(21,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(22,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(23,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(24,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(25,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(26,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(27,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(28,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(31,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(34,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(35,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(38,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(39,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(40,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(41,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(42,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(47,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(49,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(50,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(51,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(52,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(53,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(56,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(57,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(58,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(60,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(62,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(63,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(66,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(69,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(70,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(71,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(74,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(75,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(78,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(79,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(82,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(84,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(85,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(86,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(89,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(91,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(93,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(99,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(101,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(102,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(103,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(104,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(106,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(108,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(109,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(110,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(111,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(112,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(113,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(118,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(119,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(120,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(121,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(122,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(123,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(124,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(125,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(127,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(128,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(130,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(132,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(134,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(135,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(136,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(64,2);
Insert into meal_type_options (meal_option_id, meal_type_id) values(65,2);
Insert into meal_type_options (meal_option_id, meal_type_id) values(87,2);
Insert into meal_type_options (meal_option_id, meal_type_id) values(114,2);
Insert into meal_type_options (meal_option_id, meal_type_id) values(115,2);
Insert into meal_type_options (meal_option_id, meal_type_id) values(126,2);
Insert into meal_type_options (meal_option_id, meal_type_id) values(129,2);
Insert into meal_type_options (meal_option_id, meal_type_id) values(133,2);
Insert into meal_type_options (meal_option_id, meal_type_id) values(94,3);
Insert into meal_type_options (meal_option_id, meal_type_id) values(107,3);
Insert into meal_type_options (meal_option_id, meal_type_id) values(137,3);
Insert into meal_type_options (meal_option_id, meal_type_id) values(138,3);
Insert into meal_type_options (meal_option_id, meal_type_id) values(139,3);
Insert into meal_type_options (meal_option_id, meal_type_id) values(140,3);
Insert into meal_type_options (meal_option_id, meal_type_id) values(141,3);
Insert into meal_type_options (meal_option_id, meal_type_id) values(142,3);
Insert into meal_type_options (meal_option_id, meal_type_id) values(143,3);
Insert into meal_type_options (meal_option_id, meal_type_id) values(144,3);
Insert into meal_type_options (meal_option_id, meal_type_id) values(145,3);
Insert into meal_type_options (meal_option_id, meal_type_id) values(146,3);
Insert into meal_type_options (meal_option_id, meal_type_id) values(147,3);
Insert into meal_type_options (meal_option_id, meal_type_id) values(148,3);
Insert into meal_type_options (meal_option_id, meal_type_id) values(149,3);
Insert into meal_type_options (meal_option_id, meal_type_id) values(150,3);
Insert into meal_type_options (meal_option_id, meal_type_id) values(151,3);
Insert into meal_type_options (meal_option_id, meal_type_id) values(152,3);
Insert into meal_type_options (meal_option_id, meal_type_id) values(153,3);
Insert into meal_type_options (meal_option_id, meal_type_id) values(154,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(155,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(156,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(157,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(158,1);
Insert into meal_type_options (meal_option_id, meal_type_id) values(159,1);





insert into meat_type (meat_type) values ("Bacon");
insert into meat_type (meat_type) values ("Chicken");
insert into meat_type (meat_type) values ("Beef");
insert into meat_type (meat_type) values ("Chorizo");
insert into meat_type (meat_type) values ("Pork");
insert into meat_type (meat_type) values ("Veal");
insert into meat_type (meat_type) values ("Fish");
insert into meat_type (meat_type) values ("Lamb");
insert into meat_type (meat_type) values ("Pancetta");
insert into meat_type (meat_type) values ("Sausage");
insert into meat_type (meat_type) values ("Turkey");
insert into meat_type (meat_type) values ("Vegetarian");

Insert into meat_type_options (meal_option_id, meat_type_id) values (1,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (2,1);
Insert into meat_type_options (meal_option_id, meat_type_id) values (3,3);
Insert into meat_type_options (meal_option_id, meat_type_id) values (4,5);
Insert into meat_type_options (meal_option_id, meat_type_id) values (4,6);
Insert into meat_type_options (meal_option_id, meat_type_id) values (5,4);
Insert into meat_type_options (meal_option_id, meat_type_id) values (5,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (6,8);
Insert into meat_type_options (meal_option_id, meat_type_id) values (7,7);
Insert into meat_type_options (meal_option_id, meat_type_id) values (8,3);
Insert into meat_type_options (meal_option_id, meat_type_id) values (9,3);
Insert into meat_type_options (meal_option_id, meat_type_id) values (10,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (11,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (12,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (13,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (14,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (15,1);
Insert into meat_type_options (meal_option_id, meat_type_id) values (16,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (17,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (18,1);
Insert into meat_type_options (meal_option_id, meat_type_id) values (19,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (20,4);
Insert into meat_type_options (meal_option_id, meat_type_id) values (20,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (21,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (22,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (23,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (24,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (25,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (26,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (27,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (28,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (29,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (30,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (31,4);
Insert into meat_type_options (meal_option_id, meat_type_id) values (31,5);
Insert into meat_type_options (meal_option_id, meat_type_id) values (31,6);
Insert into meat_type_options (meal_option_id, meat_type_id) values (32,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (33,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (34,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (35,8);
Insert into meat_type_options (meal_option_id, meat_type_id) values (36,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (37,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (38,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (39,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (40,1);
Insert into meat_type_options (meal_option_id, meat_type_id) values (40,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (41,1);
Insert into meat_type_options (meal_option_id, meat_type_id) values (41,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (42,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (43,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (44,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (45,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (46,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (47,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (48,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (49,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (50,5);
Insert into meat_type_options (meal_option_id, meat_type_id) values (51,3);
Insert into meat_type_options (meal_option_id, meat_type_id) values (52,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (53,7);
Insert into meat_type_options (meal_option_id, meat_type_id) values (54,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (55,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (56,5);
Insert into meat_type_options (meal_option_id, meat_type_id) values (56,6);
Insert into meat_type_options (meal_option_id, meat_type_id) values (57,3);
Insert into meat_type_options (meal_option_id, meat_type_id) values (58,8);
Insert into meat_type_options (meal_option_id, meat_type_id) values (59,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (60,3);
Insert into meat_type_options (meal_option_id, meat_type_id) values (61,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (62,7);
Insert into meat_type_options (meal_option_id, meat_type_id) values (63,3);
Insert into meat_type_options (meal_option_id, meat_type_id) values (64,10);
Insert into meat_type_options (meal_option_id, meat_type_id) values (65,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (66,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (67,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (68,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (69,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (70,3);
Insert into meat_type_options (meal_option_id, meat_type_id) values (71,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (72,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (73,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (74,3);
Insert into meat_type_options (meal_option_id, meat_type_id) values (75,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (76,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (77,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (78,3);
Insert into meat_type_options (meal_option_id, meat_type_id) values (79,3);
Insert into meat_type_options (meal_option_id, meat_type_id) values (80,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (81,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (82,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (83,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (84,3);
Insert into meat_type_options (meal_option_id, meat_type_id) values (85,3);
Insert into meat_type_options (meal_option_id, meat_type_id) values (86,3);
Insert into meat_type_options (meal_option_id, meat_type_id) values (87,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (88,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (89,5);
Insert into meat_type_options (meal_option_id, meat_type_id) values (89,1);
Insert into meat_type_options (meal_option_id, meat_type_id) values (90,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (91,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (92,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (93,3);
Insert into meat_type_options (meal_option_id, meat_type_id) values (94,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (95,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (96,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (97,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (98,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (99,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (100,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (101,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (102,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (103,5);
Insert into meat_type_options (meal_option_id, meat_type_id) values (103,6);
Insert into meat_type_options (meal_option_id, meat_type_id) values (104,5);
Insert into meat_type_options (meal_option_id, meat_type_id) values (105,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (106,10);
Insert into meat_type_options (meal_option_id, meat_type_id) values (107,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (108,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (109,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (110,10);
Insert into meat_type_options (meal_option_id, meat_type_id) values (111,10);
Insert into meat_type_options (meal_option_id, meat_type_id) values (112,10);
Insert into meat_type_options (meal_option_id, meat_type_id) values (113,10);
Insert into meat_type_options (meal_option_id, meat_type_id) values (114,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (115,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (116,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (117,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (118,3);
Insert into meat_type_options (meal_option_id, meat_type_id) values (119,3);
Insert into meat_type_options (meal_option_id, meat_type_id) values (120,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (121,3);
Insert into meat_type_options (meal_option_id, meat_type_id) values (122,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (123,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (124,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (125,9);
Insert into meat_type_options (meal_option_id, meat_type_id) values (125,3);
Insert into meat_type_options (meal_option_id, meat_type_id) values (126,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (127,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (127,4);
Insert into meat_type_options (meal_option_id, meat_type_id) values (128,10);
Insert into meat_type_options (meal_option_id, meat_type_id) values (128,5);
Insert into meat_type_options (meal_option_id, meat_type_id) values (129,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (130,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (131,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (132,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (133,2);
Insert into meat_type_options (meal_option_id, meat_type_id) values (134,11);
Insert into meat_type_options (meal_option_id, meat_type_id) values (135,10);
Insert into meat_type_options (meal_option_id, meat_type_id) values (136,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (137,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (138,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (139,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (140,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (141,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (142,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (143,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (144,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (145,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (146,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (147,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (148,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (149,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (150,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (151,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (152,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (153,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (154,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (155,5);
Insert into meat_type_options (meal_option_id, meat_type_id) values (156,5);
Insert into meat_type_options (meal_option_id, meat_type_id) values (156,6);
Insert into meat_type_options (meal_option_id, meat_type_id) values (157,5);
Insert into meat_type_options (meal_option_id, meat_type_id) values (158,12);
Insert into meat_type_options (meal_option_id, meat_type_id) values (159,7);



Insert into eaten (meal_option_id, date_eaten) values (156, STR_TO_DATE('4/26/16','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (41, STR_TO_DATE('4/19/16','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (51, STR_TO_DATE('4/19/16','%m/%d/%y'));s
Insert into eaten (meal_option_id, date_eaten) values (14, STR_TO_DATE('4/12/16','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (156, STR_TO_DATE('4/12/16','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (7, STR_TO_DATE('4/5/16','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (86, STR_TO_DATE('4/5/16','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (28, STR_TO_DATE('3/29/16','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (154, STR_TO_DATE('3/29/16','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (51, STR_TO_DATE('3/22/16','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (57, STR_TO_DATE('3/22/16','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (102, STR_TO_DATE('3/22/16','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (70, STR_TO_DATE('3/15/16','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (7, STR_TO_DATE('3/8/16','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (50, STR_TO_DATE('3/8/16','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (86, STR_TO_DATE('3/1/16','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (50, STR_TO_DATE('2/23/16','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (156, STR_TO_DATE('2/23/16','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (28, STR_TO_DATE('2/16/16','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (124, STR_TO_DATE('2/9/16','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (57, STR_TO_DATE('2/2/16','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (86, STR_TO_DATE('2/2/16','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (25, STR_TO_DATE('1/26/16','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (24, STR_TO_DATE('1/19/16','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (70, STR_TO_DATE('1/19/16','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (13, STR_TO_DATE('1/12/16','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (28, STR_TO_DATE('1/5/16','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (156, STR_TO_DATE('1/5/16','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (24, STR_TO_DATE('12/29/15','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (86, STR_TO_DATE('12/29/15','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (13, STR_TO_DATE('12/22/15','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (70, STR_TO_DATE('12/22/15','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (154, STR_TO_DATE('12/22/15','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (5, STR_TO_DATE('12/15/15','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (86, STR_TO_DATE('12/15/15','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (154, STR_TO_DATE('12/8/15','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (124, STR_TO_DATE('12/1/15','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (22, STR_TO_DATE('11/24/15','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (70, STR_TO_DATE('11/24/15','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (25, STR_TO_DATE('11/17/15','%m/%d/%y'));
Insert into eaten (meal_option_id, date_eaten) values (154, STR_TO_DATE('11/17/15','%m/%d/%y'));

CREATE OR REPLACE VIEW meal_history AS
SELECT mo.id, mo.name, mo.path, mo.image_path, ft.file_type, mt.meal_type, meat.meat_type, e.date_eaten, e.liked, e.id as eaten_id
FROM meat_type_options meat_to, meat_type meat, file_type ft, meal_options mo
LEFT JOIN meal_type_options mto ON mo.id = mto.meal_option_id
LEFT JOIN meal_type mt ON mto.meal_type_id = mt.id
LEFT JOIN eaten e ON mo.id = e.meal_option_id
WHERE ft.id = mo.file_type
AND meat.id = meat_to.meat_type_id
AND meat_to.meal_option_id = mo.id;


CREATE OR REPLACE VIEW meals AS
SELECT mo.id, mo.name, mo.path, mo.image_path, ft.file_type, mt.meal_type, meat.meat_type
FROM meat_type_options meat_to, meat_type meat, file_type ft, meal_options mo
LEFT JOIN meal_type_options mto ON mo.id = mto.meal_option_id
LEFT JOIN meal_type mt ON mto.meal_type_id = mt.id
WHERE ft.id = mo.file_type
AND meat.id = meat_to.meat_type_id
AND meat_to.meal_option_id = mo.id;
