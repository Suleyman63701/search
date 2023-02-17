var request= require('request');

var pageInsightsQuery = function(url, callback){
  var apikey = "AIzaSyCNaOdODmRoJTDbt6xf_XEdTxcA44rBB10";

  var getURL = function(url) {
    var theURL = 'https://www.googleapis.com/pagespeedonline/v2/runPagespeed?url='+url+'&strategy=mobile'+'&key='+apikey;
    console.log("URL: " + theURL);
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
