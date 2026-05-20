const accountImg = document.getElementById("account-img");
const passwordContainer = document.getElementById("password");

const password = "1234";
let appearePasswordContainer = false;

accountImg.addEventListener("click", (e) => {
    appearePasswordContainer = !appearePasswordContainer;
    if (appearePasswordContainer) {
        passwordContainer.classList.remove("appearePassword")
        bgContainer.classList.remove("appearePassword")
    }
    else{
        passwordContainer.classList.add("appearePassword")
        bgContainer.classList.add("appearePassword")
    }
});

passwordContainer.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && passwordContainer.value === "1234") {
        window.location.href = "../desktop/desktop.html";
    }
});
