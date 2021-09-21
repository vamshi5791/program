function ran(min,max){
    min=Math.ceil(min);
    max=Math.floor(max);
    return (Math.floor(Math.random()*(max-min+1))+min);
}
//var random=Math.random()*(max-min)+min;
console.log(ran(1,10));
console.log(ran(1,100));