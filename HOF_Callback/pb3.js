var arr = [3,4,5,6,7];
var bag = "";
var output = arr.forEach(function(element,index){
  if(index%2==0){
    bag = bag + element;
    return bag;
  }
  else{
   return bag = bag + " " + "-" + " ";
  }
});
console.log(bag);