const mydiv = document.querySelector("#mydiv");

let isDragged = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

mydiv.addEventListener("mousedown", dragStart);
mydiv.addEventListener("mouseup", dragEnd);
mydiv.addEventListener("mouseout", dragEnd);
mydiv.addEventListener("mousemove", drag);

function dragStart(e) {
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;

  isDragged = true;
}

function dragEnd(e) {
  isDragged = false;
}

function drag(e) {
  if (isDragged) {
    e.preventDefault();
    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, mydiv);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}