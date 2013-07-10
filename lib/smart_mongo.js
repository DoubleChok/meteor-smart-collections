var EventEmitter = Npm.require('events').EventEmitter;
var MongoClient = Npm.require('mongodb').MongoClient;

Meteor.SmartMongo = new EventEmitter();

MongoClient.connect(process.env.MONGO_URL, function(err, db) {
  if(err) throw err;
  Meteor.SmartMongo.db = db;
  Meteor.SmartMongo.emit('ready');
});
