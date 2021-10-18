const enlace = document.createElement('a');

//agregandole el texto
enlace.textContent = 'Perfil';

//agregando href
enlace.href = '/nuevo-enlace';
enlace.onclick = mifuncion;

//seleccionar navegacion
const navegacion = document.querySelector('.navegacion');
navegacion.insertBefore(enlace, navegacion.children[0]);

function mifuncion(){
    alert('Aceptas los terminos de que eres imbecil')
}

//Crear un Card

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Yoga';
parrafo1.classList.add('categoria','concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Dos veces por semana (duracion de 1 hora por clase)'
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$2.000';
parrafo3.classList.add('precio');

//crear div con la clase de info
const info  = document.createElement('div');
info.classList.add('info');

//agregar parrafos
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);
//crear la imagen 
const imagen = document.createElement('img');
imagen.src = 'img/yoga.jpg';

//Crear la clase Card
const card = document.createElement('div');
card.classList.add('card');

//asignar la imagen y el info al div padre
card.appendChild(imagen);
card.appendChild(info);

//insertar en el html
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);

//Array para busquedas
const ciudades = [
    { nombre: 'Concepcion', disciplina: 'Boxeo', lugar: 'plaza za', horario: '21:00'},
    { nombre: 'Valdivia', disciplina: 'Calistenia', lugar: 'plaza ze', horario: '12:00'},
    { nombre: 'Santiago', disciplina: 'Yoga', lugar: 'plaza zi', horario: '13:00'},
    { nombre: 'Chillan', disciplina: 'Definicion', lugar: 'plaza zo', horario: '14:00'},
    { nombre: 'San Carlos', disciplina: 'Danza', lugar: 'plaza zu', horario: '15:00'},
    { nombre: 'Puerto Montt', disciplina: 'Danza', lugar: 'plaza zaf', horario: '16:00' },
]
let resultado = '';

//eventos en el buscador
const busqueda = document.querySelector('.busqueda');
busqueda.addEventListener('input', (evt)=>{
});
console.log(resultado);


const busqueda = document.querySelector('#formulario');


busqueda.addEventListener('submit', (e)=>{
    
});
