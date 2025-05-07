document.addEventListener('click', function(event) {
    const navbar = document.getElementById('navbarNav');
    const toggler = document.querySelector('.navbar-toggler');

    if(!navbar.contains(event.target) && !toggler.contains(event.target)){
        if (navbar.classList.contains('show')) {
            navbar.classList.remove('show');
          }
    }
})

let textos = [];
let container;

document.addEventListener('DOMContentLoaded', () => {
  container = document.querySelector('.habilidades-box');
  textos = Array.from(container.querySelectorAll('div[id^="texto-"]'));
});

function mostrarTexto(img) {
  const indice = parseInt(img.dataset.indice, 10);
    document.getElementById('descr').style.display = 'none'

  textos.forEach(div => {
    div.style.display = 'none';
    const p = div.querySelector('p');
    if (p) p.style.fontSize = '';
  });

  
  const divAtiva = textos[indice];
  divAtiva.style.display = 'block';
}

function scrollParaSection(sectionId){
    const elemento = document.getElementById(sectionId);
    elemento.scrollIntoView({behavior: 'smooth'});
}

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("toggleDark");
  const body = document.body;
  const navLinks = document.querySelectorAll('.navlink');

  toggle.addEventListener("click", function () {
    body.classList.toggle("light-mode");

    const cor = body.classList.contains("light-mode") ? 'black' : 'white';

    toggle.classList.toggle("fa-sun");
    toggle.classList.toggle("fa-moon");

    // Mudar cor dos links
    navLinks.forEach(link => {
      link.style.color = cor;
    });

   document.getElementById('botao-projetos').style.color = cor;
  });
});

