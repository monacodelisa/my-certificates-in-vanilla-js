const main = document.querySelector("main");

const dataArr = [
  {
    image: "assets/images/angular.jpg",
    text: "Angular Essential Training",
    date: "Completed 06/28/2022",
    link: "https://www.linkedin.com/learning/certificates/9f8256733b65889adec5b7d997c7b1c009e0c9b10e655bbe95497e4a1b1b8a45"
  },
  {
    image: "assets/images/git-from-scratch.jpg",
    text: "Git From Scratch",
    date: "Completed 07/05/2022",
    link: "https://www.linkedin.com/learning/certificates/5c8a37592517ba3a2e9fe4e58a5bd57164d8f2bd89297fa2dd122e383c806d30"
  },
  {
    image: "assets/images/js-essential-2022.jpg",
    text: "JavaScript Essential Training - 2022",
    date: "Completed 04/20/2022",
    link: "https://www.linkedin.com/learning/certificates/c901fa5f80d0fbf2971b1fed4f77c38bb2730b4cf42bf0c025f177fb06dd0a99?trk=share_certificate"
  },
  {
    image: "assets/images/js-essential-2017.jpg",
    text: "JavaScript Essential Training - 2017",
    date: "Completed 05/09/2020",
    link: "https://www.linkedin.com/learning/certificates/f3df5522efaab48f44c9e3d70ed6244e057a1b4b5cfe10762c96e84d9022393d?trk=share_certificate #javascript."
  },
  {
    image: "assets/images/css-essential.jpg",
    text: "CSS Essential Training",
    date: "Completed 05/06/2020",
    link: "https://www.linkedin.com/learning/certificates/e91dffcab5405a63957d1825be93a21649920d6137498482b828064887c390f9"
  },
  {
    image: "assets/images/ux.jpg",
    text: "UX - Accessability",
    date: "Completed 04/25/2020",
    link: "https://www.linkedin.com/learning/certificates/84af3719f8ffb48ec1f81dbf2297881582597c2871c0a7e1a2f88c104beb1da0?trk=share_certificate"
  },
];

dataArr.forEach(createBox);

// Create speech boxes
function createBox(item) {
  const box = document.createElement("div");

  const { image, text, link, date } = item;
  // instead of using item.image & item.text

  box.classList.add("box");
  box.innerHTML = `
  <a href="${link}" target="_blank"><img src="${image}" alt="${text}"/>
  <p class="info">${text}</p>
  <small class="date">${date}</small>
  </a>      
  `;
  main.appendChild(box);
}
