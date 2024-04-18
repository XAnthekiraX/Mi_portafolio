// Animación del fondo de pantalla
var spans = document.querySelectorAll('.bubble');

spans.forEach(function(span) {
    var randomNumber = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
    
    span.style.setProperty('--i', randomNumber);
});

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
});

//boton de empezar
$('.enter').bind('click', function(){
    $('.present').addClass('active');
    $('#inicio').addClass('active');
    $('#sobre-mi').addClass('active');
    $('#proyectos').addClass('active');
    $('#contacto').addClass('active');
});

$('.enter').on('mousedown', function(){
    $('.enter').addClass('active');
});