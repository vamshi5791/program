class mobile{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    calling() {
        console.log('you can call to swetha');
    }
    game(){
        console.log('you can paly pubg:');
    }
    setName(newName){
        this.name=newName;
    }
}

let redmi=new mobile('apple','silver');

console.log(redmi.name);
console.log(redmi.color);
redmi.calling();
redmi.game();
redmi.setName("samsung js");
console.log(redmi.name);