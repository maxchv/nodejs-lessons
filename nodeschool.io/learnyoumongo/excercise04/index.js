const mongo = require('mongodb').MongoClient;

const client = mongo("mongodb://localhost:27017", { useNewUrlParser: true });

client.connect((err, client) => {
    if (err) return console.err(err);
    const db = client.db('learnyoumongo');
    const parrots = db.collection('parrots');

    parrots.find({ age: { $gt: parseInt(process.argv[2]) } })
        .project({ name: 1, age: 1, _id: 0 })
        .toArray((err, docs) => {
            if (err) return console.err(err);
            console.log(docs);
        })

    client.close();
});