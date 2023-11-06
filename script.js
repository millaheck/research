// script.js
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simulação de autenticação (substitua isso por uma lógica real)
        if (username === "usuario" && password === "senha") {
            alert("Login bem-sucedido!");
            // Redirecionar ou realizar outras ações após o login bem-sucedido
        } else {
            alert("Credenciais inválidas. Tente novamente.");
        }
    });
});
const usuariosFicticios = [
    { username: 'usuario1', password: 'senha1' },
    { username: 'usuario2', password: 'senha2' },
    // Adicione quantos usuários fictícios você precisar
  ];
  
