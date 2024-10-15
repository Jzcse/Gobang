
window.onload = function(){
    confirm("暂不包含五子连珠判断");
};

//总步数
let times = 0;

let initializeNum = 0;

function start (){
    initializeNum = initializeNum + 1;
};

//重新加载
function reload(){
    location.reload();
};

function falling(id){

    //检测游戏是否已经开始
    if(initializeNum == 0){
        return;
    }

    //获得当前落子位置
    const chessSite = document.getElementById(id);

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
        }
    }
    

    
    
};


