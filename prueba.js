window.addEventListener('scroll', function(){

    const header = document.querySelector('.Navbar');
        if(window.scrollY > 0){

            header.classList.add('Navbar-fixed');
            
        }  else {

            header.classList.remove('Navbar-fixed');
        }

});

document.addEventListener("DOMContentLoaded", function() {
  const up = document.getElementById("subir");
  const img = document.getElementById("ImgSubida");

  up.addEventListener("change", (event) => {

  const archivo = event.target.files[0];
  const direct = URL.createObjectURL(archivo);

  img.src = direct;
s
  });
});


function popup(){

  const popup = document.querySelector('.popup-settings'); 

  popup.classList.toggle('yes')

}

function darkmode(){

  const navbardark = document.querySelector('.Navbar'); 
  const pagedark = document.querySelector('body');

  navbardark.classList.toggle('Navbar-dark');
  pagedark.classList.toggle('body-dark');

}



