let n = 16;
let btn = document.querySelector(".reset");
let container = document.querySelector(".container");
createGrid(n);
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function createGrid(n) {
    container.innerHTML = '';
    for (let i = 1; i <= n * n; i++) {
        let content = document.createElement("div");
        content.setAttribute("data-opacity", 0);
        content.addEventListener("mouseover", (event) => {
            let currentOpacity = parseFloat(event.target.getAttribute("data-opacity"));
            if (currentOpacity === 0) {
                let randomColor = getRandomColor();
                event.target.style.background = randomColor;
                event.target.setAttribute("data-color", randomColor);
            }
            if (currentOpacity < 1) {
                currentOpacity += 0.1;
                event.target.setAttribute("data-opacity", currentOpacity);
                event.target.style.opacity = currentOpacity;
            }
        });
        container.appendChild(content);
    }
    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${n}, 1fr)`;
}
btn.addEventListener("click", () => {
    let newSize = prompt("Enter new grid size (16-100):");
    n = parseInt(newSize);
    if (n >= 16 && n <= 100) {
        createGrid(n);
    } else {
        alert("Please enter a valid number between 16 and 100.");
    }
});
