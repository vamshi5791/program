const calcamplitude=function(t1,t2){
    const temps=t1.concat(t2);
    console.log(temps);
    let max=temps[0];
    let min=temps[0];
    for(let i=0;i<temps.length;i++){
        if(typeof temps[i]!= 'number') continue;
        if(temps[i]>max)  max=temps[i];
        if(temps[i]<min)  min=temps[i];
    }
    console.log(max);
    console.log(min);
    console.log(`amplitude of temperature is ${max-min}`);
}

calcamplitude([3,8,9,'error',3,1],[98,34,46])




const fun=function(temps){
    let str='';
    for(i=0;i<temps.length;i++){
        str=str+`${temps[i]}%c for ${i+1} days...`;
        

    }
    console.log(str);
        
}
fun([23,56,34]);