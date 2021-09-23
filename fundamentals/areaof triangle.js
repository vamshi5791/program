const Base =prompt('Enter Base of a triangle:')
const height=prompt('Enter height of a triangle')
const area=Base*height/2;
console.log( 'area of triangle is'+area)



const side1=parseInt(prompt('Enter side1'));
const side2=parseInt(prompt('enter side2'));
const side3=parseInt(prompt('Enter side3'));
const s=(side1+side2+side3)/2;//s=semiperimeter
const areavalue=Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
console.log('area of triangle with knowing of all sides is'+areavalue)