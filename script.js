// ROCK PAPER SCISSORS

const questionsData = [
  {
    question: "ESSERE  (Presente, IO)",
    answers: [
      { text: "SONO", isCorrect: true },
      { text: "SEI", isCorrect: false },
      { text: "SIETE", isCorrect: false },
    ],
  },
  {
    question: "ESSERE  (Presente, TU)",
    answers: [
      { text: "SONO", isCorrect: false },
      { text: "SEI", isCorrect: true },
      { text: "SIETE", isCorrect: false },
    ],
  },
  {
    question: "ESSERE  (Presente, LUI)",
    answers: [
      { text: "SIAMO", isCorrect: false },
      { text: "SEI", isCorrect: false },
      { text: "È", isCorrect: true },
    ],
  },
  {
    question: "ESSERE  (Presente, NOI)",
    answers: [
      { text: "SIAMO", isCorrect: true },
      { text: "SEI", isCorrect: false },
      { text: "È", isCorrect: false },
    ],
  },
  {
    question: "ESSERE  (Presente, VOI)",

    answers: [
      { text: "SIETE", isCorrect: true },
      { text: "SIAMO", isCorrect: false },
      { text: "SONO", isCorrect: false },
    ],
  },
  {
    question: "ESSERE (Presente, LORO)",
    answers: [
      { text: "SIAMO", isCorrect: false },
      { text: "SEI", isCorrect: false },
      { text: "SONO", isCorrect: true },
    ],
  },
  {
    question: "AVERE (Presente, IO)",
    answers: [
      { text: "HO", isCorrect: true },
      { text: "HAI", isCorrect: false },
      { text: "HANNO", isCorrect: false },
    ],
  },
  {
    question: "AVERE (Presente, TU)",
    answers: [
      { text: "HO", isCorrect: false },
      { text: "HAI", isCorrect: true },
      { text: "HA", isCorrect: false },
    ],
  },
  {
    question: "AVERE (Presente, LUI/LEI)",
    answers: [
      { text: "HAI", isCorrect: false },
      { text: "HO", isCorrect: false },
      { text: "HA", isCorrect: true },
    ],
  },
  {
    question: "AVERE (Presente, NOI)",
    answers: [
      { text: "ABBIAMO", isCorrect: true },
      { text: "AVETE", isCorrect: false },
      { text: "HANNO", isCorrect: false },
    ],
  },
  {
    question: "AVERE(Presente, VOI)",
    answers: [
      { text: "ABBIAMO", isCorrect: false },
      { text: "AVETE", isCorrect: true },
      { text: "HANNO", isCorrect: false },
    ],
  },
  {
    question: "AVERE (Presente, LORO)",
    answers: [
      { text: "HANNO", isCorrect: true },
      { text: "HA", isCorrect: false },
      { text: "HAI", isCorrect: false },
    ],
  },
  {
    question: "ANDARE (Presente, IO)",
    answers: [
      { text: "VADO", isCorrect: true },
      { text: "VAI", isCorrect: false },
      { text: "VANNO", isCorrect: false },
    ],
  },
  {
    question: "ANDARE (Presente, TU)",
    answers: [
      { text: "VI", isCorrect: false },
      { text: "VAI", isCorrect: true },
      { text: "VA", isCorrect: false },
    ],
  },
  {
    question: "ANDARE (Presente, LUI/LEI)",
    answers: [
      { text: "VAI", isCorrect: false },
      { text: "VO", isCorrect: false },
      { text: "VA", isCorrect: true },
    ],
  },
  {
    question: "ANDARE (Presente, NOI)",
    answers: [
      { text: "ANDIAMO", isCorrect: true },
      { text: "ANDATE", isCorrect: false },
      { text: "VANNO", isCorrect: false },
    ],
  },
  {
    question: "ANDARE (Presente, VOI)",
    answers: [
      { text: "ANDIAMO", isCorrect: false },
      { text: "ANDATE", isCorrect: true },
      { text: "VANNO", isCorrect: false },
    ],
  },
  {
    question: "ANDARE (Presente, LORO)",
    answers: [
      { text: "VANNO", isCorrect: true },
      { text: "VA", isCorrect: false },
      { text: "VAI", isCorrect: false },
    ],
  },
  {
    question: "VENIRE (Presente, IO)",
    answers: [
      { text: "VENGO", isCorrect: true },
      { text: "VIENI", isCorrect: false },
      { text: "VENGONO", isCorrect: false },
    ],
  },
  {
    question: "VENIRE (Presente, TU)",
    answers: [
      { text: "VENGO", isCorrect: false },
      { text: "VIENI", isCorrect: true },
      { text: "VIENE", isCorrect: false },
    ],
  },
  {
    question: "VENIRE (Presente, LUI/LEI)",
    answers: [
      { text: "VIENI", isCorrect: false },
      { text: "VENGO", isCorrect: false },
      { text: "VIENE", isCorrect: true },
    ],
  },
  {
    question: "VENIRE (Presente, NOI)",
    answers: [
      { text: "VENIAMO", isCorrect: true },
      { text: "VENITE", isCorrect: false },
      { text: "VENGONO", isCorrect: false },
    ],
  },
  {
    question: "VENIRE (Presente, VOI)",
    answers: [
      { text: "VENIAMO", isCorrect: false },
      { text: "VENITE", isCorrect: true },
      { text: "VENGONO", isCorrect: false },
    ],
  },
  {
    question: "VENIRE (Presente, LORO)",
    answers: [
      { text: "VENGONO", isCorrect: true },
      { text: "VIENE", isCorrect: false },
      { text: "VIENI", isCorrect: false },
    ],
  },
  {
    question: "FARE (Presente, IO)",
    answers: [
      { text: "FACCIO", isCorrect: true },
      { text: "FAI", isCorrect: false },
      { text: "FANNO", isCorrect: false },
    ],
  },
  {
    question: "FARE (Presente, TU)",
    answers: [
      { text: "FACCIO", isCorrect: false },
      { text: "FAI", isCorrect: true },
      { text: "FA", isCorrect: false },
    ],
  },
  {
    question: "FARE (Presente, LUI/LEI)",
    answers: [
      { text: "FAI", isCorrect: false },
      { text: "FACCIO", isCorrect: false },
      { text: "FA", isCorrect: true },
    ],
  },
  {
    question: "FARE (Presente, NOI)",
    answers: [
      { text: "FAREMO", isCorrect: false },
      { text: "FACCIAMO", isCorrect: true },
      { text: "FANNO", isCorrect: false },
    ],
  },
  {
    question: "FARE (Presente, VOI)",
    answers: [
      { text: "FACCIAMO", isCorrect: false },
      { text: "FATE", isCorrect: true },
      { text: "FANNO", isCorrect: false },
    ],
  },
  {
    question: "FARE (Presente, LORO)",
    answers: [
      { text: "FANNO", isCorrect: true },
      { text: "FA", isCorrect: false },
      { text: "FAI", isCorrect: false },
    ],
  },
  {
    question: "DARE (Presente, IO)",
    answers: [
      { text: "DO", isCorrect: true },
      { text: "DAI", isCorrect: false },
      { text: "DANNO", isCorrect: false },
    ],
  },
  {
    question: "DARE (Presente, TU)",
    answers: [
      { text: "DO", isCorrect: false },
      { text: "DAI", isCorrect: true },
      { text: "DA", isCorrect: false },
    ],
  },
  {
    question: "DARE (Presente, LUI)",
    answers: [
      { text: "DAI", isCorrect: false },
      { text: "DO", isCorrect: false },
      { text: "DA", isCorrect: true },
    ],
  },
  {
    question: "DARE (Presente, NOI)",
    answers: [
      { text: "DIAMO", isCorrect: true },
      { text: "DATE", isCorrect: false },
      { text: "DANNO", isCorrect: false },
    ],
  },
  {
    question: "DARE (Presente, VOI)",
    answers: [
      { text: "DIAMO", isCorrect: false },
      { text: "DATE", isCorrect: true },
      { text: "DANNO", isCorrect: false },
    ],
  },
  {
    question: "DARE (Presente, LORO)",
    answers: [
      { text: "DANNO", isCorrect: true },
      { text: "DA", isCorrect: false },
      { text: "DAI", isCorrect: false },
    ],
  },
  {
    question: "STARE (Presente, IO)",
    answers: [
      { text: "STO", isCorrect: true },
      { text: "STAI", isCorrect: false },
      { text: "STANNO", isCorrect: false },
    ],
  },
  {
    question: "STARE (Presente, TU)",
    answers: [
      { text: "STO", isCorrect: false },
      { text: "STAI", isCorrect: true },
      { text: "STA", isCorrect: false },
    ],
  },
  {
    question: "STARE (Presente, LUI/LEI)",
    answers: [
      { text: "STAI", isCorrect: false },
      { text: "STO", isCorrect: false },
      { text: "STA", isCorrect: true },
    ],
  },
  {
    question: "STARE (Presente, NOI)",
    answers: [
      { text: "STIAMO", isCorrect: true },
      { text: "STATE", isCorrect: false },
      { text: "STANNO", isCorrect: false },
    ],
  },
  {
    question: "STARE (Presente, VOI)",
    answers: [
      { text: "STIAMO", isCorrect: false },
      { text: "STATE", isCorrect: true },
      { text: "STANNO", isCorrect: false },
    ],
  },
  {
    question: "STARE (Presente, LORO)",
    answers: [
      { text: "STANNO", isCorrect: true },
      { text: "STA", isCorrect: false },
      { text: "STAI", isCorrect: false },
    ],
  },
  {
    question: "DIRE (Presente, IO)",
    answers: [
      { text: "DICO", isCorrect: true },
      { text: "DICI", isCorrect: false },
      { text: "DICONO", isCorrect: false },
    ],
  },
  {
    question: "DIRE (Presente, TU)",
    answers: [
      { text: "DICO", isCorrect: false },
      { text: "DICI", isCorrect: true },
      { text: "DICE", isCorrect: false },
    ],
  },
  {
    question: "DIRE (Presente, LUI/LEI)",
    answers: [
      { text: "DICI", isCorrect: false },
      { text: "DICO", isCorrect: false },
      { text: "DICE", isCorrect: true },
    ],
  },
  {
    question: "DIRE (Presente, NOI)",
    answers: [
      { text: "DIAMO", isCorrect: false },
      { text: "DIAMO", isCorrect: true },
      { text: "DICONO", isCorrect: false },
    ],
  },
  {
    question: "DIRE (Presente, VOI)",
    answers: [
      { text: "DIAMO", isCorrect: false },
      { text: "DITE", isCorrect: true },
      { text: "DICONO", isCorrect: false },
    ],
  },
  {
    question: "DIRE (Presente, LORO)",
    answers: [
      { text: "DICONO", isCorrect: true },
      { text: "DICE", isCorrect: false },
      { text: "DICI", isCorrect: false },
    ],
  },
  {
    question: "USCIRE (Presente, IO)",
    answers: [
      { text: "ESCO", isCorrect: true },
      { text: "ESCI", isCorrect: false },
      { text: "ESCONO", isCorrect: false },
    ],
  },
  {
    question: "USCIRE (Presente, TU)",
    answers: [
      { text: "ESCO", isCorrect: false },
      { text: "ESCI", isCorrect: true },
      { text: "ESCE", isCorrect: false },
    ],
  },
  {
    question: "USCIRE (Presente, LUI/LEI)",
    answers: [
      { text: "ESCI", isCorrect: false },
      { text: "ESCO", isCorrect: false },
      { text: "ESCE", isCorrect: true },
    ],
  },
  {
    question: "USCIRE (Presente, NOI)",
    answers: [
      { text: "USCIAMO", isCorrect: true },
      { text: "USCITE", isCorrect: false },
      { text: "ESCONO", isCorrect: false },
    ],
  },
  {
    question: "USCIRE (Presente, VOI)",
    answers: [
      { text: "USCIAMO", isCorrect: false },
      { text: "USCITE", isCorrect: true },
      { text: "ESCONO", isCorrect: false },
    ],
  },
  {
    question: "USCIRE (Presente, LORO)",
    answers: [
      { text: "ESCONO", isCorrect: true },
      { text: "ESCE", isCorrect: false },
      { text: "ESCI", isCorrect: false },
    ],
  },
];

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

  if (playerChoice === computerChoice) {
    resultText = "IT'S A TIE";
    // backgroundImage = "url('https://img.freepik.com/free-vector/green-hand-drawn-partnership-clipart_53876-115985.jpg?w=1800&t=st=1706109633~exp=1706110233~hmac=11b6134faf39ff0e54995b92ee9a74390e1c268a46c41016dd5353b47c977194')"
    backgroundColor = "rgb(59, 99, 133)";
    tieCount++;

    setTimeout(function () {
      newDiv.remove();
    }, 1500);
  } else {
    switch (playerChoice) {
      case "rock":
        if (computerChoice === "scissors") {
          resultText = "YOU WIN!";
          isPlayerWinner = true;
          backgroundColor = "rgb(38, 152, 76)";
          //backgroundImage = "url('https://img.freepik.com/free-vector/circle-tick-check-mark-paint-brush-stroke_78370-645.jpg?w=1800&t=st=1706122774~exp=1706123374~hmac=9a16cf788d4d617901ee43a03f95421034b67caa4fbf23e202691f54df8d2c6a')"
          winCount++;
          updateWinCount(winCount);

          setTimeout(function () {
            newDiv.remove();
          }, 1500);
        } else {
          resultText = "YOU LOSE!";

          loseCount++;
        }
        break;
      case "paper":
        if (computerChoice === "rock") {
          resultText = "YOU WIN!";
          isPlayerWinner = true;
          backgroundColor = "rgb(38, 152, 76)";
          //backgroundImage = "url('https://img.freepik.com/free-vector/circle-tick-check-mark-paint-brush-stroke_78370-645.jpg?w=1800&t=st=1706122774~exp=1706123374~hmac=9a16cf788d4d617901ee43a03f95421034b67caa4fbf23e202691f54df8d2c6a')"
          winCount++;
          updateWinCount(winCount);

          setTimeout(function () {
            newDiv.remove();
          }, 1500);
        } else {
          resultText = "YOU LOSE!";

          loseCount++;
        }
        break;
      case "scissors":
        if (computerChoice === "paper") {
          resultText = "YOU WIN!";
          isPlayerWinner = true;
          backgroundColor = "rgb(38, 152, 76)";
          // backgroundImage = "url('https://img.freepik.com/free-vector/circle-tick-check-mark-paint-brush-stroke_78370-645.jpg?w=1800&t=st=1706122774~exp=1706123374~hmac=9a16cf788d4d617901ee43a03f95421034b67caa4fbf23e202691f54df8d2c6a')"

          winCount++;
          updateWinCount(winCount);

          setTimeout(function () {
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

  const warningArea = document.createElement("h2");
  warningArea.textContent = `YOU LOSE!`;
  modal.appendChild(warningArea);

  const warningText = document.createElement("h3");
  warningText.textContent = `"Please! Select the correct answer to continue"`;
  modal.appendChild(warningText);

  // Soruyu ekle
  const questionParagraph = document.createElement("p");

  questionParagraph.textContent = questionData.question;
  modal.appendChild(questionParagraph);

  // Cevapları ekle
  const answersList = document.createElement("ul");
  questionData.answers.forEach((answer) => {
    const answerItem = document.createElement("li");
    answerItem.textContent = answer.text;
    answerItem.id = "answer";
    answerItem.onclick = function () {
      checkAnswer(answer.isCorrect, this, modal);
    };
    answersList.appendChild(answerItem);
  });
  modal.appendChild(answersList);

  modal.style.display = "block";
}
function checkAnswer(isCorrect, listItem, modal) {
  if (isCorrect) {
    listItem.style.backgroundColor = "green";
    setTimeout(function () {
      modal.style.display = "none";
      document.getElementById("resultContainer").classList.remove("blur");
      document.getElementById("gameContainer").classList.remove("blur");
      document.getElementById("resultContainer").innerHTML = "";
      // Oyuna devam etmek için gerekli diğer işlemler burada yapılabilir
    }, 600); // 2 saniye sonra bu işlemleri yap
  } else {
    listItem.style.backgroundColor = "red";
    setTimeout(function () {
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

const buttons = document.getElementsByClassName("buttonClass");
for (let button of buttons) {
  button.addEventListener("click", function () {
    var button = this;
    button.classList.add("clicked");
    setTimeout(function () {
      button.classList.remove("clicked");
    }, 130);
    playGame(this.dataset.choice);
  });
}

function updateWinCount(newWinCount) {
  document.getElementById("winCount").innerText = "Wins: " + newWinCount;

  if (newWinCount % 5 === 0) {
    showCelebration(newWinCount);
  }
}

function showCelebration(winCount) {
  // counterContainer içindeki tüm çocuk elementleri bul
  const children = document.getElementById("counterContainer").children;

  // Tüm çocukları geçici olarak gizle
  for (let child of children) {
    if (child.id !== "celebrationMessage") {
      child.style.display = "none";
    }
  }

  // Kutlama mesajını bul, güncelle ve göster
  const message = document.getElementById("celebrationMessage");
  message.innerText = "🎉 CONGRATULATIONS " + winCount + " WINS! 🎉 ";
  message.style.display = "block";

  // Belirli bir süre sonra, kutlama mesajını gizle ve diğer içerikleri tekrar göster
  setTimeout(() => {
    message.style.display = "none";
    for (let child of children) {
      if (child.id !== "celebrationMessage") {
        child.style.display = "block";
      }
    }
  }, 2500);
  confetti({
    particleCount: 550,
    spread: 100,
    ticks: 200,
    origin: { y: 0.2 },
  });
}
