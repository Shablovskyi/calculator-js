// Модуль калькулятора
const Calculator = (() => {
  // Приватні методи реалізуйте нижче...
  let memory = '';

  function add(operand1, operand2) {
    if(typeof operand1 !== "number" || typeof operand2 !== "number"){
      return `Введіть  число`
    }else{
      let result = operand1 + operand2;
      memory = memory + `${operand1} + ${operand2} = ${result} `;
      return result;
    }

  }

  function subtract(operand1, operand2) {
    if(typeof operand1 !== "number" || typeof operand2 !== "number"){
      return `Введіть  число`
    }else{
      let result = operand1 - operand2;
      memory = memory + `${operand1} - ${operand2} = ${result} `;
      return result;
    }
  }

  function getMemoryAsString() {
    return memory
  }

  function clearMemory(){
    memory = '';
  }

  // Публічні методи
  return {
    // Метод для виконання арифметичних операцій
    add: add,
    subtract: subtract,
    clearMemory: clearMemory,
    getMemoryAsString: getMemoryAsString,
  };
})();

// // Приклад використання
console.log(Calculator.add("5", 3)); // Виконати додавання: 5 + 3

console.log(Calculator.subtract(null, 3));
console.log(Calculator.getMemoryAsString());
console.log(Calculator.add(5, 3)); // Виконати додавання: 5 + 3
console.log(Calculator.getMemoryAsString()); // Отримати результат, збережений у пам'яті, як текст
console.log(Calculator.subtract(5, 3));
console.log(Calculator.getMemoryAsString());
Calculator.clearMemory(); // Очистити пам'ять
console.log(Calculator.getMemoryAsString());