const togglerIcon = document.querySelector('.navbar-toggler-icon');
const nav = document.querySelector('nav');
let menuAberto = false; // Variável para controlar o estado do menu

togglerIcon.addEventListener('click', () => {
  menuAberto = !menuAberto; // Alterna o estado do menu
  nav.classList.toggle('bg-dark', menuAberto);
});

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100 && !menuAberto) {
    // Verifica se o scroll está abaixo de 100 pixels e o menu não está aberto
    nav.classList.add('bg-dark', 'shadow');
  } else {
    // Remove a classe apenas se o scroll estiver acima de 100 pixels ou o menu estiver aberto
    nav.classList.remove('bg-dark', 'shadow');
  }
});




let janela = document.getElementById('janela');
let botaoMostrar = document.getElementById('mostrar-janela');
let botaoFechar = document.querySelector('.fechar');
let navbar = document.querySelector ('.navbar');

botaoMostrar.addEventListener('click', function() {
  event.preventDefault();
  document.body.classList.add('overlay-open'); // Adiciona a classe para aplicar o estilo de fundo escurecido
  janela.style.display = 'block'; // Exibe a janela flutuante
  navbar.style.display = 'none';
});

botaoFechar.addEventListener('click', function() {
  document.body.classList.remove('overlay-open'); // Remove a classe para remover o estilo de fundo escurecido
  janela.style.display = 'none'; // Oculta a janela flutuante
  navbar.style.display = 'block';
  console.log()
});