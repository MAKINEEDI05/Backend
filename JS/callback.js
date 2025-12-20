function fun1(data,fun2){
    console.log(data);
    fun2("This is a inner function");
}
fun1("Hello",(data)=>{
    console.log(data);
})