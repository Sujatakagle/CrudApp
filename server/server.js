const express=require('express')
const mysql=require('mysql')
const app=express()
const cors=require('cors')
app.use(cors({
    origin:"http://localhost:3000"
}))
app.use(express.json())

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud",
    port:"3308"

})
con.connect((err)=>{
    if(err)
        {
console.log("error")
        }
else{
    console.log("connected")
}
        
})

app.get("/",(req,resp)=>{
    con.query("select *from data",(err,result)=>{
        if(err)throw err;
        resp.send(result)
    })
})

app.post("/create",(req,resp)=>{
    const data = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        Address: req.body.Address,
        Contact: req.body.Contact
    };
     con.query("insert into data set ?",data,(err,result)=>{
        if(err)throw err;
        resp.send(result);
     })   
})

app.put("/update/:id", (req, resp) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        Address: req.body.Address,
        Contact: req.body.Contact,
        id: req.params.id
    };

    con.query("UPDATE data SET ? WHERE id=?", [data, data.id], (err, result) => {
        if(err)throw err;
        resp.send(result);
    });
});
app.delete("/:id",(req,resp)=>{
    con.query("delete from data where id="+req.params.id,(err,result)=>{
        if(err)throw err;
        resp.send(result);
    })
})


    

app.listen(5000)