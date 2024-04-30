let turn=0;
let movesarray=["","","","","","","","",""];
let content;
let places=0;
let winnerstatus=false;
let WINNING_COMBINATIONS = [
    [1, 2, 3],
    [1, 5, 9],
    [4, 5, 6], // Added more winning combinations
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7] // Added diagonal winning combinations
];

function handleclick(id) {
    place=id.charAt(id.length-1);
    if (document.getElementById(id).innerHTML !== "") {
        return;
    }
    if (turn === 0 && !winnerstatus) {
        content = 'X';
        document.querySelector(".turn").innerHTML="O's turn";
    } else if(!winnerstatus){
        content = 'O';
        document.querySelector(".turn").innerHTML="X's turn";
    }
    if(!winnerstatus){
        document.getElementById(id).innerHTML = content;
    }
    handleCheck(content,place);
    turn = (turn + 1) % 2; 
}

function handleCheck(content, place) {
    movesarray[place-1]=content;
    places+=1;
    console.log(movesarray);
    for(let arr of WINNING_COMBINATIONS){
        const firstIndex=arr[0];
        const secondIndex=arr[1];
        const thirdIndex=arr[2];
        const firstValue=movesarray[firstIndex-1];
        const secondValue=movesarray[secondIndex-1];
        const thirdValue=movesarray[thirdIndex-1];
        if(firstValue!='' && firstValue===secondValue && firstValue===thirdValue){
            document.getElementById("victory").innerHTML=`The Winner is ${firstValue}`;
            document.querySelector(".turn").innerHTML=null;
            winnerstatus=true;
            return;
        }
        
    }
    if(places===9 && !winnerstatus){
        document.getElementById("victory").innerHTML="The game is drawn";
    }
}

const restartbtn=document.querySelector(".restart");
restartbtn.addEventListener('click',function handlerestart(){
    winnerstatus=false;
    for(let i=0;i<movesarray.length;i++){
        movesarray[i]='';
        document.getElementById(`button${i+1}`).textContent='';
    }
    turn=0;
    document.getElementById("victory").innerHTML='';
    document.querySelector(".turn").textContent='';
    console.log(movesarray);
}
)