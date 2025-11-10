

function register() {

    var name = document.getElementById("r-name")
    var email = document.getElementById("r-email");
    var password = document.getElementById("r-password");

    users = localStorage.getItem("users")

    users = getValue()

    userObject = {
        email: email.value,
        password: password.value
    }

    console.log(userObject, "user")

    users.push(userObject)
    console.log(users)
    localStorage.setItem("users", JSON.stringify(users))


    name.value = ""
    email.value = ""
    password.value = ""


}

function getValue() {
    var users = localStorage.getItem("users")

    if (users) {
        users = JSON.parse(users)
        console.log("if running")
    } else {
        console.log("else running")
        users = []
    }
    return users
}







function login() {
    var uEmail = document.getElementById("l-email")
    var upassword = document.getElementById("l-password")
    users = getValue()

    userLogin = {
        email: uEmail.value,
        password: upassword.value
    }
    console.log(users, "users array")
    console.log(userLogin, "object login")
    var emalFlag = false;
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === uEmail.value) {
            emalFlag = true
            break
        }

    }
    if(emalFlag){
            if(users[i].password === upassword.value ){
                console.log("password matched");
                alert("Login Sucessfully");
            }else {
                alert("password is incorrect")
            }
    }
    else{
        alert("Email Not Found")
    }

    uEmail.value = "";
    upassword.value = "";

}





///-hiding entry container and login 


function enter(){
    var entry = document.getElementById("entry")
    entry.style.display = "none"
    var hide  = document.getElementById("hide")
    hide.style.backgroundColor = "aliceblue"
    hide.setAttribute("class","cont")
    var log = document.getElementById("log")
    log.setAttribute("class","hide")
}

//hiding entry container and sigup


function enterLogin() {
    var entry = document.getElementById("entry")
    entry.style.display = "none"
    var hide  = document.getElementById("hide")
    hide.style.backgroundColor = "aliceblue"
    hide.setAttribute("class","cont")
    var sign = document.getElementById("sign")
    sign.setAttribute("class","hide")
}





