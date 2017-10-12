//programme to find all the divisors of anumber and print the greatest among them//
const divisor=(a,b=1,c=[])=>{
  if(a%b == 0){
    c.push(b);
  }
  if(b == a){
    let d=c.length;
    return(c[d-2]);
  }
  return (divisor(a,b+1,c))
}
module.exports= divisor;
