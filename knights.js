function knightMoves(startsq, endsq) {
    let init = startsq.slice();
    let end = endsq.slice();
    if (init[0] === end[0] && init[1] === end[1]) {
        console.log("Same square, 0 moves");
    }
    else {
        console.log("> knightMoves([" + init + "],[" + end + "])");
        let list = [[init]];
        let matrix = [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]];
        let bool = false;
        while (bool === false) {
            let oldlist = list.slice();
            list = [];
            oldlist.forEach((ele) => {
                let lastmove = ele[ele.length - 1];
                let x = lastmove[0];
                let y = lastmove[1];
                if (x === end[0] && y === end[1]) {
                    console.log("You made it in " + (ele.length - 1) + " moves! Here's your path:");
                    for (let i = 0; i < ele.length; i++) {
                        console.log(ele[i]);
                    }
                    bool = true;
                }
               else {
                if (x + 1 < 8) {
                    if (x + 2 < 8) {
                        if (y + 1 < 8) {
                            if (matrix[x+2][y+1] === 0) {matrix[x+2][y+1] = 1; list.push(ele.concat([[x+2, y+1]]));}
                        }
                        if (y - 1 >= 0) {
                            if (matrix[x+2][y-1] === 0) {matrix[x+2][y-1] = 1; list.push(ele.concat([[x+2, y-1]]));}
                        }
                    }
                    if (y + 2 < 8) {
                        if (matrix[x+1][y+2] === 0) {matrix[x+1][y+2] = 1; list.push(ele.concat([[x+1, y+2]]));}
                    }
                    if (y - 2 >= 0) {
                        if (matrix[x+1][y-2] === 0) {matrix[x+1][y-2] = 1; list.push(ele.concat([[x+1, y-2]]));}
                    }
                }
                if (x - 1 >= 0) {
                    if (x - 2 >= 0) {
                        if (y + 1 < 8) {
                            if (matrix[x-2][y+1] === 0) {matrix[x-2][y+1] = 1; list.push(ele.concat([[x-2, y+1]]));}
                        }
                        if (y - 1 >= 0) {
                            if (matrix[x-2][y-1] === 0) {matrix[x-2][y-1] = 1; list.push(ele.concat([[x-2, y-1]]));}
                        }
                    }
                    if (y + 2 < 8) {
                        if (matrix[x-1][y+2] === 0) {matrix[x-1][y+2] = 1; list.push(ele.concat([[x-1, y+2]]));}
                    }
                    if (y - 2 >= 0) {
                        if (matrix[x-1][y-2] === 0) {matrix[x-1][y-2] = 1; list.push(ele.concat([[x-1, y-2]]));}
                    }
                }
               }
        })
     }
    }
}

knightMoves([0, 0], [7, 7]);