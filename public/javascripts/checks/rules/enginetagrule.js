var helpers = require('../../htmltagsearch.js');
var htmlToArray = helpers.htmlToArray;
var isContentAttributeValid = helpers.isContentAttributeValid;

var searchEngineTags = function(html,callback){
    var pass, description ='',passCounter=0;
    descriptionMetaTagArray = htmlToArray(html,'description');
    robotsMetaTagArray = htmlToArray(html,'robots');
    keywordsMetaTagArray = htmlToArray(html,'keywords');
    copyrightMetaTagArray = htmlToArray(html,'copyright');

  // Checks <meta name="description" contains the content attribute.
    if (descriptionMetaTagArray!== null){
      if(descriptionMetaTagArray.length > 1)
        description +='Error: There are ' + descriptionMetaTagArray.length + ' <Meta name = \"description\" search engine tags ';
      else if(isContentAttributeValid(descriptionMetaTagArray)){
        description += 'Good: <meta name = \"description\" contains valid content ';
        passCounter ++;
      }
      else
       description += 'Error: <Meta name = \"description\" contains invalid content ';
    }
    else{
      description +=( 'Warning: There is no <meta name = "description" search engine tag ');
      passCounter ++;
      }

  // Checks <meta name="robots" contains the content attribute.
    if (robotsMetaTagArray !== null){
       if(robotsMetaTagArray.length > 1)
          description +='Error: There are ' + robotsMetaTagArray.length + ' <Meta name = \"robots\" search engine tags ';
       else if(isContentAttributeValid(robotsMetaTagArray)){
          description += 'Good: <meta name = \"robots\" contains valid content ';
          passCounter ++;
        }
       else
           description += 'Error: <Meta name = \"robots\" contains invalid content ';
     }
    else{
      description +=('Warning: There is no <meta name = \"robots\" search engine tag ');
      passCounter ++;
    }
   // Checks <meta name="keywords" contains the content attribute.
    if (keywordsMetaTagArray!== null){
      if(keywordsMetaTagArray.length > 1)
          description +='Error: There are ' + keywordsMetaTagArray.length + ' <Meta name = \"keyword\" search engine tags ';
      else if(isContentAttributeValid(keywordsMetaTagArray)){
          description += 'Good: <meta name = \"keywords\" contains valid content ';
          passCounter ++;
        }
      else
          description += 'Error: <Meta name = \"keywords\" contains invalid content ';
    }
    else{
      description +=( 'Warning: There is no <meta name = \"keywords\" search engine tag ');
      passCounter ++;
    }
    // Checks <meta name="copyright" contains the content attribute.
    if (copyrightMetaTagArray !== null){
      if(copyrightMetaTagArray.length > 1)
          description +='Error: There are ' + copyrightMetaTagArray.length + ' <Meta name = \"copyright\" search engine tags ';
      else if(isContentAttributeValid(copyrightMetaTagArray)){
          description += 'Good: <meta name = \"copyright\" contains valid content ';
          passCounter ++;
        }
      else
          description += 'Error: <Meta name = \"copyright\" contains invalid content ';
    }
    else{
      description +=( 'Warning: There is no <meta name = \"copyright\" search engine tag ');
      passCounter ++;
    }
    if (passCounter == 4)
       pass = true;
    else
       pass = false;

      var returnObj = {
      name:'Search Engine Meta Tags(description,robots,keywords,copyright) ',
      passed: pass,
      description : description};
     callback(returnObj);
  }

  module.exports = searchEngineTags;
