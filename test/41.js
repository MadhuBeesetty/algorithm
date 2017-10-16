const testing = require('../solutions/41.js');
const test = (num)=>{
  let a = testing(num);
  const test1 = (i=0) =>{
    const test2 = (j=2) =>{
      if(a[i]%j == 0){
        if(i == j){
          return;
        }
      }
        return test2(j+1);
    }
    if( i == a.length-1 ){
      console.log("your programme is good");
      return ;
  }
    return test1(i+1);
  }
  test1();
}
test(100);
test(150);
test(200);


