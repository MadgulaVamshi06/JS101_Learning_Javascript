function twoSumsOneNumberII(one, two, three, four, five) {
    sum1 = one + two;
    sum2 = three + four;
    if (sum1 > five || sum2 > five) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
twoSumsOneNumberII(1, 2, 3, 4, 5);