function  register(){
    
var name = document.getElementById("r-name")
var email = document.getElementById("r-email");
var password = document.getElementById("r-password");

var users = localStorage.getItem("users")

if(users){
    users = JSON.parse(users)
    console.log("if running")
}else {
    console.log("else running")
    users = []
}

userObject = {
    email:email.value,
    password:password.value
}

console.log(userObject,"user")

users.push(userObject)
console.log(users)
localStorage.setItem("users",JSON.stringify(users))


name.value = ""
email.value = ""
password.value = ""






}
