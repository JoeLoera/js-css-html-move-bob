const bob = document.querySelector(".bob");
const eyes = document.querySelector(".eye-container");

let left = 100;
let uppies = 100;

function moveRight() {
  left += 100;
  bob.style.left = left + "px";
  eyes.style.transform = "rotate(0deg)";
  eyes.style.left = "60px";
}

function moveLeft() {
  left -= 100;
  bob.style.left = left + "px";
  eyes.style.transform = "rotate(180deg)";
  eyes.style.left = "-60px";
}

function moveUp() {
  uppies += 100;
  bob.style.bottom = uppies + "px";
}

function moveDown() {
  uppies -= 100;
  bob.style.bottom = uppies + "px";
}

function moveBob(e) {
  console.log("pressing key", e.key);
  if (e.key === "ArrowLeft") {
    //move bob left
    moveLeft();
  }
  if (e.key === "ArrowRight") {
    //move bob right
    moveRight();
  }
  if (e.key === "ArrowUp") {
    //move bob up
    moveUp();
  }
  if (e.key === "ArrowDown") {
    //move bob down
    moveDown();
  }
}
document.addEventListener("keydown", moveBob);
