const callx = (func,num,i=1)=>{
  func(i);
  if(i==num){
    return;
  }
  return callx(func,num,i+1);
}
module.exports = callx;
