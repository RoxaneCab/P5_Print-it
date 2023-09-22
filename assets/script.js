// ____BASE____

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// ____SLIDE____

// Défini nb de slide par slideNumber / const car ne va pas se modifier / utilise slides défini plus haut / utilise lenght pour définir la taille par rapport à slides 
const slideNumber = slides.length;

// Défini position / let car va se modifier (de 0 à 1 ect) avec un event (ex: event = slideNumber -1)
let position = 0;

// ____ARROW____

// Arrows / const car ne va pas se modifier, 

const left = document.querySelector('.arrow_left'); 
const right = document.querySelector('.arrow_right');

// Event first try, mb w/ an if and else (ex: if position = 0 add 1, else add 1 (++) ??)
left.addEventListener("click", function (){


});



right.addEventListener("click", function (){

});






// ____CAROUSSEL____

// créer function caroussel (image à afficher/ imgNow = slideNumber + position)
// 2 const, imgNow et ?? pour aller chercher l'image (querySelector)




