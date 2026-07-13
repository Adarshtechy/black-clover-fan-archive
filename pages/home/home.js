// Quotes Section
const quotes = [
  {
    text: "My magic is never giving up!",
    author: "Asta",
  },

  {
    text: "Surpass your limits. Right here. Right now.",
    author: "Yami Sukehiro",
  },

  {
    text: "Being weak is nothing to be ashamed of... staying weak is.",
    author: "Fuegoleon Vermillion",
  },

  {
    text: "Humans are strong because we can change ourselves.",
    author: "Julius Novachrono",
  },

  {
    text: "Even if I'm not chosen, I'll keep moving forward.",
    author: "Yuno",
  },

  {
    text: "Protecting people is what makes you a Magic Knight.",
    author: "Noelle Silva",
  },

  {
    text: "A person can become strong at any time.",
    author: "Mereoleona Vermillion",
  },

  {
    text: "If you don't give up, there is no end.",
    author: "Asta",
  },

  {
    text: "The future belongs to those who keep fighting.",
    author: "Fuegoleon Vermillion",
  },

  {
    text: "Trust your comrades and push forward.",
    author: "Yami Sukehiro",
  },

  {
    text: "Strength isn't determined by talent alone.",
    author: "Noelle Silva",
  },

  {
    text: "A dream is only impossible when you stop pursuing it.",
    author: "Yuno",
  },

  {
    text: "Never fear failure. Fear never trying.",
    author: "Julius Novachrono",
  },

  {
    text: "The path to greatness is paved with perseverance.",
    author: "Mereoleona Vermillion",
  },

  {
    text: "Magic may define this world, but determination defines me.",
    author: "Asta",
  },
];

const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");
const quoteButton = document.querySelector(".quote-btn");

quoteButton.addEventListener("click", () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.style.opacity = "0";
  quoteAuthor.style.opacity = "0";
  setTimeout(() => {
    quoteText.textContent = `"${randomQuote.text}"`;

    quoteAuthor.textContent = ` ${randomQuote.author}`;

    quoteText.style.opacity = "1";
    quoteAuthor.style.opacity = "1";
  }, 250);
});

// Characters Cards
const characters_data = [
  {
    id: 1,
    name: "Asta",
    image: "../../assets/warriors/1.jpg",
    squad: "Black Bulls",
    description: "Anti-Magic wielder striving to become the Wizard King.",
  },
  {
    id: 2,
    name: "Yuno",
    image: "../../assets/warriors/2.jpg",
    squad: "Golden Dawn",
    description: "A prodigy blessed with immense mana and Wind Magic.",
  },
  {
    id: 3,
    name: "Noelle Silva",
    image: "../../assets/warriors/3.jpg",
    squad: "Black Bulls",
    description: "A royal mage mastering her powerful Water Magic.",
  },
  {
    id: 4,
    name: "Yami Sukehiro",
    image: "../../assets/warriors/4.jpg",
    squad: "Captain • Black Bulls",
    description: "Leader renowned for Dark Magic and fearless resolve.",
  },
  {
    id: 5,
    name: "Julius",
    image: "../../assets/warriors/5.jpg",
    squad: "Wizard King",
    description: "A legendary mage wielding extraordinary Time Magic.",
  },
  {
    id: 6,
    name: "Mereoleona",
    image: "../../assets/warriors/6.jpg",
    squad: "Crimson Lion",
    description: "A fierce warrior feared across every kingdom.",
  },
  {
    id: 7,
    name: "Fuegoleon",
    image: "../../assets/warriors/7.jpg",
    squad: "Crimson Lion",
    description: "A noble captain embodying strength and leadership.",
  },
  {
    id: 8,
    name: "Luck Voltia",
    image: "../../assets/warriors/8.jpg",
    squad: "Black Bulls",
    description: "A battle-loving mage with devastating Lightning Magic.",
  },
  {
    id: 9,
    name: "Nacht Faust",
    image: "../../assets/warriors/9.jpg",
    squad: "Black Bulls",
    description: "The mysterious vice-captain wielding Shadow Magic.",
  },
  {
    id: 10,
    name: "Charlotte",
    image: "../../assets/warriors/10.jpg",
    squad: "Blue Rose",
    description: "A captain known for elegant yet powerful Briar Magic.",
  },
  {
    id: 11,
    name: "Finral",
    image: "../../assets/warriors/11.jpg",
    squad: "Black Bulls",
    description: "Master of Spatial Magic and transportation support.",
  },
  {
    id: 12,
    name: "Vanessa",
    image: "../../assets/warriors/12.jpg",
    squad: "Black Bulls",
    description: "A witch whose fate-altering magic changes battles.",
  },
];

const characterTrack = document.querySelector(".character-track");

characterTrack.innerHTML = characters_data
  .map(
    (character) => `
            <div class="character-card">
                <img src="${character.image}" alt="${character.name}">
        
                <div class="character-info">
                    <span class="squad-tag">${character.squad}</span>
                    <h3>${character.name}</h3>
                    <p>${character.description}</p>
                </div>
            </div>
        `,
  )
  .join("");

const track = document.querySelector(".character-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const cards = [...document.querySelectorAll(".character-card")];

let cardWidth = 0;
let currentIndex = 0;
let maxIndex = 0;

function measureSlider() {
  const gap = parseFloat(getComputedStyle(track).gap) || 0;
  cardWidth = cards[0].getBoundingClientRect().width + gap;
  const visibleCards = Math.max(
    1,
    Math.floor((track.parentElement.offsetWidth + gap) / cardWidth),
  );

  maxIndex = Math.max(0, cards.length - visibleCards);
  currentIndex = Math.min(currentIndex, maxIndex);
}

function moveSlider(animate = true) {
  track.style.transition = animate ? "transform 0.5s ease" : "none";
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function updateButtons() {
  prevBtn.hidden = currentIndex === 0;
  nextBtn.hidden = currentIndex === maxIndex;
}

function updateSlider() {
  measureSlider();
  moveSlider();
  updateButtons();
}

measureSlider();
moveSlider(false);
updateButtons();

nextBtn.addEventListener("click", () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
  }

  updateSlider();
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  }

  updateSlider();
});

window.addEventListener("resize", () => {
  measureSlider();
  moveSlider(false);
  updateButtons();
});
