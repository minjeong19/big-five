const main = document.querySelector(".content");
const qna = document.querySelector(".qna");
const endPoint = 2;

const qList = [
  {
    q: "나는 나의 생각을 말할 수 있다",
  },
  {
    q: "나는 하루가 즐겁다",
  },
];

function addAnswer(qIdx) {
  const aBox = document.querySelectorAll('input[type="radio"]');
  aBox.addEventListener("click", function () {
    for (let i = 0; i < aBox.length; i++) {
      aBox[i].disabled = true;
    }
    setTimeout(() => {
      for (let i = 0; i < aBox.length; i++) {
        aBox[i].style.display = "none";
      }
      goNext(++qIdx);
    }, 450);
  });
}

//질문&대답 가져오기
function goNext(qIdx) {
  let q = document.querySelector(".qBox");
  q.innerHTML = qList[qIdx].q;
}

// 시작하기 버튼 누르면 질문페이지 나옴
function begin() {
  main.style.display = "none";
  qna.style.display = "block";

  setTimeout(() => {
    let qIdx = 0;
    goNext(qIdx);
  });
}
