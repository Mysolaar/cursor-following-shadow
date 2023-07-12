const box = document.querySelector(".box");
const boxPosition = box.getBoundingClientRect()

const moveShadow = (e) => {
  const shadow = document.createElement("div");
  shadow.classList.add("cursor-shadow");
  box.append(shadow);

  shadow.style.top = e.clientY - boxPosition.y +'px'
  shadow.style.left = e.clientX - boxPosition.x +'px'

  setTimeout(() => {
    box.removeChild(shadow)
  }, 1000)
};

box.addEventListener("mousemove", (e) => moveShadow(e));
