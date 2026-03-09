function login(){

let user = document.getElementById("user").value;
let pass = document.getElementById("pass").value;

if(user === "admin" && pass === "1234"){

document.getElementById("loading").classList.add("active");

setTimeout(()=>{

localStorage.setItem("usuario",user);
window.location.href="index.html";

},2000);

}else{

document.getElementById("error").innerText="Datos incorrectos";

}

}


function verPeli(nombre){

localStorage.setItem("pelicula",nombre);
window.location.href="ver.html";

}


function buscar(){

let input = document.getElementById("buscar").value.toLowerCase();
let peliculas = document.querySelectorAll(".movie");

peliculas.forEach(peli=>{

let titulo = peli.innerText.toLowerCase();

if(titulo.includes(input)){
peli.style.display="block";
}else{
peli.style.display="none";
}

});

}


function cerrarSesion(){

localStorage.removeItem("usuario");
window.location.href="login.html";

}


const peliculas={

"Avatar":{
video:"5PSNL1qE6VY",
ano:"2009",
desc:"Un ex marine llega al planeta Pandora y termina defendiendo a los Na'vi."
},

"Joker":{
video:"zAGVQLHvwOY",
ano:"2019",
desc:"Arthur Fleck pierde la cordura y se convierte en el Joker."
},

"Avengers":{
video:"TcMBFSGVi1c",
ano:"2019",
desc:"Los Avengers intentan revertir el desastre causado por Thanos."
},

"Spider-Man":{
video:"JfVOs4VSpmA",
ano:"2021",
desc:"Peter Parker enfrenta villanos de otros universos."
},

"Batman":{
video:"mqqft2x_Aa4",
ano:"2022",
desc:"Batman investiga una serie de asesinatos cometidos por el Acertijo en Gotham."
},

"Matrix":{
video:"vKQi3bBA1y8",
ano:"1999",
desc:"Un hacker descubre que el mundo es una simulación controlada por máquinas."
},

"John Wick":{
video:"2AUmvWm5ZDQ",
ano:"2014",
desc:"Un ex asesino regresa al mundo del crimen tras un ataque personal."
},

"Mad Max":{
video:"hEJnMQG9ev8",
ano:"2015",
desc:"Max ayuda a Furiosa a escapar de un tirano en un mundo postapocalíptico."
}

};


function cargarPelicula(){

let peli=localStorage.getItem("pelicula");

let player=document.getElementById("player");
let titulo=document.getElementById("tituloPeli");
let ano=document.getElementById("anoPeli");
let desc=document.getElementById("descPeli");

if(!player) return;

if(peliculas[peli]){

player.src="https://www.youtube.com/embed/"+peliculas[peli].video;
titulo.innerText=peli;
ano.innerText="Año: "+peliculas[peli].ano;
desc.innerText=peliculas[peli].desc;

}

else if(series[peli]){

player.src="https://www.youtube.com/embed/"+series[peli].video;
titulo.innerText=peli;
ano.innerText="Serie - "+series[peli].ano;
desc.innerText=series[peli].desc;

}

}


const recomendaciones=[

{
nombre:"Avatar",
img:"https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg"
},

{
nombre:"Matrix",
img:"https://image.tmdb.org/t/p/w500/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg"
},

{
nombre:"Mad Max",
img:"https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg"
},

{
nombre:"John Wick",
img:"https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg"
}

];


function cargarRecomendadas(){

let contenedor=document.getElementById("recomendadas");

if(!contenedor) return;

recomendaciones.forEach(peli=>{

contenedor.innerHTML+=`
<div class="movie">
<img src="${peli.img}" onclick="verPeli('${peli.nombre}')">
<p>${peli.nombre}</p>
</div>
`;

});

}

const series={

"Stranger Things":{
video:"b9EkMc79ZSU",
ano:"2016",
desc:"Un grupo de niños en Hawkins descubre experimentos secretos y una dimensión llamada Upside Down."
}

};

function cargarUsuario(){

let usuario=localStorage.getItem("usuario");
let espacio=document.getElementById("usuarioNombre");

if(usuario && espacio){
espacio.innerText="👤 "+usuario;
}

}


window.onload=function(){

cargarUsuario();
cargarRecomendadas();
cargarPelicula();

};