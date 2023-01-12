const rulesBtn = document.querySelector(".rules-btn");
const rulesModal = document.querySelector(".rules-modal");
const closeModal = document.querySelector(".close-modal");
const resultText = document.querySelector(".result h1");

const handOptions = {
  rock: "/images/Rock.png",
  paper: "/images/Paper.png",
  scissors: "/images/Scissors.png",
};

let currentScore = 0;

const pickUserHand = (hand) => {
  //   console.log(hand);

  // hide current page
  const hands = document.querySelector(".hands");
  hands.style.display = "none";

  // show next page
  const contest = document.querySelector(".contest");
  contest.style.display = "flex";

  // set what user pick
  document.querySelector("#userPickImg").src = handOptions[hand];

  let cpHand = pickComputerHand();

  referee(hand, cpHand);
};

const pickComputerHand = () => {
  let hand = ["rock", "paper", "scissors"];
  let cpHand = hand[Math.floor(Math.random() * 3)];
  document.querySelector("#computerPickImage").src = handOptions[cpHand];
  return cpHand;
};

const referee = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissors") {
    result("YOU LOSE!");
    score(currentScore - 1);
  }
  if (userHand == "paper" && cpHand == "rock") {
    result("YOU WIN!");
    score(currentScore + 1);
  }
  if (userHand == "paper" && cpHand == "paper") {
    result("It's a Draw!");
  }
  if (userHand == "rock" && cpHand == "scissors") {
    result("YOU WIN!");
    score(currentScore + 1);
  }
  if (userHand == "rock" && cpHand == "paper") {
    result("YOU LOSE!");
    score(currentScore - 1);
  }
  if (userHand == "rock" && cpHand == "rock") {
    result("It's a Draw!");
  }
  if (userHand == "scissors" && cpHand == "scissors") {
    result("It's a Draw!");
  }
  if (userHand == "scissors" && cpHand == "rock") {
    result("YOU LOSE!");
    score(currentScore - 1);
  }
  if (userHand == "scissors" && cpHand == "paper") {
    result("YOU WIN!");
    score(currentScore + 1);
  }
};

const result = (result) => {
  resultText.innerText = result;
  if (result == "YOU WIN!") {
    resultText.style.color = "#1ac90a";
  } else if (result == "YOU LOSE!") {
    resultText.style.color = "#dc2e4e";
  } else if (result == "It's a Draw!") {
    resultText.style.color = "white";
  }
};

const score = (score) => {
  if (score < 0) {
    score = 0;
  } else {
    currentScore = score;
  }
  document.querySelector(".score h1").innerText = score;
};

const resetGame = () => {
  const hands = document.querySelector(".hands");
  hands.style.display = "flex";

  // show next page
  const contest = document.querySelector(".contest");
  contest.style.display = "none";
};

// HANDLE RULES MODAL
rulesBtn.addEventListener("click", () => {
  rulesModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  rulesModal.style.display = "none";
});
