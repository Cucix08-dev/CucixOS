desktop.style.backgroundImage = `url(../../imgs/desktop-backgrounds/${bg[0]})`;

const desktopGridApps = document.getElementById("desktop-grid-apps");

//THIS ARRAY HAVE ALL DATA OF DESKTOP USER.
const datas = [
    `
    <div class="dir" id="portfolio">
        <img class="folder-or-file exe"></img>
        <input type="text" value="Cucix Portfolio" name="Portofolio.exe" class="name-folder-file" readonly>
    </div>
    `,
]

let windows = new Map();

let cols = 10;

const vw = window.innerWidth / 100;
const vh = window.innerHeight / 100;

const screenWidth = desktop.offsetWidth;
let cellWidth = screenWidth * 0.1;

if (screenWidth < 800) {
    cols = 5;
    cellWidth = screenWidth * 0.2;
}

const rows = Math.floor(desktopGridApps.offsetHeight / cellWidth);
const totalCells = cols * rows;

for (let i = 0; i < totalCells; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    desktopGridApps.appendChild(square);
    try{
        square.innerHTML = (datas[i]);
    }
    catch(e){
        square.innerHTML = '';
    }
}

const portfolio = document.getElementById("portfolio");
let windowNumIndex = 0;

function enableDrag(win) {
    const header = win.querySelector("nav.window");

    let offsetX = 0;
    let offsetY = 0;
    let isDown = false;

    header.addEventListener("mousedown", (e) => {
        isDown = true;

        const rect = win.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        win.style.transition = "none";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDown) return;

        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY - 1230;

        win.style.transform = `translate(${x}px, ${y}px)`;
    });

    document.addEventListener("mouseup", () => {
        isDown = false;
    });
}

portfolio.addEventListener("click", () => {
    const html = `
        <div class="window" id="win${windowNumIndex}">
            <nav class="window">
                <ul>
                    <li class="NOTCLOSE_WINDOW" id="archive${windowNumIndex}">
                        <svg width="24" height="8" viewBox="0 0 32 8">
                            <line x1="0" y1="4" x2="32" y2="4" stroke="#000" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </li>
                    <li class="NOTCLOSE_WINDOW" id="fullscreen${windowNumIndex}">
                        <svg width="24" height="24" viewBox="0 0 32 32">
                            <rect x="4" y="4" width="24" height="24" stroke="#000" stroke-width="2" fill="none" rx="4"/>
                        </svg>
                    </li>
                    <li class="CLOSE_WINDOW" id="close${windowNumIndex}">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path d="M6 6 L18 18 M18 6 L6 18" stroke="#000" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </li>
                </ul>
            </nav>

            <iframe src="https://cucix-portfolio.vercel.app/" frameborder="1" class="window"></iframe>
        </div>
    `;

    desktop.insertAdjacentHTML("beforeend", html);

    const win = document.getElementById(`win${windowNumIndex}`);

    const x0 = screenWidth / 4;
    const y0 = (desktop.offsetHeight + win.offsetHeight) / 2;

    const x = x0 + (Math.floor(Math.random() * 100) - 50);
    const y = y0 + (Math.floor(Math.random() * 100) - 50);

    win.style.transform = `translate(${x}px, ${-y}px)`;



    enableDrag(win);

    const closeBtn = document.getElementById(`close${windowNumIndex}`);
    closeBtn.addEventListener("click", () => {
        win.remove();
    });

    windowNumIndex++;
});
