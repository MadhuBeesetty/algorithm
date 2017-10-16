//test code to check the greatest divisor of a number//
const divisor =require('../solutions/8.js')
  const test=(a,result)=>{
  if(divisor(a)==result){
    console.log("your program works man");
  }else{
    console.log("your program doesnt work");
  }
}
test(10,5)
test(20,10)
