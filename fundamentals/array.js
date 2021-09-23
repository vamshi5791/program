let calctip=function(bills){
    return bill>=50 &&bill<=300?bill*0.15:bill*0.2;
}
let bills=[22,30,46,688,300,344,222,243]
let tips=[];
let total=[];
for(i=0;i<bills.length;i++){
    calctip(bills[i]);
}