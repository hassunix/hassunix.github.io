const imageArray = [
	"https://i.postimg.cc/HnwmyDwr/IMG-4255.jpg",
"https://i.postimg.cc/4ykZyN9C/IMG-4256.jpg",
"https://i.postimg.cc/pVzR78wP/IMG-4257.jpg",
"https://i.postimg.cc/L6VR4S47/IMG-4258.jpg",
"https://i.postimg.cc/TYxfX1xg/IMG-4259.jpg",
"https://i.postimg.cc/2S8YVtV5/IMG-4260.jpg",
"https://i.postimg.cc/Qt5G2Gnf/IMG-4261.jpg",
"https://i.postimg.cc/NjJcTxHk/IMG-4262.jpg",
"https://i.postimg.cc/NFcqYJ3B/IMG-4263.jpg"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}