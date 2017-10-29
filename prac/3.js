//pass value and key as parameters in a function//
const fun = (obj,fun1 ,i=0,keys=Object.keys(obj))=>{
  if(i == keys.length) return;
  fun1 = (a,b)=>{
    console.log(`keys is ${a},value is ${b}`);
  }
  fun1(keys[i],obj[keys[i]]);
  return fun (obj,fun1,i+1);
}
fun({a:1,b:2,c:3})
