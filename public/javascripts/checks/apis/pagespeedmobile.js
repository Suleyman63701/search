var request= require('request');

var pageInsightsQuery = function(url, callback){
  var apikey = "your api key";

  var getURL = function(url) {
    var theURL = 'https://www.googleapis.com/pagespeedonline/v2/runPagespeed?url='+url+'&strategy=mobile'+'&key='+apikey;
    
		return theURL;
	}
	if(url != "") {
		var requestURL = getURL(url);
		var results = request(requestURL, function(error, response, body) {
      callback(JSON.parse(body));
    });
  }
}

module.exports = pageInsightsQuery;
