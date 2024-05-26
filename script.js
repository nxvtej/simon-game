const topLeft = document.querySelector('.top-left-panel');
const topRight = document.querySelector('.top-right-panel');
const bottomLeft = document.querySelector('.bottom-left-panel');
const bottomRight = document.querySelector('.bottom-right-panel');


const getRandomPanel = () => {
    const panels = [
        topLeft,
        topRight,
        bottomLeft,
        bottomRight
    ];
    return panels[parseInt(Math.random() * panels.length)];
};
let sequences = [
    getRandomPanel()
];

let sequenceToGuess = [...sequences]

const flash = panel => {
    return new Promise((resolve, reject) =>{
       panel.className += ' active';
       setTimeout(() =>{
        panel.className = panel.className.replace(
            ' active', ''
        ); 

       setTimeout(() => {
        resolve();
       },200);

       }, 800);
    });
};

let canclick = false;

const panelClicked = panelClicked => {
    if(!canclick) return ;
    // console.log(panel);

    const exprectedPanel = sequenceToGuess.shift();
    if(exprectedPanel === panelClicked) {
        if(sequenceToGuess.length === 0) {
            sequences.push(getRandomPanel());
            sequenceToGuess = [...sequences];
            startFlashing();
        }} else {
            alert('game over');
        }
    
};
// (async ()=>{

// }) ();

const startFlashing = async () => {
    canclick = false;
    for(const panel of sequences){
        await flash(panel);
    }
    canclick = true;
}

startFlashing();