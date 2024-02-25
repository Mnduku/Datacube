import './style.css'

export default class Cube{

    count = 54;
    faces = [];
    currentangle = 0;
    size = 0;
    editmode = false;
    colors = ['blue', 'green', 'white', 'yellow', 'orange', 'red'];
    idno = 0;
    pieces = [];
    static editmode = false;
    startXY = 0

    static mx(i, j){
        return ([2, 4, 3, 5][j % 4 |0] + i % 2 * ((j|0) % 4 * 2 + 3) + 2 * (i / 2 |0)) % 6;
    };

    constructor(x){
        this.size = x
        this.pieces = document.getElementsByClassName('piece')
    }
    
   

    // Returns j-th adjacent face of i-th face
    
    getAxis(face) {
        return String.fromCharCode('X'.charCodeAt(0) + face / 2); // X, Y or Z
    }

    
    // Moves each of 26 pieces to their places, assigns IDs and attaches stickers
    assembleCube(){
        console.log(this.assembleCube)
        for (var id, x, i = 0; id = 0, i < 26; i++) {
            x = Cube.mx(i, (i % 18))
            this.pieces[i].style.transform = 'rotateX(0deg)' + this.moveto(i % 6, id, i) +
                (i > 5 ? this.moveto(x,  id,i) + (i > 17 ? this.moveto(Cube.mx(x, x + 2), id, i) : '') : '');
            this.pieces[i].setAttribute('id', 'piece' + id);
        }

        let stickers = document.querySelectorAll('div.sticker')
        stickers.forEach(element => {
            element.addEventListener('click', function(){Cube.showinfo(element)})
            this.faces.push(element)
        });
    }

    moveto(face,id,i) { 
        id = id + (1 << face);
        let square = document.createElement('div')
        square.setAttribute('class', 'sticker ' + this.colors[face]);
        square.classList.add('unselectable')
        square.classList.add(this.idno)
        this.idno = this.idno + 1
        this.pieces[i].children[face].appendChild(square)	
        return 'translate' + this.getAxis(face) + '(' + (face % 2 * 4 - 2) + 'em)';
    }
    
    getPieceBy(face, index, corner) {
        console.log( "GETBYPIECE")
        return document.getElementById('piece' +
            ((1 << face) + (1 << Cube.mx(face, index)) + (1 << Cube.mx(face, index + 1)) * corner));
    }
    
    // Swaps stickers of the face (by clockwise) stated times, thereby rotates the face
    swapPieces(face, times) {
        console.log('SWAP PEICES')
        for (var i = 0; i < 6 * times; i++) {
            var piece1 = this.getPieceBy(face, i / 2, i % 2),
                    piece2 = this.getPieceBy(face, i / 2 + 1, i % 2);
            for (var j = 0; j < 5; j++) {
                var sticker1 = piece1.children[j < 4 ? Cube.mx(face, j) : face].firstChild,
                        sticker2 = piece2.children[j < 4 ? Cube.mx(face, j + 1) : face].firstChild,
                        className = sticker1 ? sticker1.className : '';
                if (className){
                    sticker1.className = sticker2.className
                    sticker2.className = className;
                }
    
            }
        }
        editfaces()
    }
    
    // Animates rotation of the face (by clockwise if cw), and then swaps stickers
    static animateRotation(face, cw, currentTime) {
        console.log("ANIMATEROTATION")
        var k = .3 * (face % 2 * 2 - 1) * (2 * cw - 1),
                qubes = Array(9).fill(pieces[face]).map(function (value, index) {
                    return index ? this.getPieceBy(face, index / 2, index % 2) : value;
                });
        (function rotatePieces() {
            var passed = Date.now() - currentTime,
                    style = 'rotate' + this.getAxis(face) + '(' + k * passed * (passed < 300) + 'deg)';
            qubes.forEach(function (piece) {
                piece.style.transform = piece.style.transform.replace(/rotate.\(\S+\)/, style);
            });
            if (passed >= 300)
                return this.swapPieces(face, 3 - 2 * cw);
            requestAnimationFrame(rotatePieces);
        })()
        
    }


    // Events
    mousedown(md_e) {
        console.log("MOUSEDOWN")
        this.startXY = pivot.style.transform.match(/-?\d+\.?\d*/g).map(Number),
                element = md_e.target.closest('.element'),
                face = [].indexOf.call((element || cube).parentNode.children, element);
        (element || document.body).appendChild(guide);
	    scene.addEventListener('mousemove', Cube.mousemove(element));
	    document.addEventListener('mouseup', Cube.mouseup(guide));
	    scene.removeEventListener('mousedown', this.mousedown);
    }
     
    static mousemove(element, mm_e){
        if (element) {
            var gid = /\d/.exec(document.elementFromPoint(mm_e.pageX, mm_e.pageY).id);
            if (gid && gid.input.includes('anchor')) {
                mouseup();
                var e = element.parentNode.children[Cube.mx(face, Number(gid) + 3)].hasChildNodes();
                Cube.animateRotation(Cube.mx(face, Number(gid) + 1 + 2 * e), e, Date.now());
            }
        } else pivot.style.transform =
            'rotateX(' + (startXY[0] - (mm_e.pageY - md_e.pageY) / 2) + 'deg)' +
            'rotateY(' + (startXY[1] + (mm_e.pageX - md_e.pageX) / 2) + 'deg)';
    }

    static mouseup(guide) {
        console.log("MOUSEup")
        document.body.appendChild(guide);
        scene.removeEventListener('mousemove', Cube.mousemove);
        document.removeEventListener('mouseup', Cube.mouseup);
        scene.addEventListener('mousedown', this.mousedown);
    }





    editfaces(){
        console.log("EDITFACES")
        faces.forEach(element => {
                if(element.childNodes.length > 0){
                    element.removeChild(element.firstChild)
                }
        });
        faces.forEach(element => {
            if(element.classList.contains('modified')){
                console.log("WE GONE ONE")
                let info = document.createElement('p')
                info.classList.toggle('boxinfo')
                info.textContent = element.information
                console.log(info)
                element.appendChild(info)
            }
        })
    }

    static showinfo(element){
        if(Cube.editmode == true){
            let text = document.createElement('p')
            text.classList.toggle('boxinfo')
            text.textContent = "Test"
            element.appendChild(text)
            element.classList.toggle('modified')
            element.information = "Test"
        }
       // else Cube.displayinfo(element)
       // Cube.displayinfo(element) 
    }
}

