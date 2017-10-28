const check = require('../solutions/47.js');

const test = (arr,result)=>{
  if(check(arr) == result ){
    console.log("yo man");
  }else{
    console.log("your code sucks");
  }
};
test([1,1,1,1,2,2,3,4,5],1);
test([5,5,2,1,5,2],5);

