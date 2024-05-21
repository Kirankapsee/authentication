const sql = require("../Configg/config");


module.exports = {



    async getUserbyPhoneId(phone){
        return await sql`select fullname, password from auth_table where phone_number = ${phone} and active = true`;
    },
    

    async registerUser(fullName,phone,password){
        console.log("phone : ", phone);
        console.log("password : ",  password);
        console.log("fullName : ",  fullName);
        return await sql`insert into auth_table (fullname,phone_number,password) values(${fullName},${phone},${password})`;  
    },

    async addSession (phone) {
        return await sql`insert into user_session (phone,login_time,is_active) values(${phone},now(),true) returning id`;
    },

    async deActivateSession (sessionId) {
        return await sql`update user_session set is_active = false,logout_time= now() where id = ${sessionId}`;
    },

    async verifyUserSession (sessionId) {
        return await sql`select * from user_session where id = ${sessionId}`;
    },







}