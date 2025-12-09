const express=require("express");
const app=express();
app.use(express.json());
app.get("/users",(req,res)=>{
    console.log("Data printed");
    res.send("Backend is running");
});
app.post('/add-user',(req,res)=>{
    let data=req.body;
    console.log(data);
    res.send(`Added data`);
})
app.put('/edit-user',(req,res)=>{
    let data=req.body;
    console.log(data);
    res.send(`edited data`);
})
app.delete('/delete-user',(req,res)=>{
    let data=req.body;
    console.log(data);
    res.send(`deleted data`);
})
app.listen(3000,()=>{
    console.log("server started on port 3000");
});