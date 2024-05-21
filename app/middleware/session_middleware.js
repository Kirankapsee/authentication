const { verifyUserSession } = require("../model/model");

module.exports = {

    verifySession :async (req , res, next ) => {
        console.log("logoutController is running", req.cookies);
        let sessionId = req.cookies.sessionId;
        let sessionDetails = await verifyUserSession(sessionId); 
        console.log("sessionDetails : ", sessionDetails[0]);
        if(sessionDetails[0].is_active == true){
            next();
        }else{
            res.status(200).send("Session Expired");
            console.log("Session Expired");
        }
    }
}