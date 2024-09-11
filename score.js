let testData = require('./testdata.json')
console.log(testData)

// создаю пустой массив для хранения очков
let score = [];
for (let player in testData) {
  score.push(testData[player].scorePoints);
}
console.log(score); //массив заполняется данными с очками из массива с объектами

console.log(Math.max.apply(null, score)); // вывод максимального значения из массива
