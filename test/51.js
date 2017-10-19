const set = require ('../solutions/51.js');
const test = (obj,result)=>{
  if(set(obj) == result){
    console.log("yo man your code is awesome");
  }else{
    console.log("your code sucks");
  }
}
test(x={1:1,2:2,3:3},3);
test(y={2:5,8:10,4:20},20);
test(z={1:1,2:2,3:3},1);

