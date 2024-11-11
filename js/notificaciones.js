function toggleMenu() {
    var menu = document.getElementById('notificaciones-menu');
    menu.classList.toggle('show');
  }




  window.addEventListener('focus', function () {
    document.body.style.overflow = 'hidden'; // Impide que la pantalla se desplace cuando se enfoca el campo
  });
  
  window.addEventListener('blur', function () {
    document.body.style.overflow = ''; // Restaura el comportamiento cuando se pierde el enfoque
  });