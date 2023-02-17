var helpers = require('../../htmltagsearch.js');
var htmlToArray = helpers.htmlToArray;
var isContentAttributeValid = helpers.isContentAttributeValid;

var openGraphTags = function(html,callback){
    var passCounter = 0,pass, description = '';

    var ogTitleArray = htmlToArray(html,'og:title');
    var ogTypeArray = htmlToArray(html,'og:type');
    var ogURLArray = htmlToArray(html,'og:url');
    var ogImageArray = htmlToArray(html,'og:image');

    if (ogTitleArray !== null){
      if(isContentAttributeValid(ogTitleArray)){
        description += 'Good: <meta property=og:title contains valid content ';
        passCounter++;
      }
      else
        description += 'Error: <meta property=og:title contains invalid content ';
      }
    else{
      description += 'Warning: There is no <meta property=og:title tags ';
      passCounter++;
    }

    if (ogTypeArray !== null){
      if(isContentAttributeValid(ogTypeArray)){
        description += 'Good: <meta property=og:type contains valid content ';
        passCounter++;
      }
      else
        description += 'Error: <meta property=og:type contains invalid content ';
      }
    else{
      description += 'Warning: There is no <meta property=og:type tags ';
      passCounter++;
    }

    if (ogURLArray !== null){
      if(isContentAttributeValid(ogURLArray)){
        description += 'Good: <meta property=og:url contains valid content ';
        passCounter++;
      }
      else
        description += 'Error: <meta property=og:url contains invalid content ';
      }
    else{
      description += 'Warning: There is no <meta property=og:url tags ';
      passCounter++;
    }

    if (ogImageArray !== null){
      if(isContentAttributeValid(ogImageArray)){
        description += 'Good: <meta property=og:image contains valid content ';
        passCounter++;
      }
      else
        description += 'Error: <meta property=og:image contains invalid content ';
      }
    else{
      description += 'Warning: There is no <meta property=og:image tags ';
      passCounter++;
    }

    if (passCounter == 4)
       pass = true;
    else
       pass = false;

    var returnObj = {
    name:'Open Graph Tags',
    passed: pass,
    description : description};
    callback(returnObj);
  }

module.exports = openGraphTags;
