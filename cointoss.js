let button = document.getElementsByClassName("button");
let heads = 1;
let tails = 0;

button.addEventListener('click',flipCoin);

function flipCoin(){

    const showFlip=document.getElementById("result");
    const result = document.querySelector("#coin");
    const toss = Math.round(Math.random());
    
    coin.style.animation="spin 1s ease-in-out";
    setTimeout(()=>{
        coin.style.animation="";
        if (toss === 1){
            fadeOut();
            coin.src = "images/snoopyCoinHeads.jpg";
            fadeIn();
            // result.style.backgroundImage = "url('images/snoopy1.jpg')";
            showFlip.innerText = "Heads";
        }else{
            fadeOut();
            coin.src = "images/woodstockTails.jpg";
            fadeIn();
            // result.style.backgroundImage = "images/snoopy2.jpg";
            showFlip.innerText="Tails";
        }
    }, 1000);

}

function fadeOut(){
    var image = document.getElementById('coin');
    image.classList.add('fadeOut');
}
function fadeIn(){
    var image = document.getElementById('coin');
    image.classList.remove('fadeOut');
}