const { Writable, Transform, Readable } = require('stream');
console.log("Buffers");
const buf1 = Buffer.alloc(10);
const buf2 = Buffer.from([1, 2, 3, 4]);
const buf3 = Buffer.from('Hello', 'latin1');
console.log(buf3.buffer);
console.log(buf3.toJSON());

var rs = new Readable({
    read: function () {

    }
});

var tr = new Transform({
    transform: function (chunk, encoding, callback) {
        console.log(chunk[0]++);
        this.push(chunk);
        callback();
    }
});
rs.pipe(tr).pipe(process.stdout);
rs.push("one");
rs.push("two");
rs.push("three");