const gcd =require('../solutions/7.js')
const test=(a,b,result)=>{
  if (gcd(a,b)==result){
    console.log("your programme looks good");
  }else{
    console.log("your programme looks bad");
  }
}
test(15,6,3)
