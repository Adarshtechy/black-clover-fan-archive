// Captains
const captainsData = [
  {
    name: "Yami Sukehiro",
    image: "../../assets/captains/1.jpg",
    squad: "Black Bulls",
    description: "Captain of the Black Bulls and master of Dark Magic.",
  },
  {
    name: "Fuegoleon Vermillion",
    image: "../../assets/captains/2.jpg",
    squad: "Crimson Lion Kings",
    description:
      "Respected captain who wields powerful Fire Magic and Salamander.",
  },
  {
    name: "Nozel Silva",
    image: "../../assets/captains/3.jpg",
    squad: "Silver Eagles",
    description: "Leader of the Silver Eagles and user of Mercury Magic.",
  },
  {
    name: "Charlotte Roselei",
    image: "../../assets/captains/4.jpg",
    squad: "Blue Rose Knights",
    description:
      "Captain who commands Briar Magic and leads an all-female squad.",
  },
  {
    name: "Dorothy Unsworth",
    image: "../../assets/captains/5.jpg",
    squad: "Coral Peacocks",
    description:
      "Mysterious captain capable of trapping enemies in Dream World.",
  },
  {
    name: "Rill Boismortier",
    image: "../../assets/captains/6.jpg",
    squad: "Azure Deer",
    description: "Youngest captain and genius user of Painting Magic.",
  },
  {
    name: "Jack the Ripper",
    image: "../../assets/captains/7.jpg",
    squad: "Green Mantis",
    description: "Battle-loving captain whose Slash Magic adapts to opponents.",
  },
  {
    name: "Kaiser Granvorka",
    image: "../../assets/captains/8.jpg",
    squad: "Purple Orcas",
    description: "Veteran captain known as the Immovable Kaiser.",
  },
  {
    name: "William Vangeance",
    image: "../../assets/captains/9.jpg",
    squad: "Golden Dawn",
    description:
      "Former captain of the Golden Dawn and wielder of World Tree Magic.",
  },
];

const captainsTrack = document.querySelector(".captains-grid");
const captainPrevBtn = document.querySelector(".captain-prev");
const captainNextBtn = document.querySelector(".captain-next");

captainsTrack.innerHTML = captainsData
  .map(
    (captain) => `
            <div class="captain-card">
                <img src="${captain.image}" alt="${captain.name}">

                <div class="captain-info">
                    <span class="captain-squad">${captain.squad}</span>
                    <h3>${captain.name}</h3>
                    <p>${captain.description}</p>
                </div>
            </div>
        `,
  )
  .join("");

const captainCards = [...document.querySelectorAll(".captain-card")];

let captainCardWidth = 0;
let captainCurrentIndex = 0;
let captainMaxIndex = 0;

function measureCaptainsSlider() {
  const gap = parseFloat(getComputedStyle(captainsTrack).gap) || 0;
  captainCardWidth = captainCards[0].getBoundingClientRect().width + gap;
  const visibleCards = Math.max(
    1,
    Math.floor(
      (captainsTrack.parentElement.offsetWidth + gap) / captainCardWidth,
    ),
  );

  captainMaxIndex = Math.max(0, captainCards.length - visibleCards);
  captainCurrentIndex = Math.min(captainCurrentIndex, captainMaxIndex);
}

function moveCaptainsSlider(animate = true) {
  captainsTrack.style.transition = animate ? "transform 0.5s ease" : "none";
  captainsTrack.style.transform = `translateX(-${captainCurrentIndex * captainCardWidth}px)`;
}

function updateCaptainsButtons() {
  captainPrevBtn.hidden = captainCurrentIndex === 0;
  captainNextBtn.hidden = captainCurrentIndex === captainMaxIndex;
}

function updateCaptainsSlider() {
  measureCaptainsSlider();
  moveCaptainsSlider();
  updateCaptainsButtons();
}

measureCaptainsSlider();
moveCaptainsSlider(false);
updateCaptainsButtons();

captainNextBtn.addEventListener("click", () => {
  if (captainCurrentIndex < captainMaxIndex) {
    captainCurrentIndex++;
  }

  updateCaptainsSlider();
});

captainPrevBtn.addEventListener("click", () => {
  if (captainCurrentIndex > 0) {
    captainCurrentIndex--;
  }

  updateCaptainsSlider();
});

window.addEventListener("resize", () => {
  measureCaptainsSlider();
  moveCaptainsSlider(false);
  updateCaptainsButtons();
});

// BlackBulls
const blackBulls = [
  {
    name: "Yami Sukehiro",
    image: "../../assets/black-bulls-squad/1.jpg",
  },
  {
    name: "Asta",
    image: "../../assets/black-bulls-squad/2.jpg",
  },
  {
    name: "Noelle Silva",
    image: "../../assets/black-bulls-squad/3.jpg",
  },
  {
    name: "Luck Voltia",
    image: "../../assets/black-bulls-squad/4.jpg",
  },
  {
    name: "Magna Swing",
    image: "../../assets/black-bulls-squad/5.jpg",
  },
  {
    name: "Charmy Pappitson",
    image: "../../assets/black-bulls-squad/6.jpg",
  },
  {
    name: "Finral Roulacase",
    image: "../../assets/black-bulls-squad/7.jpg",
  },
  {
    name: "Vanessa Enoteca",
    image: "../../assets/black-bulls-squad/8.jpg",
  },
  {
    name: "Gauche Adlai",
    image: "../../assets/black-bulls-squad/9.jpg",
  },
  {
    name: "Gordon Agrippa",
    image: "../../assets/black-bulls-squad/10.jpg",
  },
  {
    name: "Grey",
    image: "../../assets/black-bulls-squad/11.jpg",
  },
  {
    name: "Zora Ideale",
    image: "../../assets/black-bulls-squad/12.jpg",
  },
  {
    name: "Secre Swallowtail",
    image: "../../assets/black-bulls-squad/13.jpg",
  },
];

const bullsGrid = document.getElementById("bullsGrid");

bullsGrid.innerHTML = blackBulls
  .map(
    (member) => `
    <div class="mini-card">
        <img src="${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
    </div>
`,
  )
  .join("");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateButtons() {
  const maxScroll = bullsGrid.scrollWidth - bullsGrid.clientWidth;

  prevBtn.style.display = bullsGrid.scrollLeft <= 0 ? "none" : "flex";

  nextBtn.style.display =
    bullsGrid.scrollLeft >= maxScroll - 5 ? "none" : "flex";
}

nextBtn.addEventListener("click", () => {
  bullsGrid.scrollBy({
    left: bullsGrid.querySelector(".mini-card").offsetWidth + 30,
    behavior: "smooth",
  });
});

prevBtn.addEventListener("click", () => {
  bullsGrid.scrollBy({
    left: -(bullsGrid.querySelector(".mini-card").offsetWidth + 30),
    behavior: "smooth",
  });
});

bullsGrid.addEventListener("scroll", updateButtons);

window.addEventListener("load", updateButtons);
window.addEventListener("resize", updateButtons);
