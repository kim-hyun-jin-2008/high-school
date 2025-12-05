// 예제 11: 나이 입력받아 영화 관람 등급 판별
// 실행 방법: node example11.js

const readline = require("readline");

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