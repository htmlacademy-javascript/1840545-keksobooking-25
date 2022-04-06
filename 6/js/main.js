import { createCards } from './cards.js';
import './form-work.js';
const arrayCards = createCards();
const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.append(arrayCards[0]);

