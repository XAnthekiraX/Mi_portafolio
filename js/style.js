// Animación del fondo de pantalla
var spans = document.querySelectorAll('.bubble')
spans.forEach(function(span) {
    var randomNumber = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
    
    span.style.setProperty('--i', randomNumber);
});

// Seleccionar todos los elementos con la clase .line
var nav = document.querySelectorAll('.line');

// Iterar sobre cada elemento .line
for (var i = 0; i < nav.length; i++) {
    // Agregar una clase dinámica con el índice aumentado en 1
    nav[i].classList.add('opt' + (i + 1));
}


//boton para cambiar de banco a negro
$('.black-light').bind('click', function() {
    $('.black-light').toggleClass('active1');
    $('.circle').toggleClass('active1');
    $('.container').toggleClass('active');
    $('.present').toggleClass('active2');
    $('.bubble').toggleClass('active');
    $('.text-prs').toggleClass('active');
    $('.nav-opt').toggleClass('active');
    $('.text').toggleClass('active');
    $('.present2').toggleClass('active');
    $('#inicio').toggleClass('active');
    $('#sobre-mi').toggleClass('active');
    $('#proyectos').toggleClass('active');
    $('#contacto').toggleClass('active');
    $('.about').toggleClass('active');
    $('.card').toggleClass('active');
    $('.txt-skill').toggleClass('active');
    $('.skill-lv1').toggleClass('active');
    $('.skill-lv2').toggleClass('active');
    $('.skill-lv3').toggleClass('active');
    $('.blur-wt').toggleClass('active');
    $('.project').toggleClass('active');
    $('.pj-txt').toggleClass('active');
    $('.icons').toggleClass('active');
    $('.ico svg').toggleClass('active');
    $('.ico li').toggleClass('active');
});

//boton de empezar
$('.enter').bind('click', function(){
    $('.present').addClass('active');
    $('.present2').addClass('active2');
});

$('.enter').on('mouseenter', function(){
    $('.enter').addClass('active');
});

$('.enter').on('mouseleave', function(){
    $('.enter').removeClass('active');
});

$('.nav-opt').on('click', function() {
    // Remover la clase 'select' de todos los elementos
    $('.nav-opt').removeClass('select');
    // Añadir la clase 'select' solo al elemento clickeado
    $(this).addClass('select');
});


// Asigna un manejador de eventos a cada elemento y actualiza las clases según el elemento activo
$('#inicio, #sobre-mi, #proyectos, #contacto').on('mouseenter', function() {
    // Remueve la clase 'select' de todos los elementos
    $('.opt1, .opt2, .opt3, .opt4').removeClass('select');
    
    // Añade la clase 'select' basado en el ID del elemento que disparó el evento
    if (this.id === 'inicio') {
        $('.opt1').addClass('select');
    } else if (this.id === 'sobre-mi') {
        $('.opt2').addClass('select');
    } else if (this.id === 'proyectos') {
        $('.opt3').addClass('select');
    } else if (this.id === 'contacto') {
        $('.opt4').addClass('select');
    }
});

$('.about').bind('click', function() {
    $('.about').toggleClass('press');
    $('.skill').toggleClass('about-more');
});

$('.hover').on('mouseenter', function() {
    $('.pj-txt').addClass('ani');
    $('.icons').addClass('ani');
    $('.blur-bl').addClass('active');
    $('.blur-wt').addClass('blur');
});

$('.hover').on('mouseleave', function() {
    $('.pj-txt').removeClass('ani');
    $('.icons').removeClass('ani');
    $('.blur-bl').removeClass('active');
    $('.blur-wt').removeClass('blur');
});


//Enfoque de cabecera
// Selecciona todos los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Agrega un evento de clic a cada enlace interno
    anchor.addEventListener('click', function (e) {
        // Evita el comportamiento predeterminado de la navegación
        e.preventDefault();
        
        // Obtiene el destino del enlace interno
        const target = document.querySelector(this.getAttribute('href'));

        // Calcula la posición del destino relativa a la parte superior del documento
        const offsetTop = target.offsetTop;

        // Desplaza la página para que el destino esté enfocado en la parte superior
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth' // Agrega un desplazamiento suave
        });
    });
});
