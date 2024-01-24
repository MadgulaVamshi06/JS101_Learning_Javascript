function sumarray(arr){
    var sum = 0;
    for(var i = 0; i<arr.length; i++){
      sum = sum + arr[i];
    }
    return sum;
  }
  function avgarray(arr){
    if(arr.length == 0){
      return 0;
    }
    var a = output ;
    var avg = a/arr.length;
    return avg;
  }
  var arr = [1,2,3,4,5];
  var output = sumarray(arr);
  var avg = avgarray(arr);
  console.log(avg);