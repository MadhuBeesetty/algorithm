const prime = (limit,a=2,b=[])=>{
  if(a==limit){
    console.log(b)
    return b;
  }
  const prime1 = (i=2)=>{
    console.log("i",i);
    if(a%i==0){
      if(a!=i){
        return ;
      }
      if(a == i){
        console.log("this is a current a",a);
        b.push(a);
        return;
      }
    }
    return prime1(i+1);
  }
  prime1();
  return prime(limit,a+1,b);
}
module.exports = prime;


