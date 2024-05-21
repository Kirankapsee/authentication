const express = require('express');
const router  =  require('./app/router/auth_router');
var cookieParser = require('cookie-parser')




const app = express();

app.use(express.json({
    limit: '50mb'
}));

app.use(cookieParser())



app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use('/api',router);



app.listen(8081, function(){
    console.log("Server has started Succesflly")
})