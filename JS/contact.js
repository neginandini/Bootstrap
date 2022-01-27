


let fnamenode = document.getElementById("uname");
let errornode1 = document.getElementById("error1");

let emailnode = document.getElementById("email");
let errornode3 = document.getElementById("error2");

let numbernode = document.getElementById("number");
let errornode4 = document.getElementById("error4");

let passwordnode = document.getElementById("password");
let errornode5 = document.getElementById("error5");


function validate1()
{
    errornode1.innerHTML="";
   let firstname = fnamenode.value;
    if( firstname=="")
    {
       errornode1.innerHTML="This field is required";
       fnamenode.style.border=" 2px solid rgb(233, 111, 111)";
       return false;
    }
    else if(firstname.length<2)
    {
        errornode1.innerHTML="The length must be greater than 2";
        fnamenode.style.border=" 2px solid rgb(233, 111, 111)";
        return false;
    }
    else{
        fnamenode.style.border="2px solid rgb(115, 233, 111)";
        return true;
    }
}


function validate2()
{
    errornode3.innerHTML="";
    
   let email = emailnode.value;
   let ss = email.substring(email.indexOf("@")+1);
    if( email=="")
    {
       errornode3.innerHTML="This field is required";
       emailnode.style.border=" 2px solid rgb(233, 111, 111)";
       return false;
    }
    else if(!email.includes("@") || ss=="")
    {
        errornode3.innerHTML="Put valid email id";
        emailnode.style.border=" 2px solid rgb(233, 111, 111)";
        return false;
    }

    else{
        emailnode.style.border="2px solid rgb(115, 233, 111)";
        return true;
    }
}

function validate3()
{
    errornode5.innerHTML="";
    
   let password = passwordnode.value;
   console.log(password);
   let regexp=new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])");

  
    if( password=="")
    {
       errornode5.innerHTML="This field is required";
       passwordnode.style.border=" 2px solid rgb(233, 111, 111)";
       return false;
    }
    else if(regexp.test(password)==false)
    {
        errornode5.innerHTML="password should be alphanumeric with atleast one special symbol @#$%^&";
        passwordnode.style.border=" 2px solid rgb(233, 111, 111)";
        return false;
    }

    else{
        passwordnode.style.border="2px solid rgb(115, 233, 111)";
        return true;
    }
}


function validate4()
{
    errornode4.innerHTML="";
   let num = numbernode.value;
    if( num=="")
    {
       errornode4.innerHTML="This field is required";
       numbernode.style.border=" 2px solid rgb(233, 111, 111)";
       return false;
    }
    else if(isNaN(num))
    {
        errornode4.innerHTML="Age should be in digits";
        numbernode.style.border=" 2px solid rgb(233, 111, 111)";
        return false;
    }
    else if(num.length<10 || num.length>10)
    {
        errornode4.innerHTML="Put Valid Phone Number";
        numbernode.style.border=" 2px solid rgb(233, 111, 111)";
        return false;
    }
    else{
        numbernode.style.border="2px solid rgb(115, 233, 111)";
        return true;
    }
}





function validateForm()
{ 
    let state1 = validate1();
    let state2 = validate2();
    let state3 = validate3();
    let state4 = validate4();
   

    if(state1 && state2 && state3 && state4 )
    {
        window.alert("Successfully Submmited..!");
    }
    else{
        return(state1 && state2 && state3 && state4); 
    }
}