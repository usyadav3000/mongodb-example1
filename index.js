var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo=db.db('myapp2');
  var myobj=[
      {name:"umashankar",age:"22",id:"1001"},
      {name:"aditya",age:"21",id:"1002"},
      {name:"mani",age:"23",id:"1003"},
      {name:"ashay",age:"20",id:"1004"},
      {name:"vijay",age:"43",id:"1005"}
    
    ];
  dbo.collection("customers").insertMany(myobj,function(err,res){
      if(err) throw err;
    console.log("nomber of document inserted: "+ res.insertedCount);
    db.close();
  });
  
});