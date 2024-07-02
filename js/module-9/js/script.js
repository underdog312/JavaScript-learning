// TASK 1

const array = [1, 2, 3, 4, 6, 710, 34013, 13];

console.log(Math.min(...array));

// TASK 2

function multiply() {
  const argArray = [...arguments];
  const result = argArray.reduce((acc, currentValue) => acc * currentValue);

  return result;
}

console.log(multiply(100, 200, 83902, 1230));

// TASK 3

const product = {
  productName: "Water",
  price: 20,
  count: 3,
};

const { price, count } = product;

function totalPrice(item) {
  return price * count;
}

console.log(totalPrice(product));

// TASK 4

const objItems = {
  items: [],
  setItems: function (array) {
    this.items = array;
  },
  sum: function () {
    return this.items.reduce((acc, current) => acc + current);
  },
  maxValue: function () {
    return Math.max(...this.items);
  },
};

console.log(objItems);
objItems.setItems([3, 4, 5, 6, 10]);
console.log(objItems.sum());
console.log(objItems.maxValue());

// TASK 5

const predictsArr = [
  "Удача прийде звідки не чекаєте.",
  "Давні борги будуть повернуті вам.",
  "Вас чекає несподіване грошове надходження.",
  "Всі незакінчені справи будуть завершені.",
  "Яскрава пригода вже чекає на вас.",
  "Планування часу допоможе вам не запізнитися на зустріч.",
  "Інтуїція цього разу не підведе вас. Використовуйте це.",
  "Прислухайтеся до себе і відповідь на запитання буде знайдено.",
  "З'явиться можливість вирушити в дорогу.",
  "Ваш цінний досвід зможе комусь допомогти, якщо перестанете його ховати в собі.",
  "Вам не вдасться сподобатися всім, не витрачайте на це енергію.",
  "Одяг, який вас старить, не дістанеться вам.",
];

const obj = {
  predictions: [],
  intervalId: null,
  setPredictions(arr) {
    this.predictions = arr;
  },

  showPrediction() {
    const displayPrediction = () => {
      const randomPrediction =
        this.predictions[Math.floor(Math.random() * this.predictions.length)];
      console.log(randomPrediction);
    };
    displayPrediction();
    this.intervalId = setInterval(displayPrediction, 3000);
  },

  stopDisplayingPredictions() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  },
};
const predictions = obj;
predictions.setPredictions(predictsArr);
predictions.showPrediction();
predictions.stopDisplayingPredictions();
