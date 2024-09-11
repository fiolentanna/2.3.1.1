let testdata = require('./testdata.json')
console.log(testdata)

// создаю пустой массив для хранения очков
let score = [];
for (let player in testdata) {
  score.push(testdata[player].scorePoints);
}
console.log(score); //массив заполняется данными с очками из массива с объектами

console.log(Math.max.apply(null, score)); // вывод максимального значения из массива
