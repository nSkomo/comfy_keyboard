const WHITE_KEYS = ['q','w','e','r','t','y','u','i','o','p','[',']']
const BLACK_KEYS = ['2','3','5','6','7','9','0','=']

const audLoc = ['nathan_notes/C.mp3', 'nathan_notes/Db.mp3', 'nathan_notes/D.mp3', 'nathan_notes/Eb.mp3', 'nathan_notes/E.mp3','nathan_notes/F.mp3',
                'nathan_notes/Gb.mp3', 'nathan_notes/G.mp3', 'nathan_notes/Ab.mp3', 'nathan_notes/A.mp3', 'nathan_notes/Bb.mp3', 'nathan_notes/B.mp3',
                 'nathan_notes/C.mp3', 'nathan_notes/Db.mp3', 'nathan_notes/D.mp3', 'nathan_notes/Eb.mp3', 'nathan_notes/E.mp3', 'nathan_notes/F.mp3',
                  'nathan_notes/Gb.mp3', 'nathan_notes/G.mp3']


const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

buttonNum = 0;

document.getElementById("piano_button").onclick = function () {    buttonNum = 0; alert(buttonNum); };
document.getElementById("rhodes_button").onclick = function () {   buttonNum = 1; alert(buttonNum); };
document.getElementById("acoustic_button").onclick = function () { buttonNum = 2; alert(buttonNum); };
document.getElementById("bell_button").onclick = function () {     buttonNum = 3; alert(buttonNum); };
document.getElementById("nathan_button").onclick = function () {   buttonNum = 4; alert(buttonNum); };
document.getElementById("nathan_g_button").onclick = function () { buttonNum = 5; alert(buttonNum); };

keys.forEach(key =>{
    key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e =>{
    if(e.repeat) return
    const key = e.key
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)
    if(whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if(blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})



function playNote(key){
    g = key.getAttribute("num");
    alert(g);
    noteLoc = audLoc[g]
    var noteAudio = new Audio(noteLoc);
    


    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () =>{
        key.classList.remove('active')
    })
}
