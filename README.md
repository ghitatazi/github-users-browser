### Author : Ghita TAZI

CHALLENGE STATEMENT
-------------------
The goal is to build a simple GitHub users browser with the following features:<br />
• Filter a list of users<br />
• Select and display user details<br />
• List user repositories<br />
The UI is composed of two parts:<br />
• A listing view on the left that displays the list of users, with an text input to filter it.<br />
• A detail view on the right that displays user details and a list of their repositories.<br />

USED TECHNOLOGIES
-----------------
 
-> Create React App<br />
-> React<br />
-> Redux<br />
-> Redux-thunk<br />
-> Redux-logger<br />
-> Fetch API<br />
-> React-bootstrap<br />
-> React-bootstrap-table<br />
-> React-alert<br />
-> GitHub public API<br />

INSTALLATION
------------

Install last stable version of Node.js (it also includes Npm, cf https://nodejs.org/en/download/)<br />
Install the NPM dependencies listed in package.json (npm install)<br />

BUILD
-----

At the project root, execute following command to start the development server: npm start<br />
With the version of Create React App (v1.0.2, May 20, 2017), you will see the LAN address in addition to the localhost address.
By default, the server runs on port 3000. If the port is not available on your machine, you will be asked if you want to run the app on another one. Select 'yes' if so.<br />
Then go to your favorite browser and type 'localhost:3000' (or the selected port)<br />
You should see the application interface<br />

GitHub public API
-----------------

To get users profiles and repositories, I used the GitHub public API<br />
As described here: https://developer.github.com/v3/#rate-limiting, for unauthenticated requests, the rate limit allows to make up to 60 requests per hour<br />
That's why, after reaching this limit, you will see an alert popping up on the interface to inform you that the rate limit has been exceeded<br />
