// take an array of number and a number, if the sum of array is equal to number return true//
const fun = (arr,n,obj={},i=0)=>{
  if(arr.length == i) return false;
  obj.i = arr[i][0]+arr[i][1];
  if(obj.i == n) return true;
  return fun(arr,n,obj,i+1);
}
console.log(fun([[1,2],[3,3],[5,2]],7));
