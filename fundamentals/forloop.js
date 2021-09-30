let subjects=[' maths',' science','english'];
let marks=new Array();
let num1;
for(i=0;i<subjects.length;i++){
    num1=parseFloat(prompt('enter your subject marks:'+subjects[i]));
    marks[i]=num1;
}
for(m in marks){
    
        
    document.write(marks[m]+" ");
}
