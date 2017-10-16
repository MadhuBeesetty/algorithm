const prime = (a,i=2)=>{
  if(a%i == 0){
    if(i==a){
      return true;
    }else{
      return false;
    }
  }
    return prime(a,i+1);
}
module.exports = prime;

