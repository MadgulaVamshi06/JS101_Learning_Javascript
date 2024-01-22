let arr = [10, 24, 56, 72, -10, -88, 100, 564];
let sum = 0;  
let count = 0;
let avg = 0;
arr.forEach(function(element, index){
  if(index%2==1){
    sum+=element;
    count++;
  }
});
avg = sum/count;
console.log(avg);            