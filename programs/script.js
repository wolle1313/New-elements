const dodaj = document.querySelector(".wyzsze button");
const usun = document.querySelector(".nizsze button");
const boxes = document.querySelector(".boxes");
let noBoxes = 0;
const createBox = () => {
if (noBoxes < 6) {
    const div = document.createElement("div");
    div.classList.add("box");
    boxes.appendChild(div);
    div.textContent = noBoxes + 1;
    noBoxes++;
    if (noBoxes == 6) {
        dodaj.style.backgroundColor = "white";
        dodaj.style.color = "#C38D9E";
        dodaj.style.cursor = "auto";
    }
}
else {
    alert("You can not do any more boxes!");
}
}
const deleteBox = ()  => {
    if (noBoxes > 1) {
        const div = document.querySelector(".boxes .box:last-of-type");
        boxes.removeChild(div);
        if (noBoxes == 6) {
            dodaj.style.backgroundColor = "#C38D9E";
            dodaj.style.color = "#E27D60";
            dodaj.style.cursor = "pointer";
        }
        noBoxes--;

    }
    else {
        alert("you can not delete first box. He is immortal");
    }
}
createBox();
dodaj.addEventListener('click', createBox);
usun.addEventListener('click', deleteBox);