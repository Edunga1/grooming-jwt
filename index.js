const jwt = require('jsonwebtoken');
const token = jwt.sign({foo: 'bar'}, 'secret', {algorithm: 'HS256', expiresIn: 2});
// expires in 2 seconds.

console.log('token', token);

// fail wrong secret
jwt.verify(token, 'wrong', (err, decoded) => {
    console.log('secret maches (\'wrong\'):', !err);
});

// verified
jwt.verify(token, 'secret', (err, decoded) => {
    console.log('secret matches (\'secret\'):', !err);
});

// fail expired
setTimeout(() => {
    jwt.verify(token, 'secret', (err, decoded) => {
        console.log('secret expires:', !!err);
    });
}, 2500);

