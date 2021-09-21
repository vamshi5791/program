let num=prompt('Enter any number:');
let n1=0,n2=1, nn;
console.log('fibonacci series is:');
console.log(n1);
console.log(n2);
nn=n1+n2;
while(nn <= num){
    console.log(nn);
    n1=n2;
    n2=nn;
    nn=n1+n2;
}

