class RevealOnScroll {
    
    constructor() {
        this.itemsToReveal = document.querySelectorAll('.skill-item')
        this.itemsToRevealProjects = document.querySelectorAll('.projects')
        this.hideInitially()
        this.events()
    }

    calculateIfScrolledTo(el){
        let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100

        if(scrollPercent < 85) {
            el.classList.add('reveal-item--is-visible')
        }
    }

    events() {
        window.addEventListener('scroll', () => {
            
            this.itemsToReveal.forEach(el => {
            this.calculateIfScrolledTo(el)
            })

            this.itemsToRevealProjects.forEach(el => {
            this.calculateIfScrolledTo(el)
            })


        })
    }

    hideInitially() {
        this.itemsToReveal.forEach(el => el.classList.add('reveal-item'))
        this.itemsToRevealProjects.forEach(el => el.classList.add('reveal-item'))
        
    }
}

export default RevealOnScroll;