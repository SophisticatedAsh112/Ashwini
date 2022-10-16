document.querySelector("button").onclick= function(){
    console.log("function working");
    emailid=document.querySelector("#email").value;
    // # is a character sign used for taking value of id
    console.log("emailid");
    password=document.querySelector("#password").value;
    console.log("password");

    regemail=/^([A-Za-z0-9]([A-Za-z0-9_\.]+)?[A-Za-z0-9])@(([A-Za-z0-9]([A-Za-z0-9\-]+)?[A-Za-z0-9])\.([A-Za-z]{2,})(\.[A-Za-z]{2,})?)$/

    regpass=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#\-\.\^]).{4,8}$/

    if(!regemail.test(emailid)) // checking that both are same or not
    { 
        errormsg="invalid email id"
    }
    else if(!regpass.test(password))
    {
        errormsg="password is invalid"
    }
    else
    {
        errormsg="valid user"
    }
    document.querySelector(".para").innerHTML="ckecking..."

    setTimeout(function(){
        document.querySelector(".para").innerHTML=errormsg;
    },3000)
}
//////////////////////////////////////////////////
document.querySelector(".x2").onchange=function(){
    // we can use onclick also in place of onchange
    console.log("check box working");
    console.log(this);
    console.log(this.checked);
    
ans=(this.ckecked)?"text":"password";
console.log(ans);
document.querySelector("#password").setAttribute("type",ans);
}
