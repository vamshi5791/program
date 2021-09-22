let num=prompt('Enter any number:');
let sum=0;
let temp=num;
while(temp>0){
    let rem=temp%10;
    sum+=rem*rem*rem;
    temp=parseInt(temp/10);
}
if(sum==num){
    console.log(`${num} is an armstrog`);
}
else{
    console.log(`${num} is not an armstrong`)
}