const kebab = require('../solutions/45.js');
  const test = (word,result)=>{
    if(kebab(word) == result){
      console.log("yoo man");
    }else{
      console.log("your code sucks");
    }
  }
  test("madhuSudhan","madhu-sudhan")
  test("saumyaSingh","saumya-singh")
  test("maryChris","mary-chris")
  test("zhuMingBeijing","zhu-ming-beijing")
