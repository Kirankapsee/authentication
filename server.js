const express = require('express');


const app = express();


const router  =  require('./app/router/auth_router');




app.use(express.json({
    limit: '50mb'
}));



app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use('/api',router);



app.listen(8081, function(){
    console.log("Server has started Succesflly")
})