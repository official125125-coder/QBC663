/* =====================================
   QBC663 OFFICIAL
===================================== */


/*
  SIMPAN LOGO GAME DI:

  images/

  Contoh:
  images/mega888.png
  images/pussy888.png

  Kalau logo belum ada,
  website akan menggunakan 🎰.
*/


const games = [

  {
    name: "MEGA888",
    image: "images/mega888.png"
  },

  {
    name: "PUSSY888",
    image: "images/pussy888.png"
  },

  {
    name: "918KISS ORI",
    image: "images/918kissori.png"
  },

  {
    name: "918KAYA",
    image: "images/918kaya.png"
  },

  {
    name: "NEWTOWN",
    image: "images/newtown.png"
  },

  {
    name: "PLAYBOY",
    image: "images/playboy.png"
  },

  {
    name: "SUNCITY",
    image: "images/suncity.png"
  },

  {
    name: "GW99",
    image: "images/gw99.png"
  },

  {
    name: "ROLLEX",
    image: "images/rollex.png"
  },

  {
    name: "LIVE22",
    image: "images/live22.png"
  },

  {
    name: "ACE333",
    image: "images/ace333.png"
  },

  {
    name: "JOKER",
    image: "images/joker.png"
  },

  {
    name: "EVO888",
    image: "images/evo888.png"
  },

  {
    name: "XE88",
    image: "images/xe88.png"
  },

  {
    name: "KING855",
    image: "images/king855.png"
  },

  {
    name: "SLOTS22",
    image: "images/slots22.png"
  }

];


/* ELEMENTS */

const gameGrid =
  document.getElementById("gameGrid");

const gameModal =
  document.getElementById("gameModal");

const selectedGame =
  document.getElementById("selectedGame");

const modalClose =
  document.getElementById("modalClose");

const modalOverlay =
  document.getElementById("modalOverlay");


/* CREATE GAME LIST */

games.forEach(function(game) {

  const card =
    document.createElement("button");

  card.type = "button";

  card.className = "game-card";


  const imageBox =
    document.createElement("div");

  imageBox.className =
    "game-image";


  const image =
    document.createElement("img");

  image.src =
    game.image;

  image.alt =
    game.name;

  image.loading =
    "lazy";


  /* DEFAULT LOGO */

  image.onerror = function() {

    image.remove();

    const defaultLogo =
      document.createElement("div");

    defaultLogo.className =
      "default-game-logo";

    defaultLogo.textContent =
      "🎰";

    imageBox.appendChild(
      defaultLogo
    );

  };


  const gameName =
    document.createElement("span");

  gameName.className =
    "game-name";

  gameName.textContent =
    game.name;


  imageBox.appendChild(image);

  card.appendChild(imageBox);

  card.appendChild(gameName);


  card.addEventListener(
    "click",
    function() {

      openModal(game.name);

    }
  );


  gameGrid.appendChild(card);

});


/* OPEN POPUP */

function openModal(gameName) {

  selectedGame.textContent =
    gameName;

  gameModal.classList.add(
    "active"
  );

  document.body.style.overflow =
    "hidden";

}


/* CLOSE POPUP */

function closeModal() {

  gameModal.classList.remove(
    "active"
  );

  document.body.style.overflow =
    "";

}


modalClose.addEventListener(
  "click",
  closeModal
);


modalOverlay.addEventListener(
  "click",
  closeModal
);


/* ESC CLOSE */

document.addEventListener(
  "keydown",
  function(event) {

    if (
      event.key === "Escape" &&
      gameModal.classList.contains("active")
    ) {

      closeModal();

    }

  }
);


/* BACKGROUND PARTICLES */

const particleContainer =
  document.getElementById("particles");


const particleAmount = 12;


for (
  let i = 0;
  i < particleAmount;
  i++
) {

  const particle =
    document.createElement("span");

  particle.className =
    "particle";


  particle.style.left =
    Math.random() * 100 + "%";


  particle.style.top =
    (
      25 +
      Math.random() * 85
    ) + "%";


  const size =
    1 +
    Math.random() * 1.5;


  particle.style.width =
    size + "px";

  particle.style.height =
    size + "px";


  particle.style.animationDuration =
    (
      11 +
      Math.random() * 11
    ) + "s";


  particle.style.animationDelay =
    (
      Math.random() * 12
    ) + "s";


  particleContainer.appendChild(
    particle
  );

}
