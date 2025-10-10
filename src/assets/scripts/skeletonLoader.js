 document.addEventListener("DOMContentLoaded", () => {
        const picture = document.querySelector(".header__image-container");
        const img = picture.querySelector("img");
        const skeleton = document.querySelector(".header__image-skeleton");

        img.addEventListener("load", () => {
         skeleton.style.display = "none";
         picture.style.display = "inline";
        });
});