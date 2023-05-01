const imgs = document.querySelectorAll(".dice img");

function handleClick() {
  const img1No = Math.floor(Math.random() * 6) + 1;
  const img2No = Math.floor(Math.random() * 6) + 1;

  const img1 = `./images/dice${img1No}.png`;
  const img2 = `./images/dice${img2No}.png`;

  imgs[0].setAttribute("src", img1);
  imgs[1].setAttribute("src", img2);

  if (img1No > img2No) {
    document.querySelector("h1").innerHTML = "P1 WON!";
  } else if (img1No < img2No) {
    document.querySelector("h1").innerHTML = "P2 WON!";
  } else {
    document.querySelector("h1").innerHTML = "DRAW!";
  }
}

document.querySelector("#roll").addEventListener("click", handleClick);
