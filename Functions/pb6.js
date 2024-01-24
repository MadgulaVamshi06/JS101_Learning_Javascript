function upperCase(x){  
    let lower="abcdefghijklmnopqrstuvwxyz";
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0;i<lower.length;i++)
    {
        if(x==lower[i])
        {
          return upper[i];
        }
    }
      return x;
    }
  function lowerCase(x){  
  let lower="abcdefghijklmnopqrstuvwxyz";
  let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for(let i=0;i<lower.length;i++)
  {
      if(x==upper[i])
      {
        return lower[i];
      }
  }
    return x;
  }
  
    function swap(inputString){
    var result = "";
      for (var i = 0; i < inputString.length; i++) 
      {
      var currentChar = inputString[i];
      if (currentChar >= 'A' && currentChar <= 'Z') 
      { 
        result = result + lowerCase(currentChar);
       } 
      else if (currentChar >= 'a' && currentChar <= 'z') 
      { 
        result = result + upperCase(currentChar);
      } 
      else 
      {
        result = result + currentChar;
      }
    }
        return result;
  }
  var str = "Test";
  console.log(str);
  var swappedString = swap(str);
  console.log(swappedString);
  