const acordeon = document.getElementsByClassName('container-week');

for (i=0; i<acordeon.length; i++) {
  acordeon[i].addEventListener('click', function () {
    this.classList.toggle('activo')
  })
}