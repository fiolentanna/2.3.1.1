// Создаем класс Button с описанием параметров и метод, который выводит а консоль информацию о кнопке
class Button {
    constructor(width, height, type, color){
        this.buttonWidth = width;
        this.buttonHeight = height;
        this.buttonType = type;
        this.buttonColor = color;
        this.props = `${this.buttonWidth}, ${this.buttonHeight}, ${this.buttonType}, ${this.buttonColor}`;
    }
    onClick () {
        console.log(this.props);
    }
}

// Создаем экземпляр класса button и передаем аргументы в конструктор
let sendMessageButton = new Button(50, 20, "button", "purple");
console.log(sendMessageButton);

sendMessageButton.onClick(); 

// функция для проверки свойств экземпляра 
function testButton(buttonProperty, sampleValue) {
    if (buttonProperty == sampleValue) {
        console.log("true");
    } else {
        console.log("false");
    }
} 
    
testButton(sendMessageButton.buttonWidth, 50);
testButton(sendMessageButton.buttonHeight, 20);
testButton(sendMessageButton.buttonColor, "purple");
testButton(sendMessageButton.buttonType, "button");