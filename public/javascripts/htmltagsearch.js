var htmlToArray = function(html,tag) {
  if (html !== undefined){
 switch(tag){
   case 'img':
       regExp = '<' + tag +'.*?>'
       break;
     case 'h1':
       var regExp = '<' + tag + '.*?>(.|\\s)*?</' + tag + '>';
       break;
     case 'title':
       var regExp = '<' + tag + '.*?>(.|\\s)*?</' + tag + '>';
       break;
     case 'link':
       var regExp = '<' + tag + ' rel=".*?".*?>';
       break;
     case 'robots':
     case 'copyright':
     case 'description':
     case 'keywords':
       var regExp = '<meta name="' + tag + '".*?>' ;
       break;
     case 'og:title':
     case 'og:type':
     case 'og:url':
     case 'og:image':
       var regExp = '<meta property="'+tag+'".*?>';
       break;
     case 'twitter':
       var regExp = '<meta name="'+tag+'.*?".*?>';
     }
   }
   else{
     var html = 'Empty';
   }
  console.log(regExp);
  var regex = new RegExp(regExp,'gi');
  metaTagArray = html.match(regex);
  console.log(metaTagArray);
  return metaTagArray;
};

var isContentAttributeValid = function(searchEngingeTagArray){
    var numTagsWithContent = 0;
    var regExp = 'content="[^"].+?"';
    var regex = new RegExp(regExp,'gi');

    for (i = 0; i < searchEngingeTagArray.length; i++){
        if (searchEngingeTagArray[i] !== null)
          numTagsWithContent +=  (searchEngingeTagArray[i].toLowerCase().match(regExp)||[]).length;
      }
       if (numTagsWithContent == searchEngingeTagArray.length)
          return true;
        else
          return false;
}

module.exports = {htmlToArray: htmlToArray, isContentAttributeValid: isContentAttributeValid};
