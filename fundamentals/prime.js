let min=prompt('Enter any number');
let max=prompt('Enter any number');
for(i=min;i<=max;i++){
    let count=0;
    for(j=2;j<i;j++){
        if(i%j===0){
            count++;
            break;
        }
    }
    if(i>1 &&count===0){
        console.log(i);
    }
}