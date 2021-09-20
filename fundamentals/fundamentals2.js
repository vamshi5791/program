var  shyam=30000;
var rajesh=50000;
if(shyam>rajesh){
    console.log(`shyam salary is (${shyam}) greater than rajesh salary(${rajesh})`);
}
else{
    console.log(`rajesh salary is(${rajesh}) greater than  shyam salary (${shyam})`);
}
const csk=(80,107,121)/3;
const mi=(80,107,121)/3;
console.log(csk,mi)
if(csk>mi){
    console.log('csk win the trophy ');
}
else if(mi>csk)
{
console.log('mi wins the trophy:');
}
else if(mi===csk){
    console.log(`both win trophy:`)
}
else{
    console.log(`no one win trophy:`)
}
var bill=275
var tip=bill>=50 && bill<=300?bill*.15:bill*.2;
console.log(`the bill value is${bill} ,the tip given is${tip}
,the total amount is paid by customer is${bill+tip} `)