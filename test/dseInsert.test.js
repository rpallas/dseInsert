const StreamTest = require('StreamTest');
const Test = require('ava');

const dseInsert = require('../dseInsert');

StreamTest.versions.forEach((version) => {

    Test(`${version} - it should be a writable stream`, t => {
        const data = [ { name: 'abc' } ];
        t.true(typeof dseInsert._write === 'function');
        t.notThrows(() => { StreamTest[version].fromObjects(data).pipe(dseInsert) } );
    });
});
