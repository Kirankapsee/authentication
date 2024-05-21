const { getUserbyPhoneId, addSession, deActivateSession, registerUser } = require("../model/model");

module.exports = {
    loginController :async (req , res) => {
        let { phone, password } = req.body;
        let authData =await getUserbyPhoneId(phone);
        console.log("authData : ", authData);

        if(authData.length > 0){
            if(authData[0].password ==  password){
                let sessionId = await addSession(phone);
                res.cookie("sessionId",sessionId[0].id);
                console.log("sessionId : ", sessionId[0].id);
                res.status(200).send("login successfull");
                console.log("login successfull");
            }else{
                res.status(200).send("login failed");
                console.log("login failed");
            }
        }else{
            res.status(200).send("user not found");
            console.log("user not found");
        }
    },

    logoutController :async (req , res) => {
        console.log("logoutController is running", req.cookies);
        let sessionId = req.cookies.sessionId;
      await deActivateSession(sessionId); 
      res.status(200).send("session loggedout successful");
    },

    getAllusers : (req , res) => { 
        res.status(200).send("getAllusers is running");
       console.log("getAllusers is running");
    } ,

    dashController : (req , res) => { 
        res.status(200).send("dashBoard callled -------------------------------->");
    },
    
    
    registerUser : async (req , res) => {
        let { fullName, phone, password } = req.body;
        let newUser = await registerUser(fullName, phone, password);
        console.log("fullName, phone, password : ", fullName, phone, password);
        res.status(200).send("registerUser is running");
    }


}