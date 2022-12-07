
const main = document.querySelector("main");
const voicesSelect = document.getElementById("voices");
const textarea = document.getElementById("text");
const readBTN = document.getElementById("read");
const toggleBTN = document.getElementById("toggle");
const closeBTN = document.getElementById("close"); 

const dataArr = [
    {
        image: './.assets/images/angular.jpg',
        text: "stuff"
    }
]

dataArr.forEach(createBox);

// Create certificate boxes
function createBox(item) {
    const box = document.createElement("div");
  
    const { image, text } = item;
    // instead of using item.image & item.text
  
    box.classList.add("box");
    box.innerHTML = `
      <img src="${image}" alt="${text}"/>
      <p class="info">${text}</p> 
    `;
}