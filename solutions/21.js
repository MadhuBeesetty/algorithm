const factorial=(num,fact=1)=>{
  fact=fact*num
  if(num == 1){
    return fact;
  }
return factorial(num-1,fact);
}
module.exports=factorial;
