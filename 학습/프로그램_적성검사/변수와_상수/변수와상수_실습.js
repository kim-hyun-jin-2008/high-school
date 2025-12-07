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