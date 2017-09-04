const assert = require('assert');

// Inserting a Document
const insertDocuments = (db, callback) => {
    // get the documents collection
    const collection = db.collection('employees');

    // Insert some employees.
    collection.insertMany([
        { empid: '615', name: 'vishal' },
        { empid: '616', name: 'harshil' },
        { empid: '623', name: 'mayank' }
    ], (err, result) => {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log('Inserted 3 employees to employees collection');
        callback(result);
    });
}

// Updating an employee
const updateDocument = (db, callback) => {
    const collection = db.collection('employees');

    collection.updateOne({
        empid: '623'
    }, {
            $set: {
                name: 'mayank jain'
            }
        }, (err, result) => {
            assert.equal(err, null);
            console.log('Updated employee');
            callback(result);
        });
}

// Deleting an employee
const deleteDocument = (db, callback) => {
    const collection = db.collection('employees');

    collection.deleteOne({
        empid: '623'
    }, (err, result) => {
        assert.equal(err, null);
        console.log('Employee document deleted');
        callback(result);
    })
}

// Find all Documents
const findDocuments = (db, callback) => {
    const collection = db.collection('employees');

    collection.find({}).toArray((err, docs) => {
        assert.equal(err, null);
        console.log('Found the following employees');
        console.dir(docs);
        callback(docs);
    })
}

module.exports = {
    insertDocuments,
    updateDocument,
    deleteDocument,
    findDocuments
}