const prime = (a,i=2)=>{
  if(a%i == 0){
    if(i==a){
      return "its a prime number";
    }else{
      return "its not a prime number";
    }
  }
    return prime(a,i+1);
}
module.exports = prime;

