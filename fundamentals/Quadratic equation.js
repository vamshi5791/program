let root1,root2;
let a=prompt('enter first number:');
let b=prompt('Enter second number:');
let c=prompt('Enter third number:');

let discriminant=b*b-4*a*c;
if(discriminant>0){
    root1=(-b+Math.sqrt(discriminant))/(2*a);
    root2=(-b-Math.sqrt(discriminant))/(2*a);
    console.log(`the roots of quadratic equation are ${root1},${root2}`);
}
else if(discriminant==0){
    root1=root2=-b/(2*a);
    console.log(`roots of quadratic equation are ${root1},${root2}`);
}
else{
   // let realpart=(-b/(2*a))+(i(Math.sqrt(-discriminant))/(2*a));
   // let imgpart=(-b/(2*a))-(i(Math.sqrt(-discriminant))/(2*a));
    let realpart=(-b/(2*a)).toFixed(2);
   // let imgpart=(-b/(2*a)).toFixed(2);
   let imgpart=(Math.sqrt(-discriminant)/(2*a)).toFixed(2);
    console.log(`roots of quadratic equation are ${realpart}+${imgpart}i and ${realpart}-${imgpart}i`);
}