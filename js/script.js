// Animaciones jQuery:
$(document).ready(function() {

   // Animación de desplazamiento entre los enlaces
   $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
   if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
   )  {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         if (target.length) {
            event.preventDefault();
            $('html, body').animate({scrollTop: target.offset().top}, 1000, function() {
               var $target = $(target);
               $target.focus();
               if ($target.is(":focus")) {
                  return false;
               } else {
                  $target.attr('tabindex','-1');
                  $target.focus();
               };
            });
         }
      }
   });

});


// Animación Scroll Top
window.addEventListener('scroll', function () {
   var scroll = document.querySelector('.scrollTop');
   scroll.classList.toggle("active", window.scrollY > 500)
});

function scrollToTop () {
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
}
