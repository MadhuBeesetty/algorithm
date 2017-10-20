const set = (a,greatest=0,i=0)=>{
  let keys = Object.keys(a);
  if(i==keys.length){
    return greatest;
  }
  if(a[keys[i]] > greatest ){
    greatest = a[keys[i]] 
  }
return(set(a,greatest,i+1));
};
module.exports = set;
