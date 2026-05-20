desktop.style.backgroundImage = `url(../../imgs/desktop-backgrounds/${bg[0]})`;

const desktopGridApps = document.getElementById("desktop-grid-apps");

setInterval(() => {
    desktopGridApps.innerHTML = "";
    
    const cols = 20;

    const vw = window.innerWidth / 100;
    const vh = window.innerHeight / 100;

    const cellHeight = (desktop.offsetHeight > desktop.offsetWidth*1.5)
        ? vw * 10   // 10vw
        : vw * 5;   // 5vw

    const rows = Math.floor(desktopGridApps.offsetHeight / cellHeight);
    const totalCells = cols * rows;

    for (let i = 0; i < totalCells; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        desktopGridApps.appendChild(square);
    }
}, 250);
