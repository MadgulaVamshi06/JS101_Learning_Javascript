function difference (num1 , num2 ){
    var diff = num1 - num2;
   return diff;
 }
 function absolute (a){
   if(a<0){
     a = a*(-1);
   }
   return a;
 }
 
 var output1 = difference(1,8);
 var output2 = absolute(output1);
 console.log(output2)
 