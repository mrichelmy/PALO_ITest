# PALO_ITest
## Description
This is my work for my PALO IT application. It based on some different exercises, they were intended to set up a partial application, based on web services.
## Front-end part
**Techno** : html + jquery + Bulma (CSS)

**How to run it ?** : With VS Code, open the file *product.js* and use the extension 'Live Server' to start a local server.

**Structure** : 
 - 'pages' folder : all pages whitch composed the application ;
 - 'scripts' folder : api calls and js scripts ;

**Calculator** : 
My calculator is based on the *eval* function.  It is unappreciated by many developers, due to it vulnaribility (js injection for example). But in this case, I think that we can use it, due to the restrictive ckeck done on the input string. It will be a pleasure to discuss it with you ! ;) 

## Back-end part
**Techno** : Node.JS + Mysql

**How to run it ?** : `node back/index.js`

**Where** : On http://localhost:3306

**Structure** : 
 - 'index.js' file : our backend server's root ;
 - 'package.json' file : metadata about package utilisation ;
 - 'config.js' file : **metadata about database credential, sent by email** ;
 - 'services' folder : connection and request to the database ; 
 - 'routes' folder : provision of services.

**Routes** : 
 - '/products' - GET : Get a list of all products ;
 - '/products/city' - POST : Get a list of products selected by a list of cities ;
 - '/products' - POST : Add a new product ;
 - '/products/:ref' - PUT : Update an existing product ;
 - '/products/:ref' - DELETE : Delete an existing product.

## Test
**Techno** : Mocha framework

I seperate front and back tests in two files, and we can run `npm test` from back folder to launch all tests. Only one back test has been implemented, my front test have a JQuery/Mocha compatibility error.
