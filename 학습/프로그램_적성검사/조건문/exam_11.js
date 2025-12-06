// 예제 11: 나이 입력받아 영화 관람 등급 판별
// 실행 방법: node example11.js

const readline = require("readline");


// let colors = ["red", "blue", "green"];
// let numbers = [1, 2, 3, 4, 5]; // 값만 들어간것. 배열 인덱스는 이런식으로 하면 자동으로 0부터 시작

// // let colors[4] = 5; // 이렇게 하면 오류가 발생 한다.

// // 추가로 넣고 싶으면 순서대로 넣어 주면 된다.
// // 4번째(인덱스 3)에 값 추가 (배열의 길이보다 큰 인덱스에 값 할당 가능)
// colors[3] = "yellow"; // 인덱스 3에 "yellow" 추가
// colors[4] = "purple"; // 인덱스 4에 "purple" 추가
// console.table(colors);
// console.log("색깔 배열:", colors);
// console.log("첫 번째 색:", colors[0]);

// console.table(numbers);
// console.log("숫자 배열:", numbers);
// console.log("세 번째 숫자:", numbers[2]);


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== 영화 관람 등급 판별 ===");
rl.question("나이를 입력하세요: ", input1 => {
    let inputAge = parseInt(input1);

    if (inputAge >= 19) {
        console.log("청소년 관람불가 영화를 볼 수 있습니다.");
    } else if (inputAge >= 15) {
        console.log("15세 이상 관람가 영화를 볼 수 있습니다.");
    } else if (inputAge >= 12) {
        console.log("12세 이상 관람가 영화를 볼 수 있습니다.");
    } else {
        console.log("전체 관람가 영화만 볼 수 있습니다.");
    }

    rl.close();
});