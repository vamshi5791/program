const untilretirement=(birthyear,firstname)=>{
    const age=2037-birthyear;
    const retirement=65-age;
    return `${firstname} retires in  ${retirement} years. ` 
}
console.log(untilretirement(1991,'boby'))
console.log(untilretirement(1998,'swamy'))
console.log(untilretirement(1988,'venky'))

function cutpieces(fruit){
    return fruit*4;
}
function fruiteprocessor(apples,oranges){
    const applepieces=cutpieces(apples);
    const orangepieces=cutpieces(oranges);
    const juice= `juice with  ${applepieces} pieces of apples  
    and ${orangepieces} pieces of oranges. `;
    return juice;
}
console.log(fruiteprocessor(3,4))