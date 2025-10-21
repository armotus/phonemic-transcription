'use strict';

// node usage.js

let text = 'What we know is a drop, what we do not know is an ocean';
let transcriber = require('../js/phonemic-transcriber.js');
let MAPAphonemetext = transcriber.Transcribe(text,1,1,0,0,0,0);
let SAPAphonemetext = transcriber.Transcribe(text,2,1,0,0,0,0);

console.log(MAPAphonemetext);
console.log(SAPAphonemetext);

// Mode MAPA : wat  wii  nou  iz  ə  draap  ,  wat  wii  duu  naat  nou  iz  aen  ou.shən
// Mode SAPA : wat  wī  nou  iz  ə  drāp  ,  wat  wī  dū  nāt  nou  iz  æn  ou.shən
