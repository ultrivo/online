const start = document.querySelector("#start");
const form = document.querySelector("form");
const submit = document.querySelector("#Submit");
const userNum  = document.querySelector("#userNum");
const info = document.querySelector("#info");
const guesses = document.querySelector("#guessLeft");
const playAgain = document.querySelector("#restart");
const body = document.querySelector("body");

let guessLeft = 5;
start.addEventListener("click", () => {
    form.style.display = "flex";
    start.style.display = "none";
    const randomNum = parseInt(((Math.random() * 9)+1));

    // after submitting
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        guessLeft --;
        guesses.innerHTML = guessLeft;
        let guessedNum = userNum.value;
        
        if(guessLeft == 0 && guessedNum == randomNum){
            info.innerHTML = "You Won!";
             alert(`Coupon valid for 1 hour. Copy Coupon Code 10 and paste it at the checkout`);
             window.location.href = '1.html';
	     //won();

        }else if(guessLeft == 0){
            alert(`You lost, the number was ${randomNum}`);
            window.location.href = '1.html';
        }
        if(guessedNum.length == 0){
            info.innerHTML = "Type some number, you are wasting your guesses.";
        }else if(guessedNum == randomNum){
            info.innerHTML = "You Won!";
            won();
        }else if(guessedNum > randomNum){
            info.innerHTML = `Wrong, aim for some lower number. <br> Only ${guessLeft} Guesses are left.`;
        }else if(guessedNum < randomNum){
            info.innerHTML = `Wrong, aim for some higher number. <br> Only ${guessLeft} Guesses are left.`;
        } 
    });
});

won = () => {
    playAgain.style.display = "block";
    userNum.style.display = "none";
    submit.style.display = "none";
    body.classList.add("youWon");
}

/*function redirectToPage() {
    window.location.href = '1.html';
}*/
    
playAgain.addEventListener("click", function(){
    window.location.href = '1.html';
});