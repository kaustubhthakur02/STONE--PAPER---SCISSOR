let userScore = 0;
let compScore = 0;
const finalMsg = document.querySelector(".msg");
console.log(finalMsg)

const userFinal = document.getElementById("1")
console.log(userFinal)

const compFinal = document.getElementById("2")
console.log(compFinal)

const genCompChoice = ()=>{
    const options = ["rock", "paper", "scissor"]
    const random = Math.floor(Math.random() * 3);
    return options[random];
}

const gameWinner = (userchoice,compchoice) =>{
    if (userchoice == compchoice){
        console.log("Draw")
        finalMsg.innerText = "It's Draw, Play Again!!";
        finalMsg.style.backgroundColor = "Blue";
    }
    else if(userchoice == "rock" && compchoice == "paper"){
        console.log("Player wins!!")
        userScore = userScore + 1;
        userFinal.innerHTML = userScore;
        finalMsg.innerText = `Player Wins, Your Choice was ${userchoice} and computer Choice was ${compchoice}`;
        finalMsg.style.backgroundColor = "Green";
    }
    else if(userchoice == "paper" && compchoice == "rock"){
        console.log("Computer wins!!")
        compScore = compScore + 1;
        compFinalFinal.innerHTML = compScore;
        finalMsg.innerText = `Computer Wins, Computer choice was ${compchoice} and user choice was ${userchoice}`
        finalMsg.style.backgroundColor = "Red";
    }
    else if(userchoice == "scissor" && compchoice == "paper"){
        console.log("Player wins!!")
        userScore = userScore + 1;
        userFinal.innerHTML = userScore;
        finalMsg.innerText = `Player Wins, Your Choice was ${userchoice} and computer Choice was ${compchoice}`;
        finalMsg.style.backgroundColor = "Green";
    }
    else if(userchoice == "scissor" && compchoice == "paper"){
        console.log("Player wins!!")
        userScore = userScore + 1;
        userFinal.innerHTML = userScore;
        finalMsg.innerText = `Player Wins, Your Choice was ${userchoice} and computer Choice was ${compchoice}`;
        finalMsg.style.backgroundColor = "Green";
    }
    else if(userchoice == "paper" && compchoice == "scissor"){
        console.log("Computer wins!!")
        compScore = compScore + 1;
        compFinal.innerHTML = compScore;
        finalMsg.innerText = `Computer Wins, Computer choice was ${compchoice} and user choice was ${userchoice}`
        finalMsg.style.backgroundColor = "Red";
    }
    else if(userchoice == "rock" && compchoice == "scissor"){
        console.log("Player wins!!")
        userScore = userScore + 1;
        userFinal.innerHTML = userScore;
        finalMsg.innerText = `Player Wins, Your Choice was ${userchoice} and computer Choice was ${compchoice}`;
        finalMsg.style.backgroundColor = "Green";
    }
}

const choice = document.querySelectorAll('.img');
choice.forEach((img) => {
    img.addEventListener("click", () => {
        const userchoice = img.getAttribute("id");
        console.log("User Choice:", userchoice);
        const compchoice = genCompChoice();
        console.log("Computer Choice:", compchoice);
        gameWinner(userchoice,compchoice);
    });
});
