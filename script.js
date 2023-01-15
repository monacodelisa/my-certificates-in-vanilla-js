const main = document.querySelector("main");
const section = document.querySelector("section");

const linkedIn = [
  {
    image: "assets/images/Ultimate-Java-Part-1-Fundamentals.jpg",
    text: "Ultimate Java Fundamentals",
    date: "Completed 01/15/2023",
    link: "https://codewithmosh.com/courses/580597/certificate"
  },
  {
    image: "assets/images/angular.jpg",
    text: "Angular Essential Training",
    date: "Completed 06/28/2022",
    link: "https://www.linkedin.com/learning/certificates/9f8256733b65889adec5b7d997c7b1c009e0c9b10e655bbe95497e4a1b1b8a45"
  },
  {
    image: "assets/images/react.jpg",
    text: "Learning React",
    date: "Completed 05/05/2020",
    link: "https://www.linkedin.com/learning/certificates/f3411ba51e955b3b287fc5ef87e69c12a6c3ef88a1404b51f60aa5431440c5d5?trk=share_certificate"
  },
  {
    image: "assets/images/git-from-scratch.jpg",
    text: "Git From Scratch",
    date: "Completed 07/05/2022",
    link: "https://www.linkedin.com/learning/certificates/5c8a37592517ba3a2e9fe4e58a5bd57164d8f2bd89297fa2dd122e383c806d30"
  },
  {
    image: "assets/images/js-essential-2022.jpg",
    text: "JavaScript Essential Training",
    date: "Completed 04/20/2022",
    link: "https://www.linkedin.com/learning/certificates/c901fa5f80d0fbf2971b1fed4f77c38bb2730b4cf42bf0c025f177fb06dd0a99?trk=share_certificate"
  },
  {
    image: "assets/images/js-essential-2017.jpg",
    text: "JavaScript Essential Training",
    date: "Completed 05/09/2020",
    link: "https://www.linkedin.com/learning/certificates/f3df5522efaab48f44c9e3d70ed6244e057a1b4b5cfe10762c96e84d9022393d?trk=share_certificate #javascript."
  },
  {
    image: "assets/images/fe-full-stack.jpg",
    text: "Fullstack and Frontend",
    date: "Completed 04/25/2020",
    link: "https://www.linkedin.com/learning/certificates/2a006b457b33aa81c8e6ccdb076ae1d00c8501c074b208e7c267036ba8032c78?trk=share_certificate"
  },
  {
    image: "assets/images/web-programming.jpg",
    text: "Web Programming Foundations",
    date: "Completed 04/25/2020",
    link: "https://www.linkedin.com/learning/certificates/858d7a3bd24910350b6354cb7db3010a337aa6c319ae572c23bda031c3143324?trk=share_certificate"
  },
  {
    image: "assets/images/cs-principles.jpg",
    text: "Computer Science Principles",
    date: "Completed 05/05/2020",
    link: "https://www.linkedin.com/learning/certificates/a57ada0181ebb83336c8a72fef27921e4d010eb76d41d7ad767b514b90c0b221?trk=share_certificate"
  },
  {
    image: "assets/images/ux.jpg",
    text: "UX - Accessability",
    date: "Completed 04/25/2020",
    link: "https://www.linkedin.com/learning/certificates/84af3719f8ffb48ec1f81dbf2297881582597c2871c0a7e1a2f88c104beb1da0?trk=share_certificate"
  },
  {
    image: "assets/images/scss-essential.jpg",
    text: "SCSS Essential Training",
    date: "Completed 05/10/2020",
    link: "https://www.linkedin.com/learning/certificates/5340ecb56d5940661b2ad5e28981e356b63f00354cafa413e4c616b606aab70b?trk=share_certificate"
  },
  {
    image: "assets/images/responsive-layout.jpg",
    text: "Responsive Layout",
    date: "Completed 05/10/2020",
    link: "https://www.linkedin.com/learning/certificates/58bb2eaa63dbbdb17b52fc147af056898404086e2014f0b47dc44790644e3b40?trk=share_certificate"
  },
  {
    image: "assets/images/bootstrap.jpg",
    text: "Bootstrap Essential Training",
    date: "Completed 05/05/2020",
    link: "https://www.linkedin.com/learning/certificates/fefe47bdb7d1ca8137bd1253534bf4cdb0f6d330652336edd1c0bc09f7bc1991?trk=share_certificate"
  },
  {
    image: "assets/images/css-essential.jpg",
    text: "CSS Essential Training",
    date: "Completed 05/06/2020",
    link: "https://www.linkedin.com/learning/certificates/e91dffcab5405a63957d1825be93a21649920d6137498482b828064887c390f9"
  },
  {
    image: "assets/images/html-essential.jpg",
    text: "HTML Essential Training",
    date: "Completed 04/26/2020",
    link: "https://www.linkedin.com/learning/certificates/7ffdcf7c899a3125814421affc98fcf10b25495dd6f6529445f7c59942b48496?trk=share_certificate"
  },
  {
    image: "assets/images/github-essential.jpg",
    text: "GitHub Essential Training",
    date: "Completed 05/02/2020",
    link: "https://www.linkedin.com/learning/certificates/59e4c93fd681c46e46f47d3d0649bb71a2499bd69307835d30361c74cb94943f?trk=share_certificate"
  },
  {
    image: "assets/images/agile-dev.jpg",
    text: "Agile Development Practices",
    date: "Completed 12/07/2022",
    link: "https://www.linkedin.com/learning/certificates/75be862738c8ff86cdf5eaea455dfbaf1775040bd8589d9eb10cd756717e4b0c?trk=share_certificate"
  },
];

const otherCert = [
    {
        image: "assets/images/ts.jpg",
        text: "TypeScript",
        date: "Completed 06/28/2022",
        link: "https://www.codecademy.com/profiles/esteecodes/certificates/56fb1e71303e37b643bb1905f31c8a09" 
    },
    {
        image: "assets/images/coursera-js.jpg",
        text: "HTML, CSS and JavaScript",
        date: "Completed 05/20/2020",
        link: "https://coursera.org/share/35c14e329ebbb896f53149d479909af9" 
    },
    {
        image: "assets/images/js.jpg",
        text: "JavaScript",
        date: "Completed 06/18/2022",
        link: "https://www.codecademy.com/profiles/esteecodes/certificates/705dcb15de0da4dd9d9fc4f3274b430e" 
    },
    {
        image: "assets/images/js-edureka.jpg",
        text: "Proficient in JavaScript",
        date: "Completed 05/14/2022",
        link: "https://www.edureka.co/certificates/mycertificate/631d9de7f6f1623c7346291877954a9d" 
    },
    {
        image: "assets/images/jquery.jpg",
        text: "jQuery",
        date: "Completed 01/16/2022",
        link: "https://www.codecademy.com/profiles/esteecodes/certificates/0becf7c1cd2bd715f24331dddd23425a" 
    },
    {
        image: "assets/images/css.jpg",
        text: "CSS",
        date: "Completed 10/28/2021",
        link: "https://www.codecademy.com/profiles/esteecodes/certificates/0becf7c1cd2bd715f24331dddd23425a" 
    },
    {
        image: "assets/images/html.jpg",
        text: "HTML",
        date: "Completed 10/30/2021",
        link: "https://www.codecademy.com/profiles/esteecodes/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7" 
    },
    {
        image: "assets/images/res-web-des-fcc.jpg",
        text: "Responsive Web Design",
        date: "Completed 10/30/2021",
        link: "https://www.codecademy.com/profiles/esteecodes/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7" 
    },
    {
        image: "assets/images/html-css-js-udemy.jpg",
        text: "Modern HTML & CSS",
        date: "Completed 09/15/2021",
        link: "https://www.udemy.com/certificate/UC-aa72e7fe-7e67-4cc7-9f9d-0308584a8625/" 
    },
    {
        image: "assets/images/html-css-scss-udemy.jpg",
        text: "Modern HTML & CSS",
        date: "Completed 03/11/2022",
        link: "https://www.udemy.com/certificate/UC-76cae504-9f77-4797-813a-ed3284a62251/" 
    },
]

linkedIn.forEach(createBox);
otherCert.forEach(createBox);

// Create linkedin boxes
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

// // Create other boxes
// function createOtherBox(item) {
//   const box = document.createElement("div");

//   const { image, text, link, date } = item;

//   box.classList.add("box");
//   box.innerHTML = `
//   <a href="${link}" target="_blank"><img src="${image}" alt="${text}"/>
//   <p class="info">${text}</p>
//   <small class="date">${date}</small>
//   </a>      
//   `;
//   section.appendChild(box);
// }
