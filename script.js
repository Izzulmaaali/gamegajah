let feedCount = 0;
let hasGivenBirth = false;

function feedElephant() {
  if (hasGivenBirth) return;

  feedCount++;
  document.getElementById("status").textContent = `Gajah sudah diberi makan ${feedCount} kali.`;

  const elephant = document.getElementById("elephant");
  elephant.style.transform = "scale(1.1)";
  setTimeout(() => {
    elephant.style.transform = "scale(1)";
  }, 350);
  
  if (feedCount >= 5) {
    giveBirth();
  }
}

function giveBirth() {
  hasGivenBirth = true;
  document.getElementById("status").textContent = "Gajah kenyang dan melahirkan anak gajah! 👶🐘";

  const babyElephants = document.getElementById("babyElephants");
  const babyImg = document.createElement("img");
  babyImg.src = "img/anak_gajah.png";
  babyImg.alt = "Anak Gajah";
  babyImg.classList.add("baby");

  babyElephants.appendChild(babyImg);
}
