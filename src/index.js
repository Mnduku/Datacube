import './style.css'
const count = 54


var editmode = false
var colors = ['blue', 'green', 'white', 'yellow', 'orange', 'red'],
		pieces = document.getElementsByClassName('piece');

		let text = document.querySelector('div.text')
		text.textContent = "EDIT MODE"

// Returns j-th adjacent face of i-th face
function mx(i, j) {
	return ([2, 4, 3, 5][j % 4 |0] + i % 2 * ((j|0) % 4 * 2 + 3) + 2 * (i / 2 |0)) % 6;
}

function getAxis(face) {
	return String.fromCharCode('X'.charCodeAt(0) + face / 2); // X, Y or Z
}

function showinfo(element){
	if(editmode == true){
		let text = document.createElement('p')
		text.classList.toggle('boxinfo')
		text.textContent = "Test"
		element.appendChild(text)
		element.classList.toggle('modified')
	}

}

// Moves each of 26 pieces to their places, assigns IDs and attaches stickers
let idno = 0
function assembleCube() {
	function moveto(face) {
		id = id + (1 << face);
		let square = document.createElement('div')
		square.setAttribute('class', 'sticker ' + colors[face]);
		square.classList.add('unselectable')
		square.classList.add(idno)
		idno = idno + 1
		console.log(idno)
		pieces[i].children[face].appendChild(square)	
		return 'translate' + getAxis(face) + '(' + (face % 2 * 4 - 2) + 'em)';
	}
	for (var id, x, i = 0; id = 0, i < 26; i++) {
		x = mx(i, i % 18);
		pieces[i].style.transform = 'rotateX(0deg)' + moveto(i % 6) +
			(i > 5 ? moveto(x) + (i > 17 ? moveto(mx(x, x + 2)) : '') : '');
		pieces[i].setAttribute('id', 'piece' + id);
	}
	let stickers = document.querySelectorAll('div.sticker')
	stickers.forEach(element => {
		element.addEventListener('click', function(){showinfo(element)})
	});
}

function getPieceBy(face, index, corner) {
	return document.getElementById('piece' +
		((1 << face) + (1 << mx(face, index)) + (1 << mx(face, index + 1)) * corner));
}

// Swaps stickers of the face (by clockwise) stated times, thereby rotates the face
function swapPieces(face, times) {
	for (var i = 0; i < 6 * times; i++) {
		var piece1 = getPieceBy(face, i / 2, i % 2),
				piece2 = getPieceBy(face, i / 2 + 1, i % 2);
		for (var j = 0; j < 5; j++) {
			var sticker1 = piece1.children[j < 4 ? mx(face, j) : face].firstChild,
					sticker2 = piece2.children[j < 4 ? mx(face, j + 1) : face].firstChild,
					className = sticker1 ? sticker1.className : '';
			if (className)
				sticker1.className = sticker2.className,
				sticker2.className = className;
		}
	}
}

// Animates rotation of the face (by clockwise if cw), and then swaps stickers
function animateRotation(face, cw, currentTime) {
	var k = .3 * (face % 2 * 2 - 1) * (2 * cw - 1),
			qubes = Array(9).fill(pieces[face]).map(function (value, index) {
				return index ? getPieceBy(face, index / 2, index % 2) : value;
			});
	(function rotatePieces() {
		var passed = Date.now() - currentTime,
				style = 'rotate' + getAxis(face) + '(' + k * passed * (passed < 300) + 'deg)';
		qubes.forEach(function (piece) {
			piece.style.transform = piece.style.transform.replace(/rotate.\(\S+\)/, style);
		});
		if (passed >= 300)
			return swapPieces(face, 3 - 2 * cw);
		requestAnimationFrame(rotatePieces);
	})();
}

// Events
function mousedown(md_e) {
	var startXY = pivot.style.transform.match(/-?\d+\.?\d*/g).map(Number),
			element = md_e.target.closest('.element'),
			face = [].indexOf.call((element || cube).parentNode.children, element);
	function mousemove(mm_e) {
		if (element) {
			var gid = /\d/.exec(document.elementFromPoint(mm_e.pageX, mm_e.pageY).id);
			if (gid && gid.input.includes('anchor')) {
				mouseup();
				var e = element.parentNode.children[mx(face, Number(gid) + 3)].hasChildNodes();
				animateRotation(mx(face, Number(gid) + 1 + 2 * e), e, Date.now());
			}
		} else pivot.style.transform =
			'rotateX(' + (startXY[0] - (mm_e.pageY - md_e.pageY) / 2) + 'deg)' +
			'rotateY(' + (startXY[1] + (mm_e.pageX - md_e.pageX) / 2) + 'deg)';
	}
	function mouseup() {
		document.body.appendChild(guide);
		scene.removeEventListener('mousemove', mousemove);
		document.removeEventListener('mouseup', mouseup);
		scene.addEventListener('mousedown', mousedown);
	}

	(element || document.body).appendChild(guide);
	scene.addEventListener('mousemove', mousemove);
	document.addEventListener('mouseup', mouseup);
	scene.removeEventListener('mousedown', mousedown);
}

document.ondragstart = function() { return false; }
window.addEventListener('load', assembleCube);
scene.addEventListener('mousedown', mousedown);

function toggle(text){
	editmode = !editmode
	console.log(editmode)
	if(editmode == false){ text.textContent = "VIEW MODE"}
	else if(editmode == true){ text.textContent = "EDIT MODE"}
	console.log(text.textContent)
}

text.addEventListener('click', function(text){
	toggle(text)
})
