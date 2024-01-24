var array = [1, 2, 3];
function includes(arr,search){
  var flag = false;
  for(var i=0;i<arr.length;i++){
    if(arr[i]==search){
      flag = true;
      break;
    }
  }
  return flag;
}
console.log(includes(array,1));
console.log(includes(array,6));