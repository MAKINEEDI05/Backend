import http from 'http'

const server = http.createServer((req,res) => {
    console.log(req.method);
    if(req.url==="/users"){
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.stringify({name:"thub"}))
    }
    else if(req.url==='/products'){
        const array=[
            {id:1, name:"Raj", place:"Rajamundry"},
            {id:2, name:"Lucky", place:"Kakinada"},
            {id:3, name:"Raju", place:"Amalapuram"},
        ]
        res.writeHead(200,{"content-Type":"application/JSON"});
        res.end(JSON.stringify(array))
    }
    else{
        res.writeHead(200,{"content-Type":"text/plain"});
        res.end("Hello this is from backend")
    }
});
server.listen(7007, ()=>{
    console.log(`Server running at ${7007}`);
})