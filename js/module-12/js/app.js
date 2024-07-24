// Вправа 1: Базовий Async/Await

// Напишіть функцію delayedMessage, яка повертає Promise, який вирішується через 2 секунди з повідомленням «Hello, World!».
// Створіть ще одну функцію printMessage, яка використовує async/await для виклику delayedMessage і реєструє повідомлення на консолі.

async function delayedMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, World!");
    }, 2000);
  });
}

async function printMessage() {
  try {
    const message = await delayedMessage();
    console.log(message);
  } catch (err) {
    console.log(err);
  }
}

printMessage();

// Вправа 2: отримання даних з API

// Напишіть функцію fetchUser, яка отримує дані з API JSONPlaceholder (https://jsonplaceholder.typicode.com/users/1).
// Використовуйте async/await, щоб отримати дані та зареєструвати ім’я та електронну адресу користувача у консолі.

async function fetchUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

  const data = await res.json();

  console.log(`name: ${data.name}`);
  console.log(`email: ${data.email}`);
}

fetchUser();

// Вправа 3: Виправлення помилки в асинхронних функціях

// Змініть функцію fetchUser для обробки помилок за допомогою try...catch.
// Якщо сталася помилка (наприклад, проблеми з мережею, недійсна URL-адреса), зареєструйте повідомлення про помилку у консолі.

async function fetchUser() {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!result.ok) {
      throw new Error("There's something wrong");
    }

    const data = await result.json();
    console.log(`name: ${data.name}`);
    console.log(`email: ${data.email}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

fetchUser();

// Вправа 4: Послідовні асинхронні операції

// Напишіть функцію fetchPostAndUser, яка:
// Отримує публікацію з API JSONPlaceholder (https://jsonplaceholder.typicode.com/posts/1).
// Використовує userId з публікації для отримання відповідних даних користувача.
// Запишіть назву публікації та ім’я користувача у консоль.

async function fetchPostAndUser() {
  try {
    const publish = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const publishData = publish.data;

    const user = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${publishData.userId}`
    );
    const userData = user.data;

    console.log(`publish title: ${publishData.title}`);
    console.log(`user: ${userData.name}`);
  } catch (error) {
    console.error(`error: ${error.message}`);
  }
}

fetchPostAndUser();

// Вправа 5: Одночасні асинхронні операції

// Напишіть функцію fetchMultipleUsers, яка:
// Одночасно отримує дані для користувачів з ідентифікаторами 1, 2 і 3 з JSONPlaceholder API.
// Використовуйте Promise.all, щоб дочекатися виконання всіх запитів і записати масив імен користувачів у консоль.

async function fetchMultipleUsers() {
  try {
    const identifiers = [1, 2, 3];
    const promises = identifiers.map((id) =>
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((userData) => userData.name)
    );

    const names = await Promise.all(promises);

    console.log(names);
  } catch (error) {
    console.error(error);
  }
}

fetchMultipleUsers();

// Вправа 6: ланцюжок промісів

// Напишіть функцію fetchData, яка:
// Отримує список дописів з JSONPlaceholder API (https://jsonplaceholder.typicode.com/posts).
// Використовує ідентифікатор першої публікації для отримання коментарів до цієї публікації (https://jsonplaceholder.typicode.com/comments?postId=1).
// Зареєструйте назву першої публікації та кількість коментарів до неї.

async function fetchData() {
  try {
    const postsInfo = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = postsInfo.data;
    const firstPost = posts[0];

    const commentsInfo = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${firstPost.id}`
    );
    const comments = commentsInfo.data;

    console.log(`First publishment title: "${firstPost.title}"`);
    console.log(`Comments: ${comments.length}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

fetchData();
