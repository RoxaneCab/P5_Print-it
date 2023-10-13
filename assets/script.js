// ____BASE____

const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// ____SLIDE____
const slideNumber = slides.length;
let position = 0;

// ____ARROW____
const left = document.querySelector('.arrow_left');
left.addEventListener("click", function () {
	if (position == 0) {
		position = slideNumber - 1;
	}
	else {
		position--;
	}
	createCaroussel(position);
	updateDot();
});


const right = document.querySelector('.arrow_right');
right.addEventListener("click", function () {
	if (position == slideNumber - 1) {
		position = 0;
	} else {
		position++;
	}
	createCaroussel(position);
	updateDot();
});


// ____CAROUSSEL____
createCaroussel(position)

function createCaroussel(position) {			

	const element = slides[position];
	const img = document.querySelector(".banner-img");
	img.setAttribute("src", "./assets/images/slideshow/" + element.image);

	const p = document.querySelector(".banner-txt");
	p.innerHTML = element.tagLine;
}


// ____DOTS____

//  createDot()  
// function createDot(){
const dots = document.querySelector(".dots")
for (let index = 0; index < slideNumber; index++) {

	let dot = document.createElement("div");
	dot.setAttribute("class", "dot");
	dots.appendChild(dot);
}  // }





// ____UPDATE DOTS____

updateDot()

function updateDot() {
	const listPoints = document.querySelectorAll(".dot");	
	 for (let index = 0; index < listPoints.length; index++) {
	 
	  const dot = listPoints[index];
	  if (index == position){
		  dot.classList.add('dot_selected');		
	}
	else{
	  dot.classList.remove('dot_selected');	 
	}	  
	  }  
  }