const mongo = require('mongodb').MongoClient;
const age = parseInt(process.argv[2]);

const client = mongo("mongodb://localhost:27017", { useNewUrlParser: true });

client.connect((err, client) => {
    const db = client.db('learnyoumongo');
    const parrots = db.collection('parrots');
    parrots.find({ age: { $gt: age } }).toArray((err, docs) => {
        console.log(docs);
    });
    client.close();
});