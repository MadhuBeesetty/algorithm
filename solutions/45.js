//conversion of camel case to kebab case//
const kebab = (a,i=0,b=[])=>{
  if(i == a.length){
    b=b.join('');
    return b;
  }
  if(a[i]==a[i].toUpperCase()){
    b.push("-")
  };
  b.push(a[i].toLowerCase());
return kebab(a,i+1,b)
}
module.exports=kebab
