// Модуль калькулятора
const Calculator = (() => {
  // Приватні методи реалізуйте нижче...

  // Публічні методи
  return {
      // Метод для виконання арифметичних операцій
      add: add,
      subtract: subtract,
      clearMemory: clearMemory,
      getMemoryAsString: getMemoryAsString
  };
})();

// // Приклад використання
// console.log(Calculator.add(5, 3)); // Виконати додавання: 5 + 3
// console.log(Calculator.getMemoryAsString()); // Отримати результат, збережений у пам'яті, як текст
// Calculator.clearMemory(); // Очистити пам'ять
// console.log(Calculator.getMemoryAsString()); // Перевірити, що пам'ять очищена