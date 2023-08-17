// 대소문자 바꿔서 출력하기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

const LOWER_CASE_A_CODE = 97;

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let answer = '';
    for (let i = 0; i < str.length; ++i) {
        let ascii = str.charCodeAt(i);
        if (ascii >= LOWER_CASE_A_CODE) ascii -= 32;
        else ascii += 32;
        answer += String.fromCharCode(ascii);
    }
    console.log(answer);
});
