//take an array as input and return an array of characters which repets more than once.//
const fun = (arr,i=0,obj={})=>{
  if(arr.length == i) return fun2(obj);
  if(!obj[arr[i]]){
    obj[arr[i]] = 1
  }else{
    obj[arr[i]]=obj[arr[i]]+1;
  }
 return fun(arr,i+1,obj);
}
const fun2=(obj,arr2=[],j=0,keys=Object.keys(obj))=>{
  if(keys.length == j) return arr2;
  if(obj[keys[j]] > 1){
    arr2.push(keys[j]);
  }
  return fun2(obj,arr2,j+1)
}
console.log(fun([1,1,0,2,2,2,3,0,4]))
