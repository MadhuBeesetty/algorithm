const divisible = require('../solutions/11.js')
const test = (number,divNum,result)=>{
  if(divisible(number,divNum)==result){
    console.log("man your code works");
  }else{
    console.log("sorry there is an error");
  }
}
test(15,7,21);
test(1,7,7);








