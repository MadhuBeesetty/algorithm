const prime = require('../solutions/9.js');
const test = (a,result)=>{
  if(prime(a) == result){
    console.log("your programme works")
  }else{
    console.log("sorry bro")
  }
}
test(2,"its a prime number");
test(4,"its not a prime number");

