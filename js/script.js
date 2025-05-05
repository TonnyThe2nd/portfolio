function scrollToSection(id){
    const section = document.getElementById(id);
    if(section){
        section.scrollIntoView({behavior: 'smooth'});
    }
}
var textos = [pyhonText,javaText, javascriptText, sqlText, csharpText, htmlText, cssText]
function mostrarTexto(indice){
    const javaText = document.getElementById('texto-java');
    const csharpText = document.getElementById('texto-csharp');
    const javascriptText = document.getElementById('texto-javascript');
    const htmlText = document.getElementById('texto-html');
    const cssText = document.getElementById('texto-css');
    const sqlText = document.getElementById('texto-sql');
    const pyhonText = document.getElementById('texto-python');

    let textos = [pyhonText,javaText, javascriptText, sqlText, csharpText, htmlText, cssText]
    for(let i = 0; i< textos.length; i++){
        textos[i].style.display = 'none';
    }
    textos[indice].style.display = 'block'
}