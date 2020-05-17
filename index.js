var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo=db.db('myapp2');

  dbo.collection("customers").drop(function(err,result){
      if(err) throw err;
      if(result) console.log("Collection deleted!");
    db.close();
  });
  
});