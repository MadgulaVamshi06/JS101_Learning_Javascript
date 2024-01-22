function addNumbers(a, b) {
    var sum = a + b;
    return sum;
  }
  var result = addNumbers(addNumbers(5, 7), 9);
  console.log("The sum of the three numbers is: " + result);