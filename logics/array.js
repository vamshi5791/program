var array=[];
var size=Number(prompt("Enter any size:"));
for(i=0;i<size;i++){
    array[i]=Number(prompt(`Enter array elements:${i+1}`));
}
var target=Number(prompt("Enter target:"));
document.write("original array is:" +array+"<br/>");
document.write("target is: "+target+"<br/>")
//function hello(){
    for(i=0;i<array.length;i++){
        for(j=1;j<array.length-1;j++){
        if((array[i]+array[j])===target&&array[i]!==array[j]){
            document.write("indexes are:  "+i+" "+j+"<br/>");
        }
        
        
    }
   
    }
   

//document.write(hello());


