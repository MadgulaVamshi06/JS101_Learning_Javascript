function reverseArrayTraversal(n, arr) {
    var reverse = "";
    for (var i = n - 1; i >= 0; i--) {
        reverse = reverse + arr[i] + " ";
    }
    console.log(reverse);
}
reverseArrayTraversal(5, [1, 2, 3, 4, 5]);