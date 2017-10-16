const callx = require('../solutions/6.js')
const test = (num)=>{
  let count =0;
  const hello= (a)=>{
    count=count+1;
  }
  callx(hello,num);
  if(count==num){
    console.log('correct');
  }else{
    console.log('wrong');
  }
}
test(3);
test(4);
test(5);


