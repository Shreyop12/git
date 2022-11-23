let board = document.getElementById("score")
let opp = document.getElementById("left")


let count = 0
let life = 0


function shoot(){
   count += 3
   board.textContent = count

}


function stab(){
    count += 2
    board.textContent = count
}

 
function defe(){
    count += 1
    board.textContent = count
}

 
function loss(){
    life -=1
    opp.textContent = life
}

 function kod(){
        life -=2
        opp.textContent = life
}

function redo(){
    board.textContent = 0
    opp.textContent = 0
    count = 0
    life = 0
}


 