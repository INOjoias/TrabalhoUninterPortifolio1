// Seleciona o botão do menu e o menu lateral
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

// Evento de clique para abrir/fechar o menu
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show"); // adiciona ou remove a classe "show"
});

// Seleciona o botão de tema (claro/escuro)
const temaBtn = document.getElementById("temaBtn");

// Evento para alternar o tema
temaBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark"); // ativa/desativa modo escuro

  // troca ícone (upgrade leve)
  if (document.body.classList.contains("dark")) {
    temaBtn.textContent = "☀️"; // mostra sol no modo escuro
  } else {
    temaBtn.textContent = "🌙"; // mostra lua no modo claro
  }
});

// Evento de envio do formulário
document.getElementById("formContato").addEventListener("submit", function(e) {
  e.preventDefault(); // impede envio real da página

  // Captura os valores dos campos
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  // Expressão regular para validar email
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Verifica se algum campo está vazio
  if (nome === "" || email === "" || mensagem === "") {
    alert("Preencha todos os campos!");
    return;
  }

  // Verifica se o email é válido
  if (!emailValido.test(email)) {
    alert("Digite um email válido!");
    return;
  }

  // Simulação de envio bem sucedido
  alert("Mensagem enviada com sucesso!");

  // Limpa o formulário após envio
  document.getElementById("formContato").reset();
});

// Fecha o menu ao clicar em qualquer link
document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show"); // remove a classe "show"
  });
});