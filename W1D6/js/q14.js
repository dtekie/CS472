

console.log("hello Q14");
window.onload = function(){
    const loginForm = document.getElementById("loginForm");
    loginForm.onsubmit=function(event){
        event.preventDefault();
        const emailtxt = document.getElementById("txtEmailId");
        const passwordtxt = document.getElementById("txtEmailId");
        const email = document.getElementById("txtEmailId").value;
        const password = document.getElementById("txtEmailId").value;

        console.log(`The email is ${email}`)
        console.log(`The email is ${password}`)


    }
};