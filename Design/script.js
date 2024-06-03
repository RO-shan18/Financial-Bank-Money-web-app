
function main(){

let container = document.querySelector(".contain img");
container.insertAdjacentHTML('beforebegin', '<img src="images/hamburger.svg" class="hamburger"/>');

let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", ()=>{
    document.querySelector(".beforenavigation").style.display = "flex";
})

let cross = document.querySelector(".beforenavigation img");

cross.addEventListener("click", ()=>{
    document.querySelector(".beforenavigation").style.display = "none";
});

}

main();
