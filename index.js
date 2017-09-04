const MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

const dbQuery = require('./db-query');

// Connection URL
const url = 'mongodb://localhost:27017/my_db';
MongoClient.connect(url, (err, db) => {
    assert.equal(null, err);
    console.log('Connected correctly to server');

    //dbQuery.insertDocuments(db, () => db.close());
    //dbQuery.updateDocument(db, () => db.close());
    //dbQuery.deleteDocument(db, () => db.close());
    dbQuery.findDocuments(db, () => db.close());
});