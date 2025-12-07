// let age1 = 20;
// let go = 0;
// if (age1 >= 18) {
//   go = "성인입니다."
// } else if (age >= 15) {
//   go = "청소년입니다."
// } else {
//   go = "어르신입니다."
// }

// let number1 = -5;
// if (number1 > 0) {
//   console.log("양수입니다.")
// } else if (number1 < 0) {
//   console.log("음수입니다.");
// } else {
//   console.log("0입니다.")
// }

// let score = 85;
// if (score >= 90) {
//   console.log("A등급");
// } else if (score >= 85) {
//   console.log("B등급");
// } else if (score => 80) {
//   console.log("C등급");
// } else {
//   console.log("D등급");
// }

// const temperature = 32;
// if (temperature >= 30) {
//     console.log("매우 더워요. 시원한 곳에 계세요.");
// } else if (temperature >= 20) {
//     console.log("적당한 날씨입니다.");
// } else if (temperature >= 10) {
//     console.log("쌀쌀해요. 겉옷을 챙기세요.");
// } else {
//     console.log("춥습니다. 따뜻하게 입으세요.");
// }

// let number2 = 7;
// if (number2 % 2 === 0) {
//     console.log(number2 + "는 짝수입니다.");
// } else {
//     console.log(number2 + "는 홀수입니다.");
// }

// 문제 1
// const userId = "admin";
// const userPassword = "1234";
// if (userId === "admin" && userPassword === "1234") {
//     console.log("관리자 로그인 성공!");
// } else {
//     console.log("비밀번호가 틀렸습니다.");
// }

// 문제 2
// let month = 3;
// if (month >= 3 && month <= 5) {
//     console.log("3월 ~ 5월: 봄입니다.");
// } else if (month >= 6 && month <= 8) {
//     console.log("6월 ~ 8월: 여름입니다.");
// } else if (month >= 9 && month <= 11) {
//     console.log("9월 ~ 11월: 가을입니다.");
// } else if (month === 12 || month === 1 || month === 2) {
//     console.log("12월 ~ 2월: 겨울입니다.");
// } else {
//     console.log("잘못된 월입니다.");
// }

// let price = 50000;
// let discount = 0;
// if (price >= 150000) {
//   discount = 30;
//   console.log("vip 회원: 30% 할인이 적용됩니다.");
// } else if (price >= 100000) {
//     discount = 20;
//     console.log("gold 회원 :20% 할인이 적용됩니다.");
// } else if (price >= 50000) {
//     discount = 10;
//     console.log("silvar 회원: 10% 할인이 적용됩니다.");
// } else {
//     discount = 0;
//     console.log("일반 회원: 할인이 없습니다.");
// }
// let finalPrice = price - (price * discount / 100);
// console.log("최종 가격: " + finalPrice + "원");


/*
// 예제 1.
// age1에 20을 저장한다.

 만약 age1이 18 이상이면
   "성인입니다."를 출력합니다.
   그렇지 않으면
    "미성년자입니다."를 출력합니다.

// 예제 2.
number1에 -5을 저장합니다.

만약 number1이 0보다 크면
  "양수입니다."
만약 number1이 0보다 작으면
  "음수입니다."
만약 number1이 0이랑 같으면
  "정수입니다."

// 예제 3.
점수에 85을 저장합다.

만약 점수 90점 이상이면
  "A등급"를 출력합니다.
만약 점수 80점 이상이면
  "B등급"를 출력합니다.
만약 점수 70점 이상이면
  "C등급"를 출력합니다.

  // 예제 4.
온도 32도를 저장합니다.

만약 온도 30도 이상이면
  "매우 더워요, 시원한 곳에 계세요.""
만약 온도 20도 이상이면;
  "적당한 날씨입니다."
만약 온도 10도 이상이면
  "쌀쌀해요, 춥습니다."
만약 온도 -1도 이하이면
  "춥습니다, 쌀쌀합니다."

  // 예제 5.
userId에 "admin"을 저장한다
userPassword에 "1234"를 저장한다

// 문제 1.
만약 userId가 "admin"이고 userPassword가 "1234"와 같다면
    "로그인 성공!"을 출력한다
그렇지 않으면
    "아이디 또는 비밀번호가 틀렸습니다."를 출력한다

// 문제 2.
month에 7을 저장한다

만약 month가 3 이상이고 5 이하이면
    "봄입니다."를 출력한다
아니고 만약 month가 6 이상이고 8 이하이면
    "여름입니다."를 출력한다
아니고 만약 month가 9 이상이고 11 이하이면
    "가을입니다."를 출력한다
아니고 만약 month가 12이거나 1이거나 2이면
    "겨울입니다."를 출력한다
그렇지 않으면
    "잘못된 월입니다."를 출력한다

// 문제 3.
물건 가격을 저장한다.
할인율을 저장할 변수를 0이면

만약 가격이 100000원 이상이면
  할인율 20%로 정하고
  "20%" 할인이 적용됩니다를 출력한다.

만약 가격이 50000원 이상이면
  할인율 10%로 정하고
  "10%" 할인이 적용됩니다를 출력한다.

만약 위 조건이 둘다 아니면
  할인율 0%로 정하고
  "할인이 없습니다."를 출력한다.

  최종 가격을 계산한다.
    원래 가격에서 (가격 * 할인율 / 100)만큼을 빼고 출력한다.

마지막으로 최종 가격을 출력한다.

*/

