let num1=prompt('Enter any number:');
let num2=prompt('Enter any number:');
let min=(num1>num2)?num1:num2;
while(true){
    if(min%num1==0 && min%num2==0){
        console.log(`lcm of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++;
}
