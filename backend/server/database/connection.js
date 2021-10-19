const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
    dbName: 'url_shortner',
    user: process.env.mgdbuser,
    pass: process.env.mgdbpass,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
mongoose.connection.on('error', function () { console.log('error database') })
mongoose.connection.once('open', function () { console.log('connected to database') });
module.exports = mongoose.connection;