const kebab = (a,i=0,b=[])=>{
  if(i == a.length){
    b=b.join('');
    return b;
  }
  if(a[i]!=a[i].toUpperCase()){
    b.push(a[i]);
  }else{
    c=a[i].toLowerCase();
    b.push("-");
    b.push(c);
  }
return kebab(a,i+1,b)
}
module.exports=kebab
