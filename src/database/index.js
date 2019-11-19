const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/appDatabase', { 
mongoose.connect('mongodb+srv://lgerevini:GJYps4hLlfxU0ryn@appcluster-pnsso.gcp.mongodb.net/redcup?retryWrites=true&w=majority', { 
    useUnifiedTopology: true,
    useNewUrlParser: true },
    (err, connection) => {
    if(err) {
        console.error(err);
        return
    }
        console.log('Connected to DB - ' + connection);
    });

mongoose.Promise = global.Promise;

module.exports = mongoose;