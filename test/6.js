const callx = require('../solutions/6.js')
const test = (num)=>{
  let count =0;
  let passng = true;
  const hello= (a)=>{
    count=count+1;
    if(a!=count){
      passing=false;
    }
  }
  callx(hello,num);
  if(count==num && passng==true){
    console.log('correct');
  }else{
    console.log('wrong');
  }
}
test(3);


