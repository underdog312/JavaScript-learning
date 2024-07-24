const products = [
  {
    name: "Wireless Mouse",
    price: 25.99,
    category: "Electronics",
  },
  {
    name: "Bluetooth Speaker",
    price: 45.99,
    category: "Electronics",
  },
  {
    name: "Running Shoes",
    price: 65.0,
    category: "Footwear",
  },
  {
    name: "Yoga Mat",
    price: 20.0,
    category: "Fitness",
  },
  {
    name: "Stainless Steel Water Bottle",
    price: 15.5,
    category: "Accessories",
  },
  {
    name: "Noise Cancelling Headphones",
    price: 99.99,
    category: "Electronics",
  },
  {
    name: "Smart Watch",
    price: 199.99,
    category: "Electronics",
  },
  {
    name: "Leather Wallet",
    price: 45.0,
    category: "Accessories",
  },
  {
    name: "Digital Camera",
    price: 399.99,
    category: "Electronics",
  },
  {
    name: "Gaming Keyboard",
    price: 89.99,
    category: "Electronics",
  },
  {
    name: "Sunglasses",
    price: 120.0,
    category: "Accessories",
  },
  {
    name: "Cookware Set",
    price: 250.0,
    category: "Home & Kitchen",
  },
  {
    name: "Electric Toothbrush",
    price: 75.0,
    category: "Personal Care",
  },
  {
    name: "Office Chair",
    price: 150.0,
    category: "Furniture",
  },
  {
    name: "Coffee Maker",
    price: 85.0,
    category: "Home & Kitchen",
  },
  {
    name: "Electric Kettle",
    price: 30.0,
    category: "Home & Kitchen",
  },
  {
    name: "Backpack",
    price: 60.0,
    category: "Accessories",
  },
  {
    name: "Standing Desk",
    price: 300.0,
    category: "Furniture",
  },
  {
    name: "Desk Lamp",
    price: 40.0,
    category: "Furniture",
  },
  {
    name: "Running T-shirt",
    price: 25.0,
    category: "Apparel",
  },
];

// TASK 1

const list = document.querySelector("ul");
list.children[2].remove();
list.children[3].remove();

//TASK 2

// list.setAttribute("class", "list");
// console.log(list);

list.classList.add("list");
const listItem = document.querySelectorAll("li");
listItem.forEach((item) => item.classList.add("listItem"));

// TASK 3 & 4

const bugattiItem = document.createElement("li");
const fordItem = document.createElement("li");
bugattiItem.textContent = "Bugatti";
fordItem.textContent = "Ford";
list.prepend(bugattiItem);
list.append(fordItem);

// TASK 5

const form = document.querySelector("form");
const userName = document.createElement("input");
const userNameLabel = document.createElement("label");
userName.setAttribute("id", "userName");
userNameLabel.setAttribute("for", "userName");
userNameLabel.textContent = "Name";
const userLastName = document.createElement("input");
const userLastNameLabel = document.createElement("label");
userLastName.setAttribute("id", "userLastName");
userLastNameLabel.setAttribute("for", "userLasName");
userLastNameLabel.textContent = "Last name";
const userPassword = document.createElement("input");
const userPasswordLabel = document.createElement("label");
userPassword.setAttribute("id", "userPassword");
userPasswordLabel.setAttribute("for", "userPassword");
userPasswordLabel.textContent = "Password";
const userConfirmPassword = document.createElement("input");
const userConfirmPasswordLabel = document.createElement("label");
userConfirmPassword.setAttribute("id", "userConfirmPassword");
userConfirmPasswordLabel.setAttribute("for", "userConfirmPassword");
userConfirmPasswordLabel.textContent = "Confirm password";

form.append(
  userNameLabel,
  userName,
  userLastNameLabel,
  userLastName,
  userPasswordLabel,
  userPassword,
  userConfirmPasswordLabel,
  userConfirmPassword
);

// TASK 6

const image = document.createElement("img");
image.src =
  "https://img.freepik.com/free-photo/colorful-nebulosa_52683-102250.jpg?t=st=1721135870~exp=1721139470~hmac=a2e9bc9b809c6830029b2653889de10f8e4242ce810141bc5d548a52432c32ef&w=360";

document.querySelector("body").append(image);

// TASK 7

const paragraph = document.querySelector("p");
paragraph.classList.remove("red", "italic");

// TASK 8 & 9
const wrapper = document.querySelector("#h1Wrapper");
const h1 = document.createElement("h1");
h1.innerText = "this is h1 tag";
h1.style.color = "blue";
h1.style.fontSize = "40px";
wrapper.append(h1);

// TASK 10

const groupedProducts = {};

products.forEach((product) => {
  if (!groupedProducts[product.category]) {
    groupedProducts[product.category] = [];
  }
  groupedProducts[product.category].push(product);
});

const productContainer = document.getElementById("products");

for (category in groupedProducts) {
  const div = document.createElement("div");
  const productList = document.createElement("ul");

  div.innerHTML = `<h2>${category}</h2>`;

  groupedProducts[category].forEach((product) => {
    const li = document.createElement("li");
    const price = document.createElement("span");

    li.textContent = `${product.name}`;
    price.textContent = ` ${product.price}`;
    price.style.color = "green";

    li.appendChild(price);
    productList.appendChild(li);
  });
  div.appendChild(productList);
  productContainer.appendChild(div);
}
