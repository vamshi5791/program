function createperson(){
    var person={};
    person.name="vamshi";
    person.designation="js developer";
    person.phno=76696965;
    return person;
}
var v1=(createperson());

function createperson2(){
    var person={
        name:"vamshi1",
        salary:100000,
        age:24,
        designation:"devloper"

    };
    return person;
}
 v2=createperson2();
 //object creation using constructor:
 function person(){
     this.name="venkatesh";
     this.salary=2900000
     this.designation="devops";
 }
 v4=new person();