 document.addEventListener("DOMContentLoaded", () => {
        const picture = document.querySelector(".header__image-container")
        const img = picture.querySelector("img")
        const skeleton = document.querySelector(".header__image-skeleton")

        function hideSkeleton() {
          skeleton.style.display = "none"
          picture.style.display = "inline"
        }

        // Case 1: Image already loaded (cache)
        if (img.complete) {
            hideSkeleton()
        } else {
           // Case 2: Load will fire normally
           img.addEventListener("load", hideSkeleton)
           
           // Case 3: Image fails to load
           img.addEventListener("error", () => {
           skeleton.style.display = "none" // or keep it, your choice
           })
        }
})