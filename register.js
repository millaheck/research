// registro.js
document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registro-form");

    registroForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const novoUsername = document.getElementById("novo-username").value;
        const novoPassword = document.getElementById("novo-password").value;

        // Simulação de registro (substitua isso por uma lógica real)
        const novoUsuario = { username: novoUsername, password: novoPassword };
        usuariosFicticios.push(novoUsuario);

        alert("Conta criada com sucesso!");
        // Redirecionar ou realizar outras ações após o registro bem-sucedido
    });
});
