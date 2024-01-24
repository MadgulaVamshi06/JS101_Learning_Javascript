
function lowercase(x){
    let lower="abcdefghijklmnopqrstuvwxyz";
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0;i<upper.length;i++){
      if(x==upper[i]){
        return lower[i];
      }
    }
    return x;
  }
  
  function convertwordlower(word){
    let bag="";
    for(i=0;i<(word.length);i++){
      let p=lowercase(word[i]);
      bag=bag+p;
    }
    return bag;
  }
  function toLowercaseArray(stringsArray) {
      var resultArray = [];
      for (var i = 0; i < stringsArray.length; i++) {
          resultArray.push(convertwordlower(stringsArray[i]));
      }
      return resultArray;
  }
  
  var inputArray =  ["MA", "SA", "I", "SCH", "OOL"];
  console.log(inputArray);
  var outputArray = toLowercaseArray(inputArray);
  console.log(outputArray);  