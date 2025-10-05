'use strict';

// node usage.js

let text = 'What we know is a drop, what we do not know is an ocean';
let transcriber = require('../js/phonemic-transcriber.js');
let phonemetext = transcriber.Transcribe(text,1,0,0,0,0);

console.log(phonemetext);

// wat  wii  nou  iz  ə  draap  ,  wat  wii  duu  naat  nou  iz  aen  ou.shən
