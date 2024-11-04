const films = document.querySelector('.films');
// { transform: `translateX(-${(100 / totalMovies) * (totalMovies / 2)}%)` } bach 7sebna width d cards li aytscrollaw 9bel mtji part 2 for smoothness


function animateFilms() {
    
                films.animate(
                [
                    { transform: `translateX(0%)` },
                    { transform: `translateX(-50%)` }
                ],
                {
                    duration: 30000,
                    iterations: Infinity,
                }
            );   
    
}

animateFilms();
/*********************************************************************************************** */

const input = document.getElementById('search'); 
const card = document.querySelectorAll('.crd');

function liveSearch(){
    for(let i=0;i<card.length;i++){
        if(card[i].innerText.toLowerCase().includes(input.value.toLowerCase())){
            card[i].classList.remove("hidden");
        }else{
            card[i].classList.add("hidden");
        }
    }
}

input.addEventListener("keyup",function(){
    liveSearch();
})

/*************************************************************************************************** */
const ham = document.querySelector('.hamburger');
const hammm = document.querySelector('.hammm');

ham.addEventListener('click',function(){
    if(hammm.className==='hammm'){
        hammm.classList.add('x');
    }else{
         hammm.classList.remove('x');
    }
   
})