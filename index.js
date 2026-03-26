const pieces={
    w_k: "♔", w_q: "♕", w_r: "♖", w_b: "♗", w_kn: "♘", w_p: "♙",
    b_k: "♚", b_q: "♛", b_r: "♜", b_b: "♝", b_kn: "♞" ,b_p: "♟"
};

const boardBody= document.getElementById("board-body");
function createBoard(){
    const board=[
        [pieces.b_r, pieces.b_kn, pieces.b_b, pieces.b_q, pieces.b_k, pieces.b_b, pieces.b_kn, pieces.b_r],
        [pieces.b_p, pieces.b_p, pieces.b_p, pieces.b_p, pieces.b_p, pieces.b_p, pieces.b_p, pieces.b_p],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        [pieces.w_p, pieces.w_p, pieces.w_p, pieces.w_p, pieces.w_p, pieces.w_p, pieces.w_p, pieces.w_p],
        [pieces.w_r, pieces.w_kn, pieces.w_b, pieces.w_q, pieces.w_k, pieces.w_b, pieces.w_kn, pieces.w_r]
    ];

    for(let i=0; i< board.length; i++){
        const tr= document.createElement('tr');
        const th= document.createElement('th');
        th.innerText= 8-i
        tr.appendChild(th);
        const currentRow= board[i];
        for(let j=0; j < currentRow.length; j++){
            const th= document.createElement('th');
            let piece= currentRow[j];
            th.textContent= piece;
            th.onclick= function(){
                handleSquareClick(th);
            };
            tr.appendChild(th);

        }

        boardBody.appendChild(tr);
    }
    
}
createBoard();
function handleSquareClick(element){
    console.log("clicked");
}






