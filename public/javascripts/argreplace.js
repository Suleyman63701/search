var findArgValue = function(object, key, callback){
  //object is array of arguments
  var retVal;
  object.forEach(function(value){
    if(value.key == key){
      retVal = value.value;
      callback(retVal);
    }
  });
}

var fun = function(object){
  //first, we make the regular expression to find the BEGIN tags
  var stringFindBegin = "{{BEGIN_.*?}}";
  //next, we make the regular experession to find the END tags
  var stringFindTags = "{{(?!BEGIN_)(?!END_).*?}}"
  //now make the actual expressions
  var regExpFindBegin = new RegExp(stringFindBegin, 'g');
  var regExpFindTags = new RegExp(stringFindTags, 'g');
  //now, with these two expressions, loop through each rule result format string
  for(var key in object.formattedResults.ruleResults){
    theobject = object.formattedResults.ruleResults[key];
    //now we make the two arrays
    if(!theobject.summary || !theobject.summary.format){
      //sometimes this doesn't exist, just skip
      continue;
    }
    var beginTags = theobject.summary.format.match(regExpFindBegin);
    var valueTags = theobject.summary.format.match(regExpFindTags);
    //if there were begin tags
    if(beginTags != null){
      //strip the BEGIN_ and the {{}}
      var strippedBeginTags = [];
      beginTags.forEach(function(value){
        var stripString = value.substring(8, value.length-2);
        strippedBeginTags.push(stripString);
      });
      //for each of the new tags
      strippedBeginTags.forEach(function(thevalue){
        //first, get the full string of the tag that is being replaced
        var stringFullTag = "{{BEGIN_" + thevalue + "}}.*?{{END_" + thevalue + "}}";
        var regExpFullTag = new RegExp(stringFullTag, 'g');
        var betweenTexts = theobject.summary.format.match(regExpFullTag);
        //now with the text avalible, strip off the excess BEGIN and end
        var strippedBetweenTexts = [];
        betweenTexts.forEach(function(thestring){
          var beginTagString = "{{BEGIN_" + thevalue + "}}";
          var beginSplitPos = beginTagString.length;
          var endSplitString = "{{END_" + thevalue + "}}";
          var endSplitPos = thestring.length - endSplitString.length;
          var urlText = thestring.substring(beginSplitPos, endSplitPos);
          strippedBetweenTexts.push(urlText);
        });
        //I now have the text between the {{}} tags {{}}

        //get the URL for the tag
        findArgValue(theobject.summary.args, thevalue, function(retVal){
          //for each between text
          strippedBetweenTexts.forEach(function(betweenString){
            //create a regExp that will find all instances of {{}}between{{}}
            //replace with the needed value
            stringFindReplaceText = "{{BEGIN_" + thevalue + "}}" + betweenString + "{{END_" + thevalue + "}}";
            regExpFindReplaceText = new RegExp(stringFindReplaceText, 'g');
            //now create the string it will be replaced with
            var replaceString = "<a href=\"" + retVal + "\" >" + betweenString + "</a>";
            var foundString = theobject.summary.format.match(regExpFindReplaceText);
            theobject.summary.format = theobject.summary.format.replace(regExpFindReplaceText, replaceString);
          });

        });
      });
    }
    //if there were value tags
    if(valueTags != null){
      //strip the {{}}
      var strippedValueTags = [];
      valueTags.forEach(function(value){
        var stripString = value.substring(2, value.length-2);
        strippedValueTags.push(stripString);
      });
      //loop through the array
      strippedValueTags.forEach(function(thevalue){
          //find the arg object with key value of thevalue
          //in this arg object the value value is what needs to replace
          //the placeholder {{}} thingy
          //
          //theobject.summary.args is a bunch of objects in an array
          //loop through this array and for each object
          //arrayobject.key
          //arrayobject.value
          findArgValue(theobject.summary.args, thevalue, function(retVal){
            var stringArgSearch = "{{" + thevalue + "}}";
            var regExpArgSearch = new RegExp(stringArgSearch, 'g');
            theobject.summary.format = theobject.summary.format.replace(regExpArgSearch, retVal);
          });
      });
    }
  };


}

module.exports = fun;
