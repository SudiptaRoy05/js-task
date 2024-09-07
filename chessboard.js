function chessboard(num){
    let board = "";
    for(let i = 0; i<num;i++){
        let row = "";
        for(let j = 0; j<num; j++){
            if((i+j)% 2 === 0){
                row += "#";
            }else{
                row += "*";
            }
        }
        board += row.trim()+"\n";
    }
    
    return board;

}


console.log(chessboard(4));
