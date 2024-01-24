function patternPrinting3(N){
    for(i=0;i<N;i++){
        var bag = "";
        for(j=0;j<N;j++){
            if(i === 0||i === N-1){
                bag = bag + "*" + " ";
            }
            else{
                if(j === N - 1){
                bag = bag + "*" + " ";
                }else{
                    bag = bag + " " + " ";
                }
            }
        }
        console.log(bag);
    }
}
patternPrinting3(5);