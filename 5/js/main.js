import { createCards } from './cards.js';
const arrayCards = createCards();
const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.append(arrayCards[0]);

