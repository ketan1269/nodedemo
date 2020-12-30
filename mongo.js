const mongoose = require("mongoose");
mongoose.Promise= global.Promise;

 var db = mongoose.connect('mongodb://localhost/Test');
                    console.log(db,"db");
                checkMongooseConnection(db)


                
function checkMongooseConnection(db) {
    console.log("check connection")
    mongoose.connection.on('open', function (ref) {
        console.log('Connected to mongo server.');
        return db
    });
    mongoose.connection.on('error', function (err) {
        console.log('Could not connect to mongo server!');
        console.log(err);
    });
}

