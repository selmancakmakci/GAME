

// ROCK PAPER SCISSORS

const questionsData = [
    {
        question: "Essere (Presente, IO)",
        answers: [
          { text: "SONO", isCorrect: true },
          { text: "SEI", isCorrect: false },
          { text: "SIETE", isCorrect: false },
          
        ],
      },
      {
        question: "Essere (Presente, TU)",
        answers: [
          { text: "SONO", isCorrect: false },
          { text: "SEI", isCorrect: true },
          { text: "SIETE", isCorrect: false },
          
        ],
      },
      {
        question: "Essere (Presente, LUI)",
        answers: [
          { text: "SIAMO", isCorrect: false },
          { text: "SEI", isCorrect: false },
          { text: "È", isCorrect: true },
          
        ],
      },
      {
        question: "Essere (Presente, NOI)",
        answers: [
          { text: "SIAMO", isCorrect: true },
          { text: "SEI", isCorrect: false },
          { text: "È", isCorrect: false },
          
        ],
      },
      {
        question: "Essere (Presente, VOI)",
        
        answers: [
          { text: "SIETE", isCorrect: true },
          { text: "SIAMO", isCorrect: false },
          { text: "SONO", isCorrect: false },
          
        ],
      },
      {
        question: "Essere (Presente, LORO)",
        answers: [
          { text: "SIAMO", isCorrect: false },
          { text: "SEI", isCorrect: false },
          { text: "SONO", isCorrect: true },
          
        ],
      },
]




const choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;
let winCount = 0;
let loseCount = 0;
let tieCount = 0;




function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let resultText = "";
    let isPlayerWinner = false;
    let backgroundColor = "";
    let backgroundImage = "";
    
    
   
    

    if(playerChoice === computerChoice) {
        resultText = "IT'S A TIE";
        /*backgroundImage = "url('https://img.freepik.com/free-vector/green-hand-drawn-partnership-clipart_53876-115985.jpg?w=1800&t=st=1706109633~exp=1706110233~hmac=11b6134faf39ff0e54995b92ee9a74390e1c268a46c41016dd5353b47c977194')"*/
        /*backgroundColor = "blue";*/
        tieCount++;
        
        setTimeout(function() {
            newDiv.remove();
        }, 1500);
        
    } else {
        switch(playerChoice) {
            case "rock":
                if(computerChoice === "scissors") {
                    resultText = "YOU WIN!";
                    isPlayerWinner = true;
                   /* backgroundColor =  "green"*/
                   /* backgroundImage = "url('https://img.freepik.com/free-psd/check-symbol-isolated_23-2150500363.jpg?w=1800&t=st=1706108056~exp=1706108656~hmac=7ea2ca25e65b12a82880445c71f1c34bb28f26453fb105b4195958188bff5ab5')"*/
                    winCount++;
                    
                    setTimeout(function() {
                        newDiv.remove();
                    }, 1500);
                    
                } else {
                    resultText = "YOU LOSE!";
                    
                    loseCount++;
                    
                }
                break;
            case "paper":
                if(computerChoice === "rock") {
                    resultText = "YOU WIN!";
                    isPlayerWinner = true;
                   /* backgroundColor = "green";*/
                   /* backgroundImage = "url('https://img.freepik.com/free-psd/check-symbol-isolated_23-2150500363.jpg?w=1800&t=st=1706108056~exp=1706108656~hmac=7ea2ca25e65b12a82880445c71f1c34bb28f26453fb105b4195958188bff5ab5')"*/
                    winCount++;
                    
                    setTimeout(function() {
                        newDiv.remove();
                    }, 1500);
                    
                } else {
                    resultText = "YOU LOSE!";
                    
                    loseCount++;
                }
                break;
            case "scissors":
                if(computerChoice === "paper") {
                    resultText = "YOU WIN!";
                    isPlayerWinner = true;
                   /* backgroundColor = "green";*/
                    /*backgroundImage = "url('https://img.freepik.com/free-psd/check-symbol-isolated_23-2150500363.jpg?w=1800&t=st=1706108056~exp=1706108656~hmac=7ea2ca25e65b12a82880445c71f1c34bb28f26453fb105b4195958188bff5ab5')"*/
                    
                    winCount++;
                    
                    setTimeout(function() {
                        newDiv.remove();
                    }, 1500);
                    
                } else {
                    resultText = "YOU LOSE!";
                    
                    loseCount++;
                }
                break;
        }
    }
    document.getElementById("winCount").textContent = "Wins: " + winCount;
    document.getElementById("loseCount").textContent = "Loses: " + loseCount;
    document.getElementById("tieCount").textContent = "Ties: " + tieCount;

    // Sonuçları göster
    document.getElementById("resultContainer").innerHTML = "";
    
    var newDiv = document.createElement("div");
    newDiv.id = "newDiv";

    var newP = document.createElement("p");
    newP.textContent = resultText;
    newDiv.appendChild(newP);
    document.getElementById("resultContainer").appendChild(newDiv);

    if (resultText === "YOU WIN!") {
        newP.style.color = "green";
    } else if (resultText === "YOU LOSE!") {
        newP.style.color = "none";
    } else if (resultText === "IT'S A TIE") {
        newP.style.color = "blue";
    }
  


    newDiv.style.backgroundColor = backgroundColor;
    newDiv.style.backgroundImage = backgroundImage;
    newDiv.style.backgroundSize = "cover";

    // Kaybetme durumunda loseModal'ı göster ve mainContent'i bulanıklaştır
    if (!isPlayerWinner && resultText === "YOU LOSE!") {
        createLoseModal();
        document.getElementById("resultContainer").classList.add("blur");
        document.getElementById("gameContainer").classList.add("blur");
    } else {
        removeLoseModal();
        document.getElementById("resultContainer").classList.remove("blur");
        document.getElementById("resultContainer").classList.remove("blur");
    }
}

function createLoseModal() {
    let modal = document.getElementById("loseModal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "loseModal";
        document.getElementById("container").appendChild(modal);
        // 100 milisaniye sonra opacity'yi 1 yap
    
    } else {
        modal.innerHTML = "";
    }

    const randomQuestionIndex = Math.floor(Math.random() * questionsData.length);
    const questionData = questionsData[randomQuestionIndex];

    const warningArea = document.createElement("h2")
    warningArea.textContent = `YOU LOSE!`
    modal.appendChild(warningArea)

    const warningText = document.createElement("h3")
    warningText.textContent = `"Please! Select the corrent answer to continue"`
    modal.appendChild(warningText)

    // Soruyu ekle
    const questionParagraph = document.createElement("p");
   
    
    questionParagraph.textContent = questionData.question;
    ;

    modal.appendChild(questionParagraph);

    // Cevapları ekle
    const answersList = document.createElement("ul");
    questionData.answers.forEach(answer => {
        const answerItem = document.createElement("li");
        answerItem.textContent = answer.text;
        answerItem.id = "answer"
        answerItem.onclick = function() { checkAnswer(answer.isCorrect, this, modal); };
        answersList.appendChild(answerItem);
    });
    modal.appendChild(answersList);

    modal.style.display = "block";
    
/*
    // Rastgele bir soru seç
    const randomQuestionIndex = Math.floor(Math.random() * questionsData.length);
    const questionData = questionsData[randomQuestionIndex];

    // Soruyu ve cevapları oluştur
    modal.innerHTML = "<p>" + questionData.question + "</p><ul>";
    questionData.answers.forEach(answer => {
        let li = document.createElement("li");
        li.textContent = answer.text;
        li.onclick = function() { checkAnswer(answer.isCorrect, modal); };
        modal.appendChild(li);
    });
    modal.innerHTML += "</ul>";

    modal.style.display = "block";
    *//*
    var container = document.getElementById("container");
    if (!document.getElementById("loseModal")) {
        var modal = document.createElement("div");
        modal.id = "loseModal";
        modal.innerHTML = "<p>Kaybettiniz!</p>";
        container.appendChild(modal);
    }
    document.getElementById("loseModal").style.display = "block";
    */
}
function checkAnswer(isCorrect, listItem, modal) {
    
    if (isCorrect) {
        listItem.style.backgroundColor = "green";
        setTimeout(function() {
            modal.style.display = "none";
            document.getElementById("resultContainer").classList.remove("blur");
            document.getElementById("gameContainer").classList.remove("blur");
            document.getElementById("resultContainer").innerHTML = "";
            // Oyuna devam etmek için gerekli diğer işlemler burada yapılabilir
        }, 600); // 2 saniye sonra bu işlemleri yap
    } else{
        listItem.style.backgroundColor = "red";
        setTimeout(function() {
            listItem.style.backgroundColor = ""; // Arka plan rengini sıfırla
            // Yanlış cevapla ilgili diğer işlemler burada yapılabilir
        }, 600); // 2 saniye sonra bu i
        
    }
        
     


    
    // Yanlış cevap seçildiğinde yapılacak işlemler burada olabilir
}


function removeLoseModal() {
    var modal = document.getElementById("loseModal");
    if (modal) {
        modal.style.display = "none";
    }
}



/*
function playGame (playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let resultText = "";
    let isPlayerWinner = false;

   
    if(playerChoice === computerChoice){
        resultText = "IT'S A TIE"
        }
       
        else{
            switch(playerChoice){
                case "rock":
                    resultText = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                    break;
                case "paper":
                    resultText = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                    break;
                case "scissors":
                    resultText = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                    break;
            }
        }

        if (!isPlayerWinner) {
            createLoseModal();
            document.getElementById("container").classList.add("blur");
        } else {
            removeLoseModal();
            document.getElementById("container").classList.remove("blur");
        }
        
        document.getElementById("resultContainer").innerHTML = "";
        var newDiv = document.createElement("div");
        newDiv.id = "newDiv"

    var newP = document.createElement("p");
    newP.textContent = resultText;
    newDiv.appendChild(newP);
    document.getElementById("resultContainer").appendChild(newDiv);

}


function createLoseModal() {
    if (!document.getElementById("loseModal")) {
        var modal = document.createElement("div");
        modal.id = "loseModal";
        modal.innerHTML = "<p>Kaybettiniz!</p>";
        document.body.appendChild(modal);
    } else {
        document.getElementById("loseModal").style.display = "block";
    }
}

function removeLoseModal() {
    var modal = document.getElementById("loseModal");
    if (modal) {
        modal.style.display = "none";
    }
}

*/

const buttons = document.getElementsByClassName("buttonClass");
for (let button of buttons) {
    button.addEventListener("click", function() {
        var button = this;
        button.classList.add("clicked");
         setTimeout(function(){
        button.classList.remove("clicked");
    }, 130);
        playGame(this.dataset.choice);
    });


}

/*
const tieAndWinReset = document.getElementById("mainContainer");
tieAndWinReset.addEventListener("click", function () {
   tieAndWinReset.innerHTML = "";
})

*/
