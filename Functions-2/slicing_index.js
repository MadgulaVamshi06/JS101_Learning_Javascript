
function slicing(str,start,end){
    var str2="";
  
    if (start == undefined && end == undefined){
      return str;
    }
    else if(end==undefined){
      end=str.length;
    }
  
    for(var i=start;i<end;i++){
      str2=str2+str[i];
    }
    return str2;
  }
  var newstr = slicing("mozilla",2);
  console.log(newstr);
  var newstr1 = slicing("mozilla",1,3);
  console.log(newstr1);