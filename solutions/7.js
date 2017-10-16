const gcd = (a,b,i=1,greater=1)=>{
  if((a<i)||(b<i)){
    return greater;
  }
  if((a%i==0)&&(b%i==0)){
    greater=i;
  }
 return gcd(a,b,i+1,greater)
}
module.exports = gcd;
