const str = (string,character,i=0)=>{
  if(i == string.length){
    return false;
  }
  if(string[i] == character){
    return true;
  }
  return(str(string,character,i+1));
}
module.exports = str
