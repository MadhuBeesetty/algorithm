const prime = require('../solutions/9.js');
const test = (a,result)=>{
  if(prime(a) == result){
    console.log("your programme works")
  }else{
    console.log("sorry bro")
  }
}
test(2,true);
test(4,false);

