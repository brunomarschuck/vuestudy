// 일반 함수로 작성
function gonggolook() {
  // 공고보기를 누른 후 파일을 확인한 학교의 갯수를 반영합니다

  // numlook 객체를 가져옵니다
  let numlook = document.querySelector("#numlook");

  // numlook 객체에서 현재 횟수를 가져옵니다
  const nowlook = numlook.innerText;

  // numlook 객체에 현재 횟수에 1을 더해 반영합니다
  numlook.innerText = Number(nowlook) + 1;
}
