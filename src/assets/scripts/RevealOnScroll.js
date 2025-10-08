import throttle from "lodash/throttle"

class RevealOnScroll {
    
    constructor() {
      this.itemsToReveal = document.querySelectorAll('.skill-item')
      this.itemsToRevealProjects = document.querySelectorAll('.projects')
      this.hideInitially()
      this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
      this.events()
    }

    events() { window.addEventListener('scroll', this.scrollThrottle) }

    calcCaller() {
        console.log('Scroll function ran')

        this.itemsToReveal.forEach(el => this.calculateIfScrolledTo(el) )
        this.itemsToRevealProjects.forEach(el => this.calculateIfScrolledTo(el) )
    }

    
    calculateIfScrolledTo(el){
        let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100

        if(scrollPercent < 85) {
            el.classList.add('reveal-item--is-visible')
        }
    }

    hideInitially() {
        this.itemsToReveal.forEach(el => el.classList.add('reveal-item'))
        this.itemsToRevealProjects.forEach(el => el.classList.add('reveal-item'))
        
    }
}

export default RevealOnScroll;