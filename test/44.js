const str = require('../solutions/44.js')
const test = (string,character,result)=>{
  if(str(string,character)==result){
    console.log("hi-fi bro");
  }else{
    console.log("your code sucks");
  }
}
test("madhu","m",true)
test("hero","a",false)
test("hero","a",true)
