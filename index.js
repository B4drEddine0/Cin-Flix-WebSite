const films = document.querySelector('.films');
// { transform: `translateX(-${(100 / totalMovies) * (totalMovies / 2)}%)` } bach 7sebna width d cards li aytscrollaw 9bel mtji part 2 for smoothness
let animation;

function animateFilms() {
    
               animation = films.animate(
                [
                    { transform: `translateX(0%)` },
                    { transform: `translateX(-50%)` }
                ],
                {
                    duration: 40000,
                    iterations: Infinity,
                }
            );   
    
}

animateFilms();


function moveLeft() {
    
    animation.pause();
    films.scrollBy({
        top:0,
        left:-184,
        behavior:"smooth"
    });
    setTimeout(5000,animateFilms());
}

function moveRight() {
    animation.pause();
    films.scrollBy({
        top:0,
        left:184,
        behavior:"smooth"
    });
    setTimeout(5000,animateFilms());
}

document.getElementById('prevBtn').addEventListener('click', moveLeft);
document.getElementById('nextBtn').addEventListener('click', moveRight);
/*********************************************************************************************** */

const input = document.getElementById('search'); 
const card = document.querySelectorAll('.movie-card');

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

