function makeBubble(){
    let bubble = "";
for(let i=1; i<=100; i++){
    let rn = Math.floor(Math.random()*10)
    bubble += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#panelbottom").innerHTML = bubble;
}


let timer = 60;
function runTimer(){
    let timerInt = setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            document.querySelector("#panelbottom").innerHTML = `<h1>GAME OVER</h1>`;
            clearInterval(timerInt);
        }
    }, 1000);
}

let hitrn = 0;
function getNewHit(){
    let hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

let score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#panelbottom").addEventListener("click",function(details){
    let clickval = Number(details.target.textContent);
    if(clickval === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});
makeBubble();
runTimer();
getNewHit();
