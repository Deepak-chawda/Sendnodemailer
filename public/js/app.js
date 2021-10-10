console.log("hello")
const formContainer = document.querySelector(".form-container")
let firstMail = document.getElementById("first-mail")
let firstPass = document.getElementById("first-pass")
let subject = document.getElementById("Subject")
let text = document.getElementById("text")
let secondMail = document.getElementById("second-mail")

formContainer.addEventListener('submit',(e)=>{
    e.preventDefault();
    let formData ={
        fmail : firstMail.value,
        fpass : firstPass.value,
        sub : subject.value,
        mtext : text.value,
        secmail : secondMail.value
    }
    // console.log(formData)
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/")
    xhr.setRequestHeader("content-type" , "application/json");
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == "success"){
             alert('Email send')
             firstMail.value = " ";
             firstPass.value = null;
             subject.value = " ";
             text.value = " ";
             secondMail.value = " ";
    }else{
        alert("somethin is wrong!")
    }
}
xhr.send(JSON.stringify(formData))
})
