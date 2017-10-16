const prime = (limit,a=2,b=[])=>{
  if(a==limit){
    return b;
  }
  const prime1 = (i=2)=>{
    if(a%i==0){
      if(a==i){
        b.push(a);
        return;
      }else{
        return ;
      }
    }
    return prime1(i+1);
  }
  prime1();
  return prime(limit,a+1,b);
}
module.exports = prime;


