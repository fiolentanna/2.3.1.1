const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: 4500,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 3600,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: 3433,
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: 2356,
  },
];

// создаю пустой массив для хранения очков
let score = [];
for (let player in players) {
  score.push(players[player].scorePoints);
}
console.log(score); //массив заполняется данными с очками из массива с объектами

console.log(Math.max.apply(null, score)); // вывод максимального значения из массива
