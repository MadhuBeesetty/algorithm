const factorial=require('../solutions/21.js')
const test=(num,fact)=>{
  if(factorial(num)==fact){
    console.log("perfect man");
  }else{
    console.log("sorry man");
  }
}
test(5,120)
