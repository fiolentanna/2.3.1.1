let studentScore = [ 15, 75, 56, 10, 18, 63, 83, 75, 0, 11, 40, 30, 11, 17, 43, 41, 5, 13, 15, 100, 55, 33, 38, 9];

for (let i = 0; i < studentScore.length; i++) {
    for (let j = 0; studentScore.length - i - 1; j++) {
        console.log(`${i + 1}.${j + 1} новая итерация`);
        console.log(`Сейчас работаем с массивом ${studentScore.slice(0, studentScore.length - i)}`);
        console.log(`Сравниваем индексы ${[j]} и ${[j + 1]}`);
        console.log(`Сравниваем пару ${studentScore[j]} и ${studentScore[j + 1]}`);

        if (studentScore[j] < studentScore[j + 1]) {
            let temp = studentScore[j];
            studentScore[j] = studentScore[j + 1];
            studentScore[j + 1] = temp;
        }
        console.log(`Получился промежуточный массив ${studentScore}`);
    }
}
console.log(studentScore);