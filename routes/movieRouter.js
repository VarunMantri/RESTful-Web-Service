var express=require("express");
var MongoClient=require("mongodb").MongoClient;
var movieRouter=express.Router();
var config=require("../config.js");
//var passport=require("passport-http");

//REST end point: all movies
movieRouter.route('/')
.get(function(req,res,next)
{
        MongoClient.connect(config.url,function(err,db){
            if(err)
            {
                console.log("Unable to retrive db object.")   
            }
            else
            {
                var collection=db.collection("movies");
                collection.find({}).toArray(function(err,docs)
                {
                    var temp=[];
                    docs.forEach(function(item)
                    {
                        temp.push({'title':item._id,'data':item.data});
                    });
                    res.json(temp);
                    console.log("request completed");
                });
            }
        });
   
});

//REST end point: moviename
movieRouter.route('/:movieLang/')
.get(function(req,res,next)
{
    MongoClient.connect(config.url,function(err,db){
        if(err)
        {
            console.log("Unable to retrive db object.")   
        }
        else
        {
            var collection=db.collection("movies");
            collection.find({_id:searchItem}).toArray(function(err,docs)
            {
                var temp=[];
                docs.forEach(function(item)
                {
                        temp.push({'title':item._id,'data':item.data});
                });
                res.json(temp);
                console.log("request completed");
            });
        }
    });
});

module.exports=movieRouter;