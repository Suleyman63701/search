var helpers = require('../../htmltagsearch.js');
var htmlToArray = helpers.htmlToArray;

 var titleTags= function(html,callback){
	var pass, description;
      titleTagArray = htmlToArray(html,'title');
     if (titleTagArray !== null)
        numOfTags = titleTagArray.length;
     else
        numOfTags = 0;

     if (numOfTags == 1){
        pass = true;
       description = 'There is 1 <title> tag';
     }
      else{
      pass = false;
      description = 'Error: There are '+ numOfTags +' <title> tags';
    }
     var returnObj = {
      name:'Title Check',
      passed: pass,
      description : description
};
     callback(returnObj);

}

  module.exports = titleTags;
