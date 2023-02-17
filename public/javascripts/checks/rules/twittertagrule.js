var helpers = require('../../htmltagsearch.js');
var htmlToArray = helpers.htmlToArray;
var isContentAttributeValid = helpers.isContentAttributeValid;


var twitterTags = function(html,callback){
      var pass, description = '';
      var twitterCardArray = htmlToArray(html,'twitter');

      if (twitterCardArray!==null){

        if(isContentAttributeValid(twitterCardArray)){
        description = 'Good: All <meta name=\"twitter:...\" tags contain valid content';
        pass = true;
      }
        else{
          var numTagsWithContent = 0;
          var regExp = 'content="[^"].+?"';
          var regex = new RegExp(regExp,'gi');
          for (i = 0; i < twitterCardArray.length; i++){
              if (twitterCardArray[i] !== null)
                numTagsWithContent +=  (twitterCardArray[i].toLowerCase().match(regExp)||[]).length;
            }
          description = 'Error: '+numTagsWithContent +'/'+twitterCardArray.length +' <meta name=\"twitter\" tags contains valid content'
          pass = false;
        }
      }
      else {
      description = 'Warning: There are no <meta name=\"twitter\" tags';
      pass = true;
      }

      var returnObj = {
      name:'Twitter Card Meta Tag',
      passed: pass,
      description : description};
      callback(returnObj);

  }

module.exports = twitterTags;
