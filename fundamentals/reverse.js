
function strreverse(){
    let newstring="";
    for(i=string.length-1;i>=0;i--){
          newstring=newstring+string[i];
    }
    return newstring;
}
let string=prompt('Enter any string:');
console.log(strreverse(string));
