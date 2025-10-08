import './assets/styles/main.scss';
import RevealOnScroll from './assets/scripts/RevealOnScroll';

let revealOnScroll = new RevealOnScroll()


if( process.env.NODE_ENV === 'production' ) {
    console.log('Production Mode')
} else if ( process.env.NODE_ENV === 'development' ) {
    console.log('Development Mode')
}

if(module.hot) {
    module.hot.accept()
}