const WHITE_KEYS = ['q','w','e','r','t','y','u','i','o','p','[',']']
const BLACK_KEYS = ['2','3','5','6','7','9','0','=']

const audLoc = [
    ['piano_notes/piano_C.wav', 'piano_notes/piano_Db.wav', 'piano_notes/piano_D.wav', 'piano_notes/piano_Eb.wav', 'piano_notes/piano_E.wav', 
    'piano_notes/piano_F.wav', 'piano_notes/piano_Gb.wav', 'piano_notes/piano_G.wav', 'piano_notes/piano_Ab.wav', 'piano_notes/piano_A.wav', 
    'piano_notes/piano_Bb.wav', 'piano_notes/piano_B.wav', 'piano_notes/piano_C2.wav', 'piano_notes/piano_Db2.wav', 'piano_notes/piano_D2.wav', 
    'piano_notes/piano_Eb2.wav', 'piano_notes/piano_E2.wav', 'piano_notes/piano_F2.wav', 'piano_notes/piano_Gb2.wav', 'piano_notes/piano_G2.wav'],
    ['rhodes_notes/rhodes_C.wav', 'rhodes_notes/rhodes_Db.wav', 'rhodes_notes/rhodes_D.wav', 'rhodes_notes/rhodes_Eb.wav', 'rhodes_notes/rhodes_E.wav', 
    'rhodes_notes/rhodes_F.wav', 'rhodes_notes/rhodes_Gb.wav', 'rhodes_notes/rhodes_G.wav', 'rhodes_notes/rhodes_Ab.wav', 'rhodes_notes/rhodes_A.wav', 
    'rhodes_notes/rhodes_Bb.wav', 'rhodes_notes/rhodes_B.wav', 'rhodes_notes/rhodes_C2.wav', 'rhodes_notes/rhodes_Db2.wav', 'rhodes_notes/rhodes_D2.wav', 
    'rhodes_notes/rhodes_Eb2.wav', 'rhodes_notes/rhodes_E2.wav', 'rhodes_notes/rhodes_F2.wav', 'rhodes_notes/rhodes_Gb2.wav', 'rhodes_notes/rhodes_G2.wav'],
    ['acoustic_notes/ac_C.wav', 'acoustic_notes/ac_Db.wav', 'acoustic_notes/ac_D.wav', 'acoustic_notes/ac_Eb.wav', 'acoustic_notes/ac_E.wav', 
    'acoustic_notes/ac_F.wav', 'acoustic_notes/ac_Gb.wav', 'acoustic_notes/ac_G.wav', 'acoustic_notes/ac_Ab.wav', 'acoustic_notes/ac_A.wav', 
    'acoustic_notes/ac_Bb.wav', 'acoustic_notes/ac_B.wav', 'acoustic_notes/ac_C2.wav', 'acoustic_notes/ac_Db2.wav', 'acoustic_notes/ac_D2.wav', 
    'acoustic_notes/ac_Eb2.wav', 'acoustic_notes/ac_E2.wav', 'acoustic_notes/ac_F2.wav', 'acoustic_notes/ac_Gb2.wav', 'acoustic_notes/ac_G2.wav'],
    ['bell_notes/bell_C.wav', 'bell_notes/bell_Db.wav', 'bell_notes/bell_D.wav', 'bell_notes/bell_Eb.wav', 'bell_notes/bell_E.wav', 
    'bell_notes/bell_F.wav', 'bell_notes/bell_Gb.wav', 'bell_notes/bell_G.wav', 'bell_notes/bell_Ab.wav', 'bell_notes/bell_A.wav', 
    'bell_notes/bell_Bb.wav', 'bell_notes/bell_B.wav', 'bell_notes/bell_C2.wav', 'bell_notes/bell_Db2.wav', 'bell_notes/bell_D2.wav', 
    'bell_notes/bell_Eb2.wav', 'bell_notes/bell_E2.wav', 'bell_notes/bell_F2.wav', 'bell_notes/bell_Gb2.wav', 'bell_notes/bell_G2.wav'],
    ['nathan_notes/C.mp3', 'nathan_notes/Db.mp3', 'nathan_notes/D.mp3', 'nathan_notes/Eb.mp3', 'nathan_notes/E.mp3','nathan_notes/F.mp3',
    'nathan_notes/Gb.mp3', 'nathan_notes/G.mp3', 'nathan_notes/Ab.mp3', 'nathan_notes/A.mp3', 'nathan_notes/Bb.mp3', 'nathan_notes/B.mp3',
     'nathan_notes/C.mp3', 'nathan_notes/Db.mp3', 'nathan_notes/D.mp3', 'nathan_notes/Eb.mp3', 'nathan_notes/E.mp3', 'nathan_notes/F.mp3',
      'nathan_notes/Gb.mp3', 'nathan_notes/G.mp3'],
    ['nathan_g_notes/german_c.mp3', 'nathan_g_notes/german_db.mp3', 'nathan_g_notes/german_d.mp3', 'nathan_g_notes/german_eb.mp3', 
    'nathan_g_notes/german_e.mp3', 'nathan_g_notes/german_f.mp3', 'nathan_g_notes/greman-gb.mp3', 'nathan_g_notes/german_g.mp3', 
    'nathan_g_notes/german_ab.mp3', 'nathan_g_notes/german-a.mp3', 'nathan_g_notes/german-bb.mp3', 'nathan_g_notes/german_b.mp3', 
    'nathan_g_notes/german_c.mp3', 'nathan_g_notes/german_db.mp3', 'nathan_g_notes/german_d.mp3', 'nathan_g_notes/german_eb.mp3', 
    'nathan_g_notes/german_e.mp3', 'nathan_g_notes/german_f.mp3', 'nathan_g_notes/greman-gb.mp3', 'nathan_g_notes/german_g.mp3']
]

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

buttonNum = 0;

document.getElementById("piano_button").onclick = function () {    buttonNum = 0;};
document.getElementById("rhodes_button").onclick = function () {   buttonNum = 1;};
document.getElementById("acoustic_button").onclick = function () { buttonNum = 2;};
document.getElementById("bell_button").onclick = function () {     buttonNum = 3;};
document.getElementById("nathan_button").onclick = function () {   buttonNum = 4;};
document.getElementById("nathan_g_button").onclick = function () { buttonNum = 5;};

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
    noteLoc = audLoc[buttonNum][g]
    var noteAudio = new Audio(noteLoc);
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () =>{
        key.classList.remove('active')
    })
}
