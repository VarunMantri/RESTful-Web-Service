//author : Varun Rajiv Mantri
// Main Server file 


var express=require("express");
var morgan=require("morgan");
var movieRouter=require("./routes/movieRouter.js");
var config=require("./config.js");
var app=express();

app.use(morgan('dev'));
//mounting the router on /movies route
app.use("/movies",movieRouter);

//listening on defult port 3000 and hostname localhost
app.listen(config.port,config.hostname,function()
{
   console.log("Server running on http://"+config.hostname+":"+config.port); 
});
