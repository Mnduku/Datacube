import './style.css'
import "./cube.js"
import Cube from './cube.js'

const test = new Cube(3)
test.assembleCube()

document.ondragstart = function() { return false; }

scene.addEventListener('mousedown', test.mousedown)

console.log("X")





let text = document.querySelector('div.text')
text.textContent = "EDIT MODE"
text.addEventListener('click', function(text){
	toggle(text)
})

function toggle(text){
	let display = document.querySelector('.infodisplay')
	editmode = !editmode
	tets.editmode = !editmode
	if(editmode == false){ text.textContent = "VIEW MODE"
	display.classList.toggle('visible')}
	else if(editmode == true){ text.textContent = "EDIT MODE"
	display.classList.toggle('visible')}
}
