var helpers = require('../../htmltagsearch.js');
var htmlToArray = helpers.htmlToArray;
var isContentAttributeValid = helpers.isContentAttributeValid;


var canonicalLinkTags = function(html,callback){
    var pass, description;
    linkTagArray = htmlToArray(html,'link');
    var noLinkTagsFlag = false;
    if (linkTagArray !== null)
      numOfTags = linkTagArray.length;
    else{
      noLinkTagsFlag = true;
      numOfTags = 0;
    }
    var regExp = '"canonical"';
    var regex = new RegExp(regExp,'gi');
    var numTagsWithCanonical  = 0;

    for (i = 0; i < numOfTags; i++){
      if (linkTagArray[i] !== null)
        numTagsWithCanonical +=  (linkTagArray[i].match(regex)||[]).length;
    }
if (numTagsWithCanonical == 1 && noLinkTagsFlag != true){
  pass = true;
  description = 'There are ' + numOfTags + ' link tags and '+ numTagsWithCanonical +' has "rel=canonical".';
}
else if( noLinkTagsFlag == true){
  pass = true;
  description = 'Warning: There are no link tags';
}
else{
  pass = false;
  description = 'Error: There are ' + numOfTags + ' link tags and '+ numTagsWithCanonical + ' have "rel=canonical';
}
    var returnObj = {
      name:'Canonical Link Tag',
      passed: pass,
      description : description};
     callback(returnObj);
  }

module.exports = canonicalLinkTags;
