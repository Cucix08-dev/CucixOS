function randomInt(max){
    interval = max / 2;
    return Math.floor(Math.random() * interval) + interval;
}

setTimeout(() => {
    const screen = document.getElementById("loading-screen");
    screen.classList.add("LOADED");
    setTimeout(() => {
        window.location.href = "src/access/access-page.html";
    }, 100);
}, randomInt(5000));