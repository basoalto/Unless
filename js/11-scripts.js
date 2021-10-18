const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');


btnFlotante.addEventListener('click', mostrarOcultarFooter);

//contains si esta con algo o no
function mostrarOcultarFooter(){
    if(footer.classList.contains('activo')){
     footer.classList.remove('activo');
     this.classList.remove('activo');
     this.textContent = 'Mas informacion';
    }else{
       footer.classList.add('activo');
       this.classList.add('activo'); 
       this.textContent = 'X Cerrar';
    }
    
    console.log(footer.classList);
}