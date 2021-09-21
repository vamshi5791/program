let num=prompt('Enter any number:');
let count=0;
for(i=2;i<=num;i++){
    if(num%i===0){
        count++;
    }
}
if(count==1){
    console.log(`${num} is prime number:`);
}
else{
    console.log(`${num} is not a prime number`);
}