'use strict';

import 'nodelist-foreach-polyfill';

import  tabs from './modules/tabs';
import  modal from './modules/modal';
import  timer from './modules/timer';
import  cards from './modules/cards';
import  calculator from './modules/calculator';
import  forms from './modules/forms';
import  slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {

    tabs();
    modal();
    timer();
    cards();
    calculator();
    forms();
    slider();

});


