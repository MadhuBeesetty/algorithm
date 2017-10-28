const check = (arr,i=0,obj={})=>{

  const greater = (bignumber=0,k=0,greaterValue=0,keys=Object.keys(obj))=>{
    if(keys.length == k){
        return bigNumber;
    }
    if(obj[keys[k]]>greaterValue){
      greaterValue=obj[keys[k]];
       bigNumber = keys[k];
   }
      return greater(bigNumber,k+1,greaterValue,keys);
  };

  if(arr.length == i){
    return greater();
  }

  let val = arr[i];
  if(!obj[val]){
    obj[val] = 1;
  }else{
    obj[val] = obj[val]+1;
  };
   return check(arr,i+1,obj) ;
};

module.exports = check;
