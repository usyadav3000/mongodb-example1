var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo=db.db('myapp2');
  var query= {id:"1004"};
  dbo.collection("customers").find(query).toArray(function(err,result){
      if(err) throw err;
    console.log(result);
    db.close();
  });
  
});