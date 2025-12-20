function getUserDetails(id){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res({userroll:"678"})
        },2000);
    })
};
const myfun=async()=>{
    console.log("hello");
    const result=await getUserDetails("123");
    console.log(result);
    console.log("world")
}; 
myfun();

// if we dont await we will get promise pending
// hello
// Promise { <pending> }
// world