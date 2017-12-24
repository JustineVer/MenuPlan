start apache

open up command prompt and paste the below

sudo /usr/sbin/apachectl start



test it works by opening up web browser and navigating to localhost

the served files are held in /Library/WebServer/Documents

you need to copy the files into this directory for them to be seen by the localhost
eg
sudo cp blah /Library/WebServer/Documents/blah
(use sudo as it gives you greater permissions than an ordinary user)s



NODE JS

installed at: /usr/local/bin/node

npm installed at: /usr/local/bin/npm

make sure /usr/local/bin is in $PATH   

npm install express //This web framework for Node makes it much easier to create web applications by adding support for common tasks, such as MVC, to the existing http server
npm install body-parser //Parse incoming request bodies in a middleware before your handlers, available under the req.body property. - used with Express, used to be part of express
npm install cors //CORS(cross -origin resourece sharing) is most important while creating api.

install postman on google chrome (assists with watching RESTful apis)

npm install -g eslint

npm install -g ng-annotate /*The ng-annotate tool allows us to alleviate 
the responsibility to define our dependencies explicitly. ng-annotate is 
a pre-minifier for Angular apps. It walks through our Angular apps and 
sets up dependency injection for us.*/

// you use ng-annotate with :
ng-annotate -a input.js -o output.js /*where input.js is the original 
file and output.js is the annotated file*/


mySQL
(to run at anytime /usr/local/mysql/bin/mysql -u root -p)
in command navigate to /usr/local/mysql

bin/mysql -u root -p

SET PASSWORD = PASSWORD('xxxxxxxx');

exit

bin/mysqladmin -u root -p version

bin/mysqlshow -u root -p mysql

bin/mysql -e "SELECT User, Host, plugin FROM mysql.user"  -u root -p mysql

CREATE USER 'justine'@'localhost' IDENTIFIED BY 'justine';

show databases;
create database menu_plan;
use menu_plan;

-- run through db_setup.sql

NODE.js set up to access mySql:
Create a new project: mkdir mysql-test && cd mysql-test
Create a package.json file: npm init -–y (values entered aren't terribly important)
Install the mysql module: npm install mysql –-save
Copy demo_db_connection.js file currently found in node /Users/justine/documents/code/nodejs/demo_db_connection.js to this dir (alter db name, user etc)
 Run the file: node demo_db_connection.js. Observe a “Connected!” message.

navigate to frontEnd path
 git clone git://github.com/nodejs/node.git
 cd node
 ./configure
 make
 sudo make install

 npm install -g gulp

 SEMANTIC UI - 
 npm install semantic-ui --save
 cd semantic/
 gulp build

 gulp watch

 --- in


before installing karma: 

when installing karma (by following their commands in install instructions)
also enter: sudo npm install -g karma-cli
(command line add-on so that we can type the karma command rather than the explicit location of the executable)
and: karma init 
(helps set up default configuration - creates a config file that can be modified by hand)
also update the package.json to replace test line with: 
"test": "./node_modules/karma/bin/karma start karma.conf.js"
this allows you to type in npm test in command prompt to run the tests
npm test



-- install protractor
sudo npm install -g protractor
sudo webdriver-manager update
webdriver-manager start
IN BROWSER download jdk

to start protractor: 
for some reason in dir: /etc/apache2/users
type: webdriver-manager start
- then in another window:
navigate to protractor test directory (/library/webserver/documents/menuplan/test/protractor)
type: protractor conf.js


---- not done  db stuff ---
GRANT ALL PRIVILEGES ON * . * TO '
newuser
'@'localhost';
Once you have finalized the permissions that you want to set up for your new users, always be sure to reload all the privileges.

FLUSH PRIVILEGES;






TO RUN JAVASCRIPT IN VISUAL STUDIO CODE: 
Open terminal
Navigate to where file is saved 
Type: node <filename.js>


to run tests and db setup etc
API:
/Users/justine/Documents/MenuPlan/NodeRestful
npm start

karma: 
/library/webserver/documents/menuplan
npm test

to start protractor: 
for some reason in dir: /etc/apache2/users
type: webdriver-manager start
(for some reason the above did not work after restart:
    type: sudo webdriver-manager start
instead)
- then in another window:
navigate to protractor test directory (/library/webserver/documents/menuplan/test/protractor)
type: protractor conf.js
