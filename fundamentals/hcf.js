let num1=prompt('Enter any number:');
let num2=prompt('Enter any number:');
let hcf=0;
for(let i=1;i<=num1 && i<=num2;i++){
    if(num1%i==0 && num2%i==0){
       hcf=i;
    }
}
console.log(`${num1} and ${num2} hcf is:${hcf}`);