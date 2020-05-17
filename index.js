var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo=db.db('myapp2');
  var myquery= {name:'mani'};
  dbo.collection("customers").deleteOne(myquery,function(err,result){
      if(err) throw err;
    console.log("1 documents deleted!");
    db.close();
  });
  
});