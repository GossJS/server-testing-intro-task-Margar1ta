var http = require('http');
var path = require('path');

var moment = require('moment');



http.createServer(
  (req,res) => {
    res.writeHead(200, {
    'myname': 'Margarita'
  });
    if(req.url == '/quit'){
      process.exit();
    }
    if (req.url == '/stop') {
      process.nextTick(()=>{throw new Error('Stop')});
    }
    if (req.url == '/time') {
  res.end(moment().format("DD-MM-YYYY HH:mm"));
    }
    if (req.url == '/author') {
      res.end("Margarita Iakovleva");
    }
    //let regV = "/length\/g  [a-zA-Z0-9_]*";
    if (~req.url.indexOf("/length")) {
      if (req.url.length>8){
        let substr=req.url.substring(8).length+'';
        console.log(substr);
         res.end(substr);
       }
      else{
         res.end('0');
       }

    }

  }
).listen(process.env.PORT, () => console.log(`Started: ${process.env.PORT}`));


