function checkPalindrome(N, str) {
    var reverse = "";
    var str1 = "";
    for (i = N - 1; i >= 0; i--) {
        reverse = reverse + str[i];
    }
    for (i = 0; i < N; i++) {
        str1 = str1 + str[i];
    }

    if (reverse === str1) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
checkPalindrome(5, "level");
