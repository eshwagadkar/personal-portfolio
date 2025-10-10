import './assets/styles/main.scss';
import './assets/scripts/skeletonLoader';
import RevealOnScroll from './assets/scripts/RevealOnScroll';

new RevealOnScroll(document.querySelectorAll('.skill-item'))
new RevealOnScroll(document.querySelectorAll('.projects'))
new RevealOnScroll(document.querySelectorAll('.projects-item'))

if( process.env.NODE_ENV === 'production' ) {
    console.log('Production Mode')
} else if ( process.env.NODE_ENV === 'development' ) {
    console.log('Development Mode')
}

if(module.hot) {
    module.hot.accept()
}