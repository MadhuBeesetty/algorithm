const add1 = require('../solutions/1.js')
const add2 = (a,b,c)=>{
  if(add1(a,b) == c){
    console.log("your program is perfect");
  }else{
    console.log("there is an error in your program")
  }
}
add2(1,1,1)
add2(1,1,2)
add2(2,2,4)

