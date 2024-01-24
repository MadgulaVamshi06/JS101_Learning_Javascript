
function join(str,separator) {
    var bag =""; 
    for (var i = 0; i < str.length; i++) {
      if(i <= str.length-2 && separator !== undefined){
         bag = bag + str[i] + separator;
      }
        else if(i <= str.length-2 && separator == undefined){
          bag = bag + str[i] + ",";
        }
      else {
        bag = bag + str[i];
      }
    }
    return bag;
  }
  var word = ['Fire', 'Air', 'Water'];
  var join1 = join(word);
  var join2 = join(word,"");
  var join3 = join(word,"-");
  console.log(join1);
  console.log(join2);
  console.log(join3);  