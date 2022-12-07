const main = document.querySelector("main");
const voicesSelect = document.getElementById("voices");
const textarea = document.getElementById("text");
const readBTN = document.getElementById("read");
const toggleBTN = document.getElementById("toggle");
const closeBTN = document.getElementById("close");

const dataArr = [
  {
    image: "assets/images/angular.jpg",
    text: "Angular Essential Training",
    link: "https://google.com"
  },
];

dataArr.forEach(createBox);

// Create speech boxes
function createBox(item) {
  const box = document.createElement("div");

  const { image, text, link } = item;
  // instead of using item.image & item.text

  box.classList.add("box");
  box.innerHTML = `
  <a href="${link}" target="_blank"><img src="${image}" alt="${text}"/></a>
    <p class="info">${text}</p>  
  `;
  main.appendChild(box);
}
