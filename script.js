// ETCH-A-SKETCH PROJECT
  
//DOM
const container = document.querySelector('#container');
const changeGridBtn = document.querySelector('#changeGridBtn');
const resetBtn = document.querySelector('#resetBtn');
const eraserBtn = document.querySelector('#eraserBtn');
const blackBtn = document.querySelector('#blackBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');
const sendColor = document.querySelector('#sendColor');


function createSquares(n) {
	let square;
	let area = n * n;

	for (let i = 1; i <= area; ++i){
		square = document.createElement('div');
		square.classList = 'square';
		square.style.width = `${400/n}px`;
		square.style.height = `${400/n}px`;
		
		rainbow(square);
		reset(square);
		removeOldGrid(square);
		eraser(square);
		black(square);
		colorPicker(square);
		teste(square);
		
		container.appendChild(square);

		
	}

} createSquares(16);



function teste(square) {
	square.addEventListener('click', (_e) => {
			this.style['background-color'] = 'currentColor';
		});
}

function randomColors(square){
	let r = Math.ceil(Math.random() * 255);
	let g = Math.ceil(Math.random() * 255);
	let b = Math.ceil(Math.random() * 255);

	square.style['background-color'] = `rgb(${r},${g},${b})`;
}

function removeOldGrid(square) {
	changeGridBtn.addEventListener('click', () => {
		container.removeChild(square)
	});

	resetBtn.addEventListener('click', () => {
		container.removeChild(square)
	});
}

// Buttons
function rainbow(square) {
	square.addEventListener('mouseover', () => {
		randomColors(square);
	});

	rainbowBtn.addEventListener('click', () => {
		square.addEventListener('mouseover', () => {
			randomColors(square);
		});
	});
}

function eraser(square){
	eraserBtn.addEventListener('click', () => {
		square.addEventListener('mouseover', () => {
			square.style.background = 'white';
		});
	});
}

function reset(square){
	resetBtn.addEventListener('click', () => {
		square.style.background = 'white';
	});
}

function black(square) {
	blackBtn.addEventListener('click', () => {
		square.addEventListener('mouseover', () => {
			square.style.background = 'black';
		});
	});
}

function colorPicker(square){
	sendColor.addEventListener('click', () => {
		let colorPicker = document.querySelector('#colorPicker').value;
		square.addEventListener('mouseover', () => {
			square.style.background = colorPicker;
		});
	});
}

resetBtn.addEventListener('click', () => {
	createSquares(16);
});

changeGridBtn.addEventListener('click', () => {
	let numGrid = document.getElementById('numGrid').value;
	createSquares(numGrid);
});

/*------------------------------------------------------------
RESPONSIVIDADE: PLANEJAMENTO
	#Definir os tamanhos de tela
	#Definir como cada tamanho de tela ir?? ficar
	#Criar um collapse para o menu na tela adequada
*/

/*document.getElementById('squaresSection').addEventListener('click', () => {
	alert(window.innerWidth)
})*/

/*-----------------------------------------
ORGANIZA????O
	// "QUESTION??RIO":

		*1- Um jogo etch-a-sketch; nele, o jogador ir??
		passar o mouse sobre os quadrados e 
		eles mudar??o de cor. Ele tamb??m poder?? 
		mudar a quantidade de quadradinhos;

		*2- Ter?? uma interface (t?? no caderno). 
		As entradas ser??o: n?? de quadradinhos (input);

		*3- A "sa??da" para essas entradas ser?? a 
		mudan??a no tamanho das divs;
	//
	--------------------------------------------

	// PSEUDO-C??DIGO:
		* #Criar a const container;#

		* #Sistema de cria????o das divs;#

		* #Inserir as divs na .container;#

		* #Distribu??-las em formato de grade;#

		* #Colorir as divs ao passar o mouse por cima;#

		* #Criar o input para mudar 
		a quantidade de quadradrinhos;#

		* #Validar o input;#

		* #Criar inputs para borracha e cores;#

		* #Estilizar a p??gina;#
	//
*/