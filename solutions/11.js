const divisible = (num1,num2)=>{
  if(num1%num2==0){
    return num1;
  }
  return divisible(num1+1,num2);
}
module.exports = divisible;
