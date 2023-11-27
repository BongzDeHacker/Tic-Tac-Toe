let pText = document.getElementById('pText');
let rBtn = document.getElementById('rBtn');
let boxes = Array.from(document.getElementsByClassName('box'));
let wIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks');

const X_TEXT = "X";
const O_TEXT = "O";
let cPlayer = X_TEXT;
let spaces = Array(9).fill(null);

const sGame = () => {
    boxes.forEach(box => box.addEventListener('click',bClicked));    
}

function bClicked(e){
    const id = e.target.id;

    if(!spaces[id]){
        spaces[id] = cPlayer;
        e.target.innerText = cPlayer;
    
if(playerHasWon() !==false){
    
    let w_blocks = playerHasWon();
    pText = cPlayer+' '+ 'has won!';
    
    document.getElementById('pText').innerHTML = pText;
    w_blocks.map(box => boxes[box].style.backgroundColor=wIndicator);
    return;   
}

        cPlayer = cPlayer == X_TEXT ? O_TEXT : X_TEXT;
    }
}
const wCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function playerHasWon(){
    for(const condition of wCombos){
        let[a,b,c] = condition;

        if(spaces[a] &&(spaces[a] == spaces[b] &&spaces[a] == spaces[c]))
        {
            return [a,b,c];
        }
    }
    return false;
}
rBtn.addEventListener('click',restart);

function restart(){
    spaces.fill(null);

    boxes.forEach( box => {
        box.innerText ='';
        document.getElementById('pText').innerHTML = 'Tic Tac Toe';
        box.style.backgroundColor='';
    })
    
    cPlayer = X_TEXT;
}



sGame();
    
