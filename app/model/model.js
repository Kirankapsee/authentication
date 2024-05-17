const sql = require("../Configg/config");


module.exports = {



    async getUserbyPhoneId(phone){
        return await sql`select fullname, password from auth_table where phone_number = ${phone} and active = true`;
    },





}