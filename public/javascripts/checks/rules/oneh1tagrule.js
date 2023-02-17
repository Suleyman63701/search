var helpers = require('../../htmltagsearch.js');
var htmlToArray = helpers.htmlToArray;

var h1tags = function(html,callback){
  var pass, description;
     h1TagArray = htmlToArray(html,'h1')
    if (h1TagArray !== null)
      numOfTags = h1TagArray.length;
    else
      numOfTags = 0;

    if (numOfTags == 1){
      pass = true;
      description = 'There is 1 <h1> tag';
    }
    else{
      pass = false;
      description = 'Error: There are '+ numOfTags + ' <h1> tags'
    }
    var returnObj = {
      name:'h1 Check',
      passed: pass,
      description : description};
     callback(returnObj);
}
module.exports = h1tags;
