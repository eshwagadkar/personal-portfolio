import throttle from "lodash/throttle"

class RevealOnScroll {
    
    constructor(els) {
      this.itemsToReveal = els
      this.browserHeight = window.innerHeight
      this.hideInitially()
      this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
      this.events()
    }

    events() { window.addEventListener('scroll', this.scrollThrottle) }

    calcCaller() {
        // console.log('Scroll Function Ran')
        this.itemsToReveal.forEach(el => {
            if(el.isRevealed ==  false) {
                this.calculateIfScrolledTo(el)
            }
        })
    }

    
    calculateIfScrolledTo(el){
      if(window.scrollY + this.browserHeight > el.offsetTop){
        //   console.log('Element was calculated')
        let scrollPercent = (el.getBoundingClientRect().y / this.browserHeight) * 100

        if(scrollPercent < 80) {
            el.classList.add('reveal-item--is-visible')
            el.isRevealed = true

            if(el.isLastItem) { 
                window.removeEventListener('scroll', this.scrollThrottle)
            }
        }
      }
    }

    hideInitially() {

        this.itemsToReveal.forEach(el => { 
            el.classList.add('reveal-item')
            el.isRevealed = false
        })

        // To find the last item in nodelist and add a property (isLastItem) to it.
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true 
    }
}

export default RevealOnScroll;