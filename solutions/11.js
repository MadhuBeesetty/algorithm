const divisible = (a,b)=>{
  if(a%b==0){
    return a;
  }
  return divisible(a+1,b);
}
module.exports = divisible;
