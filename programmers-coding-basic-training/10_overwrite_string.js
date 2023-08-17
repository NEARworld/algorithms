// 문자열 겹쳐쓰기
function solution(my_string, overwrite_string, s) {
    var answer = '';
    let first = my_string.slice(0, s);
    let second = my_string.slice(overwrite_string.length + s);
    answer = first + overwrite_string + second;
    return answer;
}
