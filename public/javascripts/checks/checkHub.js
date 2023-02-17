var rules = require('./rules/rulehub.js');
var apis = require('./apis/apihub.js');
var httpsRequest = require('./httpsrequest.js');
var _ = require('underscore');
var test = require('../argreplace.js');

var check = function(url, callback){
  var redirected = false;
  var html = '';
  var rulesresult;
  var apisresult = ' ';

  var returnValues = function(){
    if(apisresult.mobilespeed.error || apisresult.desktopspeed.error || !html){
      callback(null);
    }
    else{
      test(apisresult.desktopspeed);
      test(apisresult.mobilespeed);
      var returnobj = {redirected: redirected, rules: rulesresult, apis: apisresult, html: html};
      callback(returnobj);
    }
  };
  var finished = _.after(2, returnValues);

  httpsRequest(url, function(data){
    redirected = data.redirected;
    html = data.html;
    rules(html, function(results){
      rulesresult = results.slice();

      finished();
    });
    apis(url, function(results){
      apisresult = results;
      finished();
    });

  });

}

module.exports = check;
