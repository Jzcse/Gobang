
// window.onload = function(){
//     confirm("暂不包含五子连珠判断");
// };

//总步数
let times = 0;

let initializeNum = 0;

//初始行列
let row = 0;
let column = 0;


//开始按钮
function start (){
    initializeNum = initializeNum + 1;
    const tip1Div = document.querySelector(".tip1");
    tip1Div.style.display = "block";

    const startButtonBox = document.querySelector(".startButtonBox");
    startButtonBox.removeChild(startButtonBox.querySelector("button"));
};

//重新加载
function reload(){
    location.reload();
};

//定义两个二维数组
const WhiteArray = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
const BlackArray = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];


function falling(id){

    //检测游戏是否已经开始
    if(initializeNum == 0){
        return;
    }

    //获得当前落子位置
    const chessSite = document.getElementById(id);

    //获取当前行和列
    let idNumStr =  id.substring(9);
    let idNum = parseInt(idNumStr);//从1-225
    //行
    if(idNum % 15 === 0){
        row = Math.floor((idNum + 1) / 15) - 1;
    }else{
        row = Math.floor(idNum / 15);//行
    };
    //列
    if(idNum % 15 === 0){
        column = 14;
    }else{
        column = idNum % 15 - 1;
    };

    //判断是否已经落子
    const ifDiv = !! chessSite.querySelector("div")
    if (ifDiv == true){
        return;
    }else{
        //定义黑子格式
        const blackChess = document.createElement("div");
        blackChess.style.background = "black";
        blackChess.style.borderRadius = "20px";
        blackChess.style.width = "40px";
        blackChess.style.height = "40px";

        //定义白子格式
        const whiteChess = document.createElement("div");
        whiteChess.style.background = "white";
        whiteChess.style.borderRadius = "20px";
        whiteChess.style.width = "40px";
        whiteChess.style.height = "40px";

        //通过总步数判断落子颜色
        
        times = times + 1;
        if (times % 2 == 1){
            //落黑子
            chessSite.appendChild(blackChess);
            //改变落子状态
            const tip1Div = document.querySelector(".tip1");
            const tip2Div = document.querySelector(".tip2");
            tip1Div.style.display = "none";
            tip2Div.style.display = "block";
            //更改当前步数
            const score1P = document.getElementById("score1");
            score1P.innerHTML = ((times + 1) / 2);
            //在相应数组中添加落子状态
            BlackArray[row][column] = 1;
            const result1 = horizontalJudgment(row,BlackArray);
            const result2 = verticalJudgment(column,BlackArray);
            const result3 = judgmentOfTheLowerLeft(row,column,BlackArray);
            const result4 = judgmentOfTheLowerRight(row,column,BlackArray);
            
            if (result1 === true || result2 === true || result3 === true || result4 === true){
                const gameEnd = confirm("Black Win!");
                if(gameEnd === true){
                    reload();
                }else{
                    initializeNum = 0;
                }
            }
        }else{
            //落白子
            chessSite.appendChild(whiteChess);
            //改变落子状态
            const tip1Div = document.querySelector(".tip1");
            const tip2Div = document.querySelector(".tip2");
            tip1Div.style.display = "block";
            tip2Div.style.display = "none";
            //更改当前步数
            const score2P = document.getElementById("score2");
            score2P.innerHTML = (times / 2);
            //在相应数组中添加落子状态
            WhiteArray[row][column] = 1;
            const result1 = horizontalJudgment(row,WhiteArray);
            const result2 = verticalJudgment(column,WhiteArray);
            const result3 = judgmentOfTheLowerLeft(row,column,WhiteArray);
            const result4 = judgmentOfTheLowerRight(row,column,WhiteArray);
            if(result1 === true || result2 === true || result3 === true || result4 === true){
                const gameEnd = confirm("White Win!");
                if(gameEnd === true){
                    reload();
                }else{
                    initializeNum = 0;
                }
            }
        }
    }
    
    //横向判断
    function horizontalJudgment(rowNum,array){
        for (let i = 0 ; i < 15 ; i++){
            if (i < 11){
                if (array[rowNum][i] === 0){
                    continue;
                } else{
                    if (array[rowNum][i+1] == 1 && array[rowNum][i+2] == 1 && array[rowNum][i+3] == 1 && array[rowNum][i+4] == 1){
                        return true;
                    }else{
                        continue;
                    }
                }
            }else{
                return false;
            }
            
        }
    }

    //纵向判断
    function verticalJudgment(columnNum,array){
        for (let j = 0 ; j < 15 ; j++){
            if (j < 11){
                if(array[j][columnNum] === 0){
                    continue;
                }else{
                    if (array[j+1][columnNum] == 1 && array[j+2][columnNum] == 1 && array[j+3][columnNum] == 1 && array[j+4][columnNum] == 1){
                        return true;
                    }else{
                        continue;
                    }
                }
            }else{
                return false;
            }
        }
    }
    
    //左下判断
    function judgmentOfTheLowerLeft(rowNum,columnNum,array){
        const startingColumn = rowNum + columnNum;
        for (let i = startingColumn > 14 ? (startingColumn % 14 ) : 0, j = startingColumn > 14 ? 14 : startingColumn ; i < 15 , j >= 0;i++,j--){
            if(i < 11 && j > 3){ 
                if (array[i][j] === 0){
                    continue;
                }else{
                    if(array[i+1][j-1] === 1 && array[i+2][j-2] === 1 && array[i+3][j-3] === 1 && array[i+4][j-4] === 1){
                        return true;
                    }else{
                        continue;
                    }
                }
            }else{
                return false;
            }
        }

        
    }

    //右下判断
    function judgmentOfTheLowerRight(rowNum,columnNum,array){
        const startingColumnLike = columnNum - rowNum ;
        for (let i = startingColumnLike < 0 ? (0 - startingColumnLike) : 0 ,j = startingColumnLike < 0 ? 0 : startingColumnLike;i++,j++;){
            if (i < 11 && j < 11){
                if (array[i][j] === 0){
                    continue;
                }else{
                    if(array[i+1][j+1] === 1 && array[i+2][j+2] === 1 && array[i+3][j+3] === 1 && array[i+4][j+4]){
                        return true;
                    }else{
                        continue;
                    }
                }
            }else{
                return false;
            }
        }
    }
    
    
    
};

//悔棋函数
function retractMove(){
    if (times % 2 === 1){//悔白棋
        WhiteArray[row][column] = 0;
        const chessSiteId = `chessSite${row * 15 + column + 1}`;
        const parentDiv = document.getElementById(chessSiteId);
        parentDiv.removeChild(parentDiv.querySelector("div"));
        times = times - 1;
        //更新落子状态
        if(times % 2 === 1){
            const tip1Div = document.querySelector(".tip1");
            const tip2Div = document.querySelector(".tip2");
            tip1Div.style.display = "block";
            tip2Div.style.display = "none";
        }else{
            const tip1Div = document.querySelector(".tip1");
            const tip2Div = document.querySelector(".tip2");
            tip1Div.style.display = "none";
            tip2Div.style.display = "block";
        }
        //更新当前步数
        // const score2P = document.getElementById("score2");
        // score2P.innerHTML = (times / 2);
        const score1P = document.getElementById("score1");
        score1P.innerHTML = Math.floor(((times + 1) / 2));
    }else{
        BlackArray[row][column] = 0;
        const chessSiteId = `chessSite${row * 15 + column + 1}`;
        const parentDiv = document.getElementById(chessSiteId);
        parentDiv.removeChild(parentDiv.querySelector("div"));
        times = times - 1;
        //更新落子状态
        if(times % 2 === 1){
            const tip1Div = document.querySelector(".tip1");
            const tip2Div = document.querySelector(".tip2");
            tip1Div.style.display = "none";
            tip2Div.style.display = "block";
        }else{
            const tip1Div = document.querySelector(".tip1");
            const tip2Div = document.querySelector(".tip2");
            tip1Div.style.display = "block";
            tip2Div.style.display = "none";
        }
        //更新当前步数
        // const score1P = document.getElementById("score1");
        // score1P.innerHTML = ((times + 1) / 2);
        const score2P = document.getElementById("score2");
        score2P.innerHTML = Math.floor((times / 2));
    }
    
    
    

}


