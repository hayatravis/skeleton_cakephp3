console.log('app.js');

// bootstrap
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap');
// font awesome
require('font-awesome/css/font-awesome.css');
// css
require ('../dist/css/app.css');

console.log(location.pathname);
// page for routing
var page = require('page');

$(function () {
    page('/', function() {
        console.log('index');
    });
    page();
});