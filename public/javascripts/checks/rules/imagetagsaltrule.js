var helpers = require('../../htmltagsearch.js');
var htmlToArray = helpers.htmlToArray;

var imageTags = function(html,callback){
    var pass, description;
    var noImageTagsFlag = false;
    imageTagArray = htmlToArray(html,'img');
    if (imageTagArray !== null)
      numOfTags = imageTagArray.length;
    else{
      noImageTagsFlag = true;
      numOfTags = 0;
    }

    var regExp = 'alt\s*=\s*"[^"].*?"';
    var regex = new RegExp(regExp,'gi');
    var numTagsWithAlt = 0;

    for (i = 0; i < numOfTags; i++){
      if (imageTagArray[i] !== null)
        numTagsWithAlt +=  (imageTagArray[i].match(regex)||[]).length;
    }

    if (numTagsWithAlt == numOfTags && noImageTagsFlag == false){
      pass = true;
      description = 'All "<img =" tags contain an alt text'
    }
    else if (noImageTagsFlag == true){
      pass = true;
      description = 'Warning: Page contains 0 image tags.';

    }
    else{
      pass = false;
      description = 'Error: '+(numOfTags - numTagsWithAlt) +'/'+ numOfTags + ' image tags are missing an alt text.';
    }
    var returnObj = {
      name:'Image Check',
      passed: pass,
      description : description};
     callback(returnObj);
}

module.exports = imageTags;
