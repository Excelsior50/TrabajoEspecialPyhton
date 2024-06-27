let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");


const username = document.getElementById('username')
const password = document.getElementById('password')
const correo = document.getElementById('correo')

signIn.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value 
    }
    console.log(data)
})

signUp.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        correo: correo.value,
        password: password.value 
    }
    console.log(data)
})


signIn.onclick=function(){
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
    document.getElementById("formulario").reset();
}

signUp.onclick=function(){
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
    document.getElementById("formulario").reset();
}
