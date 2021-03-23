//let arr_main = ["1.jpg", "2.jpg"];
var elementos = [{ img: "assets/images/1.jpg", titulo: "Glamor & Beauty", sub: "AUTUMN COLLECTION 2015" }, { img: "assets/images/2.jpg", titulo: "Avada Fashion", sub: "DISCOVER | TRENDS | ELEGANCE" }];
var sp = 0
let imagenes_galeriaHome = ["assets/images/11.jpg", "assets/images/12.jpg", "assets/images/13.jpg", "assets/images/14.jpg", "assets/images/11.jpg", "assets/images/12.jpg", "assets/images/11.jpg"];
let imagenes_galeriaColecciones = ["assets/images/11.jpg", "assets/images/12.jpg", "assets/images/13.jpg", "assets/images/14.jpg", "assets/images/11.jpg", "assets/images/12.jpg", "assets/images/11.jpg", "assets/images/12.jpg", "assets/images/13.jpg", "assets/images/14.jpg", "assets/images/11.jpg", "assets/images/12.jpg"];
let imagenes_galeriaStudio = ["assets/images/28.png", "assets/images/29.png", "assets/images/30.png", "assets/images/31.png", "assets/images/32.png", "assets/images/33.png", "assets/images/34.png", "assets/images/35.png"];
let imagenes_galeriaServ = ["assets/images/37.png", "assets/images/38.png", "assets/images/39.png", "assets/images/40.png", "assets/images/41.png", "assets/images/42.png"];
let MiniConts = [

	angelina = ["assets/images/20.jpg", "Angelina, Avada"],
	dario = ["assets/images/45.jpg", "Dario Pineda, Themefusion"],

]

/*Empieza Slider
Agarro el array y lo utilizo como limite en el for. Si llega a ese, limite, el contador se resetea 0. Se hace un callback al array con el contador como indice*/
function slider(direc) {
	sp = sp + direc;
	if (sp >= elementos.length) {
		sp = 0;
	}

	let holder = document.getElementById("slider");
	holder.innerHTML = null;
	holder.innerHTML = '<div class="centrado"><h1 class="titulo">' + elementos[sp].titulo + '</h1><button class="boton2">' + elementos[sp].sub + '</button><div class="wrapper"><button id="discover" class="boton3">DISCOVER</button><button id="more-demos" class="boton3">MORE DEMOS</button></div>';
	holder.style.backgroundImage = "url(" + elementos[sp].img + ")";
	document.getElementById("discover").setAttribute("onclick", "location.href = 'colecciones.html';")
	document.getElementById("more-demos").setAttribute("onclick", "location.href = 'https://themeforest.net/item/avada-responsive-multipurpose-theme/2833226?irgwc=1&clickid=xW1SyU2PFxyLTLOwUx0Mo3IWUkE1HF1--xQHVI0&iradid=275988&irpid=1292887&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1292887&utm_medium=affiliate&utm_source=impact_radius';")
}

slider(0);
var timer = setInterval(slider, 100000000000, 1);

let contSliderMini = 0;

function miniSlider() {

	if (contSliderMini === 0) {

		contSliderMini++;

	} else {

		contSliderMini = 0;

	}

	document.getElementById("imgSliderMini").src = MiniConts[contSliderMini][0];
	document.getElementById("nombreMini").innerHTML = MiniConts[contSliderMini][1];


}

var timer2 = setInterval(miniSlider, 1000000000, 1);

/*El setInterval determina que cada 5 segundos cambia el contenido
Termina Slider*/

/*Las funciones de las galerías agarran los arrays respectivos y utilizan el i del for como indice para estos.*/

function galeriaHome() {

	for (i = 0; i < imagenes_galeriaHome.length; i++) {
		document.getElementById("imgHome" + i).setAttribute("src", imagenes_galeriaHome[i]);
	}

}
function galeriaHome2() {
	let galeriafinal = document.getElementById("galerianojarcodeada");
	for (i = 0; i < imagenes_galeriaHome.length; i++) {
		let ligaleria = document.createElement("li");
		let imggaler = document.createElement("img");
		ligaleria.setAttribute("class", "imagengaleria");
		imggaler.setAttribute("id", "imgHome" + i);
		imggaler.setAttribute("class", "picgaleria");
		ligaleria.appendChild(imggaler);
		galeriafinal.appendChild(ligaleria);
	}

}

function galeriaColecciones() {

	for (i = 0; i < imagenes_galeriaColecciones.length; i++) {
		document.getElementById("imgCol" + i).setAttribute("src", imagenes_galeriaColecciones[i]);
	}

}

function galeriaStudio() {

	for (i = 0; i < imagenes_galeriaStudio.length; i++) {
		document.getElementById("imgStudio" + i).setAttribute("src", imagenes_galeriaStudio[i]);
	}

}

// function galeriaServ() {

// 	for (i = 0; i < imagenes_galeriaServ.length; i++) {
// 		document.getElementById("imgService" + i).setAttribute("src", imagenes_galeriaServ[i]);
// 	}

// }

/*Las funciones para cambiar colores chequean que color está activo y en base a eso, lo cambian*/

function cambiarColorHome() {

	if (document.getElementById("seccion2").style.backgroundColor === "" || document.getElementById("seccion2").style.backgroundColor === "rgb(34, 34, 34)") {
		document.getElementById("seccion2").style.backgroundColor = '#344e54';
		document.getElementById("seccion6").style.backgroundColor = '#344e54';
		document.getElementById("seccion9").style.backgroundColor = '#344e54';
		document.getElementById("seccion10").style.backgroundColor = '#344e54';
		console.log("cambio de color")

	} else {

		document.getElementById("seccion2").style.backgroundColor = '#222222';
		document.getElementById("seccion6").style.backgroundColor = '#222222';
		document.getElementById("seccion9").style.backgroundColor = '#222222';
		document.getElementById("seccion10").style.backgroundColor = '#222222';
		console.log("cambio de color 2")

	}

}

function cambiarColorContacto() {

	if (document.getElementById("seccion15").style.backgroundColor === "" || document.getElementById("seccion15").style.backgroundColor === "rgb(34, 34, 34)") {
		document.getElementById("seccion15").style.backgroundColor = '#344e54';
		console.log("cambio de color")

	} else {

		document.getElementById("seccion15").style.backgroundColor = "rgb(34, 34, 34)";
	}

}

// function cambiarColorColecciones() {

// 	if (document.getElementById("seccion18").style.backgroundColor === "" || document.getElementById("seccion18").style.backgroundColor === "rgb(34, 34, 34)") {
// 		document.getElementById("seccion18").style.backgroundColor = '#344e54';
// 		console.log("cambio de color")

// 	} else {

// 		document.getElementById("seccion18").style.backgroundColor = "rgb(34, 34, 34)";
// 	}

// }

function cambiarColorTalent() {

	if (document.getElementById("seccion6TalentMain1").style.backgroundColor === "" || document.getElementById("seccion6TalentMain1").style.backgroundColor === "rgb(34, 34, 34)") {
		document.getElementById("seccion6TalentMain1").style.backgroundColor = '#344e54';
		document.getElementById("seccion6TalentMain2").style.backgroundColor = '#344e54';
		document.getElementById("personTalentMain1").style.backgroundColor = '#344e54';
		document.getElementById("personTalentMain2").style.backgroundColor = '#344e54';
		console.log("cambio de color")

	} else {

		document.getElementById("seccion6TalentMain1").style.backgroundColor = "#222222";
		document.getElementById("seccion6TalentMain2").style.backgroundColor = "#222222";
		document.getElementById("personTalentMain1").style.backgroundColor = '#222222';
		document.getElementById("personTalentMain2").style.backgroundColor = '#222222';
	}

}

function cambiarColorStudio() {

	if (document.getElementById("seccion20").style.backgroundColor === "" || document.getElementById("seccion20").style.backgroundColor === "rgb(34, 34, 34)") {
		document.getElementById("seccion20").style.backgroundColor = '#344e54';
		document.getElementById("seccion25").style.backgroundColor = '#344e54';
		console.log("cambio de color")

	} else {

		document.getElementById("seccion20").style.backgroundColor = "#222222";
		document.getElementById("seccion25").style.backgroundColor = "#222222";
	}

}

/*El menu hamburguesa está oculto cuando se inician las páginas. La función chequea su estado. Si está deseparecido, lo hace aparecer, y viceversa*/

function showMenu() {

	if (document.getElementById("menuhambu").style.display === "none" || document.getElementById("menuhambu").style.display === "") {

		document.getElementById("menuhambu").style.display = "block"
		console.log("se abrió")

	} else {

		document.getElementById("menuhambu").style.display = "none"
		console.log("se cerró")

	}

}




