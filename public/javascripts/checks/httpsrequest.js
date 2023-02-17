var request = require('request');

var doRequest = function(url, callback){

  var returnresult = request.get(url, function(err, res, body){
    var wasdirected = true;

    var newurl = returnresult.uri.href;
    //was directed will not display if https was starting
    //because then it is unnecessary
    //howver, if it was http, then if it didn't end up at
    //https, then it will show as false, and cause the warning to appear.
    if(url.startsWith('http://')){
      wasdirected = false;
      if(newurl.startsWith('https://')){
        wasdirected = true;
      }
    }
    var data = {html: body, redirected: wasdirected};
    callback(data);
  });
}
module.exports = doRequest;
