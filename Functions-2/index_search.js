
function lastIndex(str,search) {
    var index = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] == search) {
        index = i;
      }
    }
    return index;
  }
  var str = ['Dodo', 'Tiger', 'Penguin'];
  var search = "Tiger";
  var index = lastIndex(str,search);
  console.log(index);  