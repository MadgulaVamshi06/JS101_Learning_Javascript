
function slicing(arr,start,end){
    var arr2=[];
    
    if (start == undefined && end == undefined){
      return arr;
    }
      else if (start<0){
        start=arr.length+start;
        end = arr.length;
      }
    else if(end==undefined){
      end=arr.length;
    }
    else if (end<0){
      end=arr.length+end;
    }
    
    for(var i=start;i<end;i++){
      arr2.push(arr[i]);
    }
    return arr2;
  }
  var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
  console.log(slicing(animals,2));
  console.log(slicing(animals,2,4));
  console.log(slicing(animals,1,5));
  console.log(slicing(animals,-2));
  console.log(slicing(animals,2,-1));
  console.log(slicing(animals));