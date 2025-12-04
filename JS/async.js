function getUserDetails(id){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res({userroll:"678"})
        },2000);
    })
};
const myfun=async()=>{
    const result=await getUserDetails("123");
    console.log(result);
};
myfun();