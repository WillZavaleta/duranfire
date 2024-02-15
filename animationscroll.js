window.addEventListener('scroll', function()  {
    //let elements = document.getElementsByClassName('nav-main');
    let elementslinea = document.getElementsByClassName('tituloborde');
    let elements = document.querySelectorAll('.nav-main ul li a');
    let objeto = document.getElementsByClassName('animarobjeto');
    let btncontacto = document.getElementById('btnanimar');
    
    //animación para que el menú cambie de color
    let header = document.getElementById('navbar');
    let windowPosition = window.scrollY > 300;
    header.classList.toggle('menuvisible', windowPosition);

    
          //animación para que las opciones del menu cambien de color
          for(var i = 0; i < elements.length; i++) {
          var element = elements[i];          
  
          if(screen.width > 850){
            if(window.scrollY > 300) {            
              // element.style.transitionDelay = i/3 + 's';
               element.classList.add('opcionesmenu');
               
             } else {
               element.classList.remove('opcionesmenu');
             }
          }     
  
        }

        //Animación para los titulos de seccion
        let screenSize = window.innerHeight;

        for(var i = 0; i < elementslinea.length; i++) {
          var element2 = elementslinea[i];          
  
          if(element2.getBoundingClientRect().top < screenSize - 100) {            
            element2.classList.add('visible');
            
          } else {
            element2.classList.remove('visible');
          }
  
        }

        //Animación para cualquier objeto

        for(var i = 0; i < objeto.length; i++) {
          var element3 = objeto[i];          
  
          if(element3.getBoundingClientRect().top < screenSize) {            
            element3.classList.add('visible');
            
          } else {
            element3.classList.remove('visible');
          }
  
        }

        //Animación para botón de contacto
    
        if(btncontacto.getBoundingClientRect().top < screenSize - 100) {            
          btncontacto.classList.add('animated', 'rubberBand');
          
        } else {
          btncontacto.classList.remove('animated', 'rubberBand');
        }
  });