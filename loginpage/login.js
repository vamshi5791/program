function validate(){
    var username=document.getElementById("username").value;
    var possword=document.getElementById("possword").value;
    if(username=="vamshi" &&possword=="vamshi123"){

        alert("login successfully");
        return false;
    }
    else{
        alert("login failed");
    }
}