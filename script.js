document.getElementById("loginForm").addEventListener("submit", function (e) {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  if (!email || !senha) {
    alert("Preencha todos os campos!");
    e.preventDefault();
  }
});

function mostrarEndereco(valor) {
  const campo = document.getElementById("campoEndereco");
  campo.classList.toggle("d-none", valor !== "Entrega");
}
