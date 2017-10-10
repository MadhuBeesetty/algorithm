const tester = require('../solutions/5.js')

const test = (n)=>{
  let sum = 0;
  const funct1 =()=>{
   return sum=sum+1;
  }
  tester(n,funct1);
  if(n == sum){
    console.log("your test is correct");
  }else{
    console.log("your test is in correct");
  }
}
test(4);
test(5);
