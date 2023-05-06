const hamburgerBtn = document.querySelector(".navMobileBtn");
const navMobile = document.querySelector(".navigationLinkContainer");

hamburgerBtn.addEventListener("click", () => {
    navMobile.classList.toggle("active");
})