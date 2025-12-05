// 예제 12: 점수 입력받아 합격/불합격 판정
// 실행 방법: node example12.js

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== 시험 합격/불합격 판정 ===");
rl.question("시험 점수를 입력하세요 (0-100): ", input2 => {
    let examScore = parseInt(input2);
    const passingScore = 60;

    if (examScore >= 0 && examScore <= 100) {
        if (examScore >= passingScore) {
            let extraPoints = examScore - passingScore;
            console.log("합격입니다! 축하합니다!");
            console.log("합격선보다 " + extraPoints + "점 높습니다.");
        } else {
            let lackPoints = passingScore - examScore;
            console.log("불합격입니다. 다음 기회에 도전하세요!");
            console.log("합격선까지 " + lackPoints + "점 부족합니다.");
        }
    } else {
        console.log("잘못된 점수입니다. 0-100 사이의 점수를 입력하세요.");
    }

    rl.close();
});