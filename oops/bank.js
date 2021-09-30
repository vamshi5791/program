class bank{
    constructor(name,account_no,account_type){
        var name=name;
        var account_no=account_no;
        var account_type=account_type;
        this.getname=()=>{
            return name;
        }
       this. getaccount_no=()=>{
            return account_no;
        }
        this.getaccount_type=()=>{
            return account_type;
        }
        var setname = (newName) => {
             name=newName;
        }
        this.setaccount_no=()=>{
            account_no= Math.floor(Math.random()*900000000);
        }
        this.setaccount_type=(account_type)=>{
            account_type=account_type;
        }
    }
    
}
let vamshi=new bank("vamshikrishna",null,"saving");
let swetha=new bank("swethavamshi",null,"current");
/*console.log(vamshi.getname());
(vamshi.setaccount_no());
console.log(vamshi.getaccount_no());
console.log(swetha.getname());
(swetha.setaccount_no());
console.log(swetha.getaccount_no());
console.log(vamshi.name);
vamshi.setname("vamshireddy");
console.log(vamshi.getaccount_no());*/
vamshi.setaccount_no();
console.log(vamshi.getaccount_no());
vamshi.account_no=12345;
console.log(vamshi.getaccount_no());
//vamshi.setname("vamshikumar");
//vamshi.setname("vamshikrishna");
console.log(vamshi.getname());
//console.log(getname());
//console.log(vamshi.getaccount_type());
