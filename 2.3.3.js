let userBalance = 500;
let smsText = "посылка находится в ячейке код для получения A001DFX0";

let parcelData = {
  id: "1432HGF",
  price: 100,
  code: "A001DFX0",
};

let parselTerminal = [null, null, null, "1432HGF", null];

let expectedCode = "A001DFX0";

function parcelDelivery() {
  if (parcelData.code === expectedCode) {
    userBalance -= parcelData.price;
    console.log(
      `Заберите посылку ${parcelData.id} из ячейки №${
        parselTerminal.indexOf(parcelData.id) + 1
      }. Ваш счет составляет: ${userBalance} ед.`
    );
  } else {
    console.log(`Код получения неверный`);
  }
}

parcelDelivery();
