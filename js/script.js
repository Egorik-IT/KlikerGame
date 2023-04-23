
let stTimer = 2;
let stTimerMinets = 0;
document.querySelector(".timer").innerHTML = "0" + stTimerMinets + ":0" + stTimer;
if(stTimer > 9){
    document.querySelector(".timer").innerHTML = "0" + stTimerMinets + ":" + stTimer;
}
function startTimer(){
    setInterval(() => {
        stTimer--;
        if(stTimer <= 9){
            document.querySelector(".timer").innerHTML = "0" + stTimerMinets + ":0" + stTimer;
        }
        if(stTimer <= 0){
            stTimer = 3;
        }
        if(stTimer >= 60){
            stTimer = 3;
            stTimerMinets++;
            document.querySelector(".timer").innerHTML = "0" + stTimerMinets + ":" + stTimer;
        }
        if(document.querySelector(".timer").innerHTML == "00:00"){
            document.querySelector(".end__container").style.display = "flex";
            document.querySelector(".timer").style.display = "none";
        }
        if(document.querySelector(".winner__container").style.display == "flex"){
            document.querySelector(".end__container").style.display = "none";
        }
        if(document.querySelector(".end__container").style.display == "flex"){
            document.querySelector(".winner__container").style.display = "none";
        }
        if(document.querySelector(".winner__container").style.display == "flex" || document.querySelector(".end__container").style.display == "flex"){
            document.querySelector(".active__slider").classList.remove("active__swich__slider");
        }
    }, 1000);
}
startTimer();


let clicks = 0;

function slider__click(){
    clicks++;
    document.querySelector(".click").innerHTML = clicks;
    if(!document.querySelector(".active__slider").classList.contains("active__swich__slider")){
        document.querySelector(".active__slider").classList.add("active__swich__slider");
        console.log('Right!');
    }else{
        document.querySelector(".active__slider").classList.remove("active__swich__slider");
        console.log('Left!');
    };
    
    if(clicks >= 20){
        document.querySelector(".active__slider").style.transition = "0.9s";
    };
    if(clicks >= 40){
        document.querySelector(".active__slider").style.transition = "0.6s";
    };
    if(clicks >= 60){
        document.querySelector(".active__slider").style.transition = "0.5s";
    };
    if(clicks >= 100){
        document.querySelector(".active__slider").style.transition = "0.3s";
    };
    if(clicks >= 600){
        document.querySelector(".winner__container").style.display = "flex";
        document.querySelector(".timer").style.display = "none";
    };
    if(document.querySelector(".winner__container").style.display == "flex" || document.querySelector(".end__container").style.display == "flex"){
        document.querySelector(".active__slider").classList.remove("active__swich__slider");
    }
    if(stTimer !== 0){
        stTimer = 3;
    };
    let kas = document.querySelectorAll(".clickR");
    for(let i = 0; i < kas.length; i++){
        kas[i].innerHTML = clicks;
    };
    
};

function repeated(){
    document.querySelector(".end__container").style.display = "none";
    document.querySelector(".winner__container").style.display = "none";
    document.querySelector(".click").innerHTML = "0";
    document.querySelector(".clickR").innerHTML = "0";
    document.querySelector(".timer").style.display = "block";
    stTimer = 2;
    if(stTimer > 9){
        document.querySelector(".timer").innerHTML = "0" + stTimerMinets + ":" + stTimer;
    }
    if(stTimer <= 9){
        document.querySelector(".timer").innerHTML = "0" + stTimerMinets + ":0" + stTimer;
    }
    clicks = 0;
};
