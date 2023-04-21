let newCaro = document.getElementById("newCaro");
let arr = [];
let topNew = 0;
let count = 0;
for (let i = 0; i < 10; i++) {
    let left = 0;
    let arrOne = [];
    for (let j = 0; j < 10; j++) {
        arrOne.push("<div id='caro-" + i + "-" + j + "' class='caro' style='top:" + topNew + "px;left:" + left + "px' onclick='btn(" + i + "," + j + ")'></div>");
        left += 40;
    }
    topNew += 40;
    arr.push(arrOne);
}
show();
function show() {
    let show = "";
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            show += arr[i][j];
        }
    }
    newCaro.innerHTML = show;
}


function btn(x, y) {
    let result = document.getElementById("caro-" + x + "-" + y);
    if (result.innerText == "X" || result.innerText == "O") {
        alert("error");
    } else {
        if (count % 2 == 0) {
            result.innerHTML = "X";

        } else {
            result.innerHTML = "O";
        }
        count += 1;
    }
    arr[x][y] = result.outerHTML;
    check();
}

function check() {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let xIndex = arr[i][j].indexOf("X");
            let oIndex = arr[i][j].indexOf("O");
            if (xIndex != -1) {
                checkWin(i, j, "X");
            } else if (oIndex != -1) {
                checkWin(i, j, "O");
            } else {

            }
        }
    }
}
function checkWin(a, b, text) {
    if(b<5){
    //ngang

        for (let i = b; i < b + 5; i++) {
            if (arr[a][i + 1].indexOf(text) != -1) {
                if (arr[a][b + 4].indexOf(text) != -1) {
                    alert(text + " win");
                    break;
                }
            } else {
                break;
            }
        }
    //xeo xuong

        for (let i = a; i < a + 5; i++) {
            for (let j = b; j < b + 5; j++) {
                if (arr[i][j].indexOf(text) != -1) {
                    if (arr[a + 4][b + 4].indexOf(text) != -1) {
                        alert(text + " win");
                        break;
                    }
                } else {
                    break;
                }
            }
        }
    }

    //doc
    for (let i = a; i < a + 5; i++) {
        if (arr[i][b].indexOf(text) != -1) {
            if (arr[a + 4][b].indexOf(text) != -1) {
                alert(text + " win");
                break;
            }
        } else {
            break;
        }
    }
    //xeo len
        for (let i = a; i < a + 5; i++) {
            for (let j = b; j > b - 5; j--) {
                if (arr[i][j].indexOf(text) != -1) {
                    if (arr[a + 4][b - 4].indexOf(text) != -1) {
                        alert(text + " win");
                        break;
                    }
                } else {
                    break;
                }
            }
        }

}
