let nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.add('bg-dark', 'shadow');
  } else {
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