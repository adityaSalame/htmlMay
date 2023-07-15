// async function x(){
//     try{
//         let p="rejected";
//         await Promise.reject(p)
//     }catch(e){
//         console.log(e);
//     }
// }
// x();
// async function getd(){
//     return await Promise.resolve("i");
// }
// const d=getd();
// console.log(d);
// const m=()=>Promise.resolve("yay");
// function firstFunction(){
//     m().then(res=>console.log(res));
//     console.log('sec');
// }
// async function sec(){
//     console.log(await m());
//     console.log("sec");
// }
// firstFunction();
// sec();
//var x = new Promise(() => {}); console.log(x);
    // function greet(){
    //     var user=8;
    //      function f(greetin){
    //         console.log(user);
    //     }
    //     var user=user+2;
    //     return f;
    // }
    // var say=greet();
    // say();
    // var s=(function seq(){
    //     var c=0;
    //     return {
    //         getCurr: function(){
    //             return c;
    //         },
    //         getNext: function(){
    //             c=c+1;
    //             return c;
    //         }
    //     };
    // }()); //output:122
    // console.log(s.getNext(),s.getNext(),s.getCurr());
// function m(){
//     let c=0;
//     return function(){
//         return c++;
//     };
// }
// let c1=m(),c2=m();
// console.log(c1(),c1(),c2());//010
// function cart(){
//     let i=0;
//     return {
//         a:function(){
//             i++;
//         },
//         g:function(){
//             return i;
//         }
//     };
// }
// const c=cart();
// c.a();
// c.a();
// c.a();
// console.log(c.g());
// var a=10;
// function f(){
//     var a=20;
// console.log(a);
// console.log(window.a);
// }
// console.log(a+1);
// window.f();
// var o={
   
// }
// o.k2=""value1"";
// console.log(o.k2);
// 
// var str="";
// function f(){
//     str="a";
//     function b(){
//         str=str+"b";
//     }
//     b();
// }
// f();
// // Object.seal(object1);
// //delete obj.p

// console.log(str);
// let ar=[40,20,60];
// const h=function(x){
//     return x>5;
// }
// if(!ar.every(h)){
//     console.log('1');
// }
// else{
//     console.log(2);
// }
// let o={
//     n:1,n2:2
// };
// for(var i in o){
//     console.log(i);
// }
// const co={};
// const t={key:'b'};
// //var r=co.splice(1);
// const t1={key :'c'};
// co[t]=123;
// co[t1]=456;
// console.log(co[t]);
// let a=10,b=5,c=15;
// let result=(a>b ) && (b<c);
// let p="hello world";
// let z=p.slice(-5,-1);
// console.log(z);


    
// var add=function(x,y){
//     return x+y;
// }
// var subtract =function(x,y){
//     return x-y;
// }
// var op=function (func){
//     var c=2;
//     var d=3;
//     return func(c,d);
// }
// console.log(op(subtract));
// let brr=[1,,2,3];
// console.log(brr[1]);
// var ti=1;
// function a(){
//     ti=10;
//     //return;
    
// }
// a();
// console.log(ti);
// function b(){
//     console.log('b');
// }
//your JS code here. If required.
async function callme(){
	const message= document.getElementById("text").value;
	const delay= 1000*parseInt(document.getElementById("delay").value);
	await delayfunc(delay,message);
	 
	
}
function delayfunc(delay,message) {
  return new Promise(resolve=>{
	  
	  setTimeout(
       resolve("aa")
	  ,delay)
	  
  })
}
 document.getElementById("btn").addEventListener("click",callme);