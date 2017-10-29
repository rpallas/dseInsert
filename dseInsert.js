var Writable = require('stream').Writable;
var writableStream = Writable({ objectMode: true });
writableStream._write = function (chunk, enc, next) {
    console.log(`chunk: ${JSON.stringify(chunk)}`);
    next();
};

module.exports = writableStream;