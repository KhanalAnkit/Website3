let text = document.querySelector("#span");
let image = document.querySelector(".image");
let indi = document.querySelector("#indicator");
let score = document.querySelector("#score");
let a=0;
function gen(){
   score.value=++a;
    let number = Math.floor(Math.random()*10);
    if(number %2==0){
        text.innerHTML="Heads!";
        text.style.color='yellow';
        image.style.background='red';
        image.style.background='url(heads.jpg)';
        image.style.backgroundRepeat='no-repeat';
        image.style.objectFit='fill';
        image.style.backgroundSize='100%';
        
    }
    else{
        text.innerHTML="Tails!";
        text.style.color='cyan';
        image.style.background='url(tails.jpg)';
        image.style.backgroundRepeat='no-repeat';
        image.style.objectFit='fill';
        image.style.backgroundSize='100%';
        
    }
    
}
 