var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo=db.db('myapp2');
  var myquery={name:"mani"};
  var new_value={$set:{name:"ayush", age:"23",id:"10055"}};
  dbo.collection("customers").updateOne(myquery,new_value,function(err,result){
      if(err) throw err;
      console.log("1 documents updated!");
    db.close();
  });
  
});