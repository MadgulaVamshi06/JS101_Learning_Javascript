function nestedReversePattern(num) {
    for(i=0;i<num;i++){
        var bag="";
        for(j=num;j>0;j--){
            bag = bag + j + " ";
        }
        console.log(bag);
    }
}
nestedReversePattern(4);