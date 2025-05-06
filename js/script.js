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


