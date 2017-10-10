const funct = (num,fun,i=0)=>{
  if(i<num){
    fun()
    funct(num,fun,i+1)
  }
}

module.exports = funct;
