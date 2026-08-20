function mostrarMensagem () {
    const msg = document.getElementById ("mensagem")
    msg.style.display = "block";
    setTimeout(function() {
        msg,StylePropertyMap.display = "none";
    }, 3000);
}

function register() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    alert("Cadastrado!");
}

function login() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    const savedUser = localStorage.getItemetItem("user", user);
    const savedPass = localStorage.getItemetItem("pass", pass);
if (user === savedUser && pass === savedPass) {
    alert("Login ok!");
} else {
    alert("Falhou");
    }
}

function logout() {
    document.getElementById("home").style.display = "none";
    document.getElementById("login").style.display = "block";
}