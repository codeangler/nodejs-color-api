var requester = require('request');
var userColorString = process.argv[2];
// GET .json
var getColorJson = requester.get(
              "https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json",
              function(err, res, body){
              var searchMe = JSON.parse(body)
              // console.log(searchMe)
              // console.log(searchMe[4].name);
               for (var i = 0; i < searchMe.length; i++) {
                if(searchMe[i].name.toLowerCase() == userColorString.toLowerCase()){
                  console.log("The rgb color code for " + userColorString + " is: ", searchMe[i].rgb.r, searchMe[i].rgb.g, searchMe[i].rgb.b)
                  
                }
                }
            }
        );

