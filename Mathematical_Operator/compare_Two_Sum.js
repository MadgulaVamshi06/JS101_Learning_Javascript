function twoSumsOneNumberII(one, two, three, four, five, six) {
    sum1 = one + two;
    sum2 = four + five;
    if (sum1 > three && sum2 > six) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
compareFourNumbers(1, 2, 3, 4, 5, 6);