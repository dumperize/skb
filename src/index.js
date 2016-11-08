import express from 'express';
const app = express();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/skb3', function (req, res) {
    const a = req.query.a || 0;
    const b = req.query.b || 0;
    return res.send((+a + +b).toString());
});

app.get('/skb4', function (req, res) {
    const fullname = req.query.fullname;

    if (!fullname || fullname.search(/[0-9_\/]/i) != -1)
        return res.send('Invalid fullname');

    const fullnameArr = fullname.trim().split(/\s+/).map(s => {
        return s.charAt(0).toUpperCase() + s.toLowerCase().substr(1);
    });
    let name;
    switch (fullnameArr.length) {
        case 3:
            name = fullnameArr[2] + ' ' + fullnameArr[0].charAt(0) + '. ' + fullnameArr[1].charAt(0) + '.';
            break;
        case 2:
            name = fullnameArr[1] + ' ' + fullnameArr[0].charAt(0) + '.';
            break;
        case 1:
            name = fullnameArr[0];
            break;
        default:
            name = 'Invalid fullname';

    }
    return res.send(name);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
