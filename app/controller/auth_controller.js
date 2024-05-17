const { getUserbyPhoneId } = require("../model/model");

module.exports = {






    loginController :async (req , res) => {
        let { phone, password } = req.body;
        let authData =await getUserbyPhoneId(phone);
        console.log("authData : ", authData);

        if(authData.length > 0){
            if(authData[0].password ==  password){
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

    getAllusers : (req , res) => { 
        res.status(200).send("getAllusers is running");
       console.log("getAllusers is running");
    } 




}