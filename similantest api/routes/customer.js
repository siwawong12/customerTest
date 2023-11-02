const express = require("express");
const pool = require("../config");

const router = express.Router();

router.get("/getCustomer", async function(request,response,next){
    const rows = await pool.query("select * from customer")
    return response.status(200).send(rows)
})

router.get("/getCustomer/:id", async function(request,response,next){
    const custId = request.params.id
    const rows = await pool.query("select * from customer where cust_id = ?",[custId])
    return response.status(200).send(rows)
})

router.post("/createCustomer", async function(request,response,next){
    const conn = await pool.getConnection();
    const cust = request.body
    try{
        const rows = await conn.query(
            `insert into customer (\`cust_id\`, \`cust_name\`, \`cust_address\`, \`cust_postcode\`, \`cust_phone\`, \`cust_fax\`, \`cust_email\`)
              VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [cust.custid, cust.custname, cust.custadd, cust.custpost, cust.custphone, cust.custfax, cust.custemail])
        const customer = await conn.query(`select * from customer order by \`cust_id\` desc limit 1 `)
        return response.status(200).send(customer[0])
    }catch(err){
        await conn.rollback()
        return response.status(404).send(err)
    }finally{
        await conn.commit()
    }

})

router.put("/updateCustomer/:id", async function(request,response,next){
    const conn = await pool.getConnection();
    const cust = request.body
    // const custId = request.params.id
    try{
        const rows = await conn.query(
            `update customer set 
            cust_id = '${cust.custid}', 
            cust_name = '${cust.custname}', 
            cust_address = '${cust.custadd}', 
            cust_postcode = '${cust.custpost}', 
            cust_phone = '${cust.custphone}', 
            cust_fax = '${cust.custfax}', 
            cust_email = '${cust.custemail} '
            where cust_id = '${cust.custid}' `)
        const customer = await conn.query(`select * from customer where cust_id = '${cust.custid}'`)
        return response.status(200).send(customer[0])
    }catch(err){
        await conn.rollback()
        return response.status(404).send(err)
    }finally{
        await conn.commit()
    }
})

router.delete("/deleteCustomer/:id", async function(request,response,next){
    const conn = await pool.getConnection();
    const custId = request.params.id
    try{
        const customer = await conn.query(`select * from customer where cust_id = '${custId}'`)
        const deleteBook = await conn.query(`delete from customer where cust_id = '${custId}'`)
        return response.status(200).send(customer[0])
    }catch(err){
        await conn.rollback()
        return response.status(404).send(err)
    }finally{
        await conn.commit()
    }
})


exports.router = router;