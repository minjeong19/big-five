const startbtn = document.querySelector(".start"); //시작버튼
const homebtn = document.querySelector(".home"); //홈버튼
const backbtn = document.querySelector(".back"); //뒤로가기
const content = document.querySelector(".content"); //시작페이지
const qna = document.querySelector(".qna"); //질문페이지
const firstQuestion = document.querySelector("#question1"); //첫번째 질문
const secondQuestion = document.querySelector(".qna+.hide"); //두번째 질문
const qBox = document.querySelectorAll(".qBox");
const h2 = document.querySelector("h2");

//STATUSBAR
const questionStatus = document.querySelector(".question-status");

const endPoint = 60;
const qList = [
  "나는 상상력이 풍부하다.",
  "나는 아이디어를 떠올리는 일을 즐긴다.",
  "나는 몽상에 빠지는 것을 즐긴다.",
  "나는 생각에 잠기는 것을 좋아한다.",
  "나는 예술적 경험을 중요하게 생가한다.",
];

// BUTTON
startbtn.addEventListener("pointerdown", function () {
  startbtn.setAttribute("src", "./img/start-touch.png");
});

startbtn.addEventListener("pointerup", function () {
  startbtn.setAttribute("src", "./img/start.png");
});

homebtn.addEventListener("pointerdown", function () {
  homebtn.setAttribute("src", "./img/home-touch.png");
});

homebtn.addEventListener("pointerup", function () {
  homebtn.setAttribute("src", "./img/home.png");
});

backbtn.addEventListener("pointerdown", function () {
  backbtn.setAttribute("src", "./img/back-touch.png");
});

backbtn.addEventListener("pointerup", function () {
  backbtn.setAttribute("src", "./img/back.png");
});

//START눌렀을 때
startbtn.addEventListener("click", function () {
  homebtn.classList.add("hide"); //집모양 숨기고
  backbtn.classList.remove("hide"); //뒤로가기모양 나타나기
  content.classList.add("hide"); // 시작하는 페이지 숨기고
  qna.classList.remove("hide"); // 질문페이지 활성화
  questionStatus.classList.remove("hide");
  firstQuestion.classList.add("on");
  firstQuestion.classList.remove("hide");
  secondQuestion.classList.add("next");
  secondQuestion.classList.remove("hide");
  h2.innerText = `Qestion 1`;
});

//다음페이지
let answerArr = new Array(60);
let currentPage = 0;

//질문 넣기
//애초에 있어야 하기 때문에 함수로 쓸 필요가 없음
for (let i = 0; i < qList.length; i++) {
  qBox[i].innerText = qList[i];
  console.log(qList[i]);
}

function goNext(t) {
  const prev = document.querySelector(".prev");
  const on = document.querySelector(".on");
  const next = document.querySelector(".next");
  const nextQna = document.querySelector(".next+.hide");

  console.log(t);

  if (prev !== null) {
    prev.classList.add("hide");
    prev.classList.remove("prev");
  }

  if (on !== null) {
    on.classList.add("prev");
    on.classList.remove("on");
  }
  if (next !== null) {
    next.classList.add("on");
    next.classList.remove("next");
  }
  if (nextQna !== null) {
    nextQna.classList.add("next");
    nextQna.classList.remove("hide");
  }

  //헤더 내용바꾸기
  questionStatus.querySelector(".progress-bar").value++;
  currentPage = questionStatus.querySelector(".progress-bar").value;
  document.querySelector(".current-percentage").style.width = `${
    20 * currentPage
  }%`;
  questionStatus.querySelector(
    ".question-count"
  ).innerText = `${currentPage}/${qList.length}`;

  // 배열에 사용자 입력 값 받아오기
  answerArr[currentPage - 1] = Number(t.value);

  // 마지막 페이지일때
  if (currentPage === 40) {
    getResult();
    return;
  }

  // 제목 변경
  h2.innerText = `Qestion ${currentPage + 1}`;
}

//이전페이지
function goPrev() {
  const prevQna = document.querySelector(`.qna:nth-child(${currentPage - 1})`);
  const prev = document.querySelector(".prev");
  const on = document.querySelector(".on");
  const next = document.querySelector(".next");
  console.log(currentPage);
  console.log(prevQna);
  if (currentPage === 0) {
    // goIntroPage();
    return;
  }

  if (prevQna !== null) {
    prevQna.classList.add("prev");
    prevQna.classList.remove("hide");
  }
  if (prev !== null) {
    prev.classList.add("on");
    prev.classList.remove("prev");
  }
  if (on !== null) {
    on.classList.add("next");
    on.classList.remove("on");
  }
  if (next !== null) {
    next.classList.add("hide");
    next.classList.remove("next");
  }

  //프로그레스 바 애니메이션
  questionStatus.querySelector(".progress-bar").value--;
  currentPage = questionStatus.querySelector(".progress-bar").value;
  document.querySelector(".current-percentage").style.width = `${
    20 * currentPage
  }%`;
  h2.innerText = `Qestion ${currentPage + 1}`;
  questionStatus.querySelector(
    ".question-count"
  ).innerText = `${currentPage}/${qList.length}`;
}

backbtn.addEventListener("click", goPrev);
