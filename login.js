var obj={
    name:"LueurTech",
    password:"1234"
}
var username = document.getElementById("username");
var password = document.getElementById("password");
var sendButton = document.getElementById("sendButton");
var textresult = document.getElementById("textresult");
var gly1 = document.getElementById("gly1");
var result = document.getElementById("result");
sendButton.addEventListener("click",()=>{
    if(username.value.trim() == "" && password.value.trim() ==""){
        textresult.innerHTML=" Username and password must not be empty! ";
        gly1.style.color = "red";
        gly1.classList.add("glyphicon-warning-sign");
        gly1.classList.remove("glyphicon-ok");
        result.style.opacity=1;
    } else if(password.value.trim() != "" && username.value.trim() == "" ){
        textresult.innerHTML=" Username must not be empty! ";
        gly1.style.color = "red";
        gly1.classList.add("glyphicon-warning-sign");
        gly1.classList.remove("glyphicon-ok");
        result.style.opacity=1;
    }else if(username.value.trim() != "" && password.value.trim() =="" ){
        textresult.innerHTML=" Password must not be empty! ";
        gly1.style.color = "red";
        gly1.classList.add("glyphicon-warning-sign");
        gly1.classList.remove("glyphicon-ok");
        result.style.opacity=1;
    }else{
        if(username.value.trim() == obj.name && password.value.trim() == obj.password){
            textresult.innerHTML = " Login successfull! ";
            gly1.style.color = "green";
            gly1.classList.remove("glyphicon-warning-sign");
            gly1.classList.add("glyphicon-ok");
            result.style.opacity=1;
            username.value = "";
            password.value = "";
        }else{
            textresult.innerHTML=" Incorrect username or password! ";
            gly1.style.color = "red";
            gly1.classList.add("glyphicon-warning-sign");
            gly1.classList.remove("glyphicon-ok");
            result.style.opacity=1;
            username.value = "";
            password.value = "";
        }
    }
});
gly.addEventListener("click",()=>{
    document.getElementById("result").style.opacity=0;
})
document.getElementById("gly2").addEventListener("click",()=>{
    if(password.type == "password"){
        password.type="text";
        document.getElementById("gly2").classList.remove("glyphicon-eye-close");
        document.getElementById("gly2").classList.add("glyphicon-eye-open");
    }else{
        password.type="password";
        document.getElementById("gly2").classList.remove("glyphicon-eye-open");
        document.getElementById("gly2").classList.add("glyphicon-eye-close");
    }
});