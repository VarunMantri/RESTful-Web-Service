var express=require("express");
var morgan=require("morgan");
var movieRouter=require("./routes/movieRouter.js");
var config=require("./config.js");
var app=express();
//var passport=require("passport-http");
//var BasicStrategy=passport.BasicStrategy;
//var User=require("./models/user.js");
//configuring passport

//------------------------------------------------------------------
/*passport.use(new BasicStrategy(function(username,password,done)
{
    User.findOne({username:username},function(err,user){
       if (err) 
        {
            return (done(err));
        }
        if(!user){
            return done(null,false);
        }
        if (!user.validPassword(password))
        {
            return done(null,false);
        }
        return done(null,user);
    });
}););*/
//--------------------------------------------------------------------

app.use(morgan('dev'));
app.use("/movies",movieRouter);


app.listen(config.port,config.hostname,function()
{
   console.log("Server running on http://"+config.hostname+":"+config.port); 
});