var _ = require('underscore');
var oneTitleRule = require('./onetitletagrule.js');
var h1TagsRule = require('./oneh1tagrule.js');
var imageTagsRule = require('./imagetagsaltrule.js');
var canonicalLinkRule = require('./canonicallinkrule.js');
var engineTagRule = require('./enginetagrule.js');
var openGraphRule = require('./opengraphrule.js');
var twitterTagRule = require('./twittertagrule.js');

var checkRules = function(htmlString, callback){
  var testruleresults = [];

  var returnFunct = function(){
    callback(testruleresults);
  }
  var finished = _.after(7, returnFunct);

  oneTitleRule(htmlString, function(result){
    testruleresults.push(result);
    finished();
  });
  h1TagsRule(htmlString, function(result){
    testruleresults.push(result);
    finished();
  });
  imageTagsRule(htmlString, function(result){
    testruleresults.push(result);
    finished();
  })
  canonicalLinkRule(htmlString, function(result){
    testruleresults.push(result);
    finished();
  });
  engineTagRule(htmlString, function(result){
    testruleresults.push(result);
    finished();
  });
  openGraphRule(htmlString, function(result){
    testruleresults.push(result);
    finished();
  });
  twitterTagRule(htmlString, function(result){
    testruleresults.push(result);
    finished();
  });

};

module.exports = checkRules;
