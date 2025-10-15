"use strict";

// npm test

let expect = require("chai").expect;
let transcriber = require("../js/phonemic-transcriber.js");

describe("#phonemic-transcriber", function() {

	// Mode MAPA

	it("MAPA 1 : Syllable", function() {
	let result = transcriber.Transcribe("Alphabet: What we know is a drop, what we do not know is an ocean",1,0,0,0,0);
	expect(result).to.equal("ael.fə.bet  :  wat  wii  nou  iz  ə  draap  ,  wat  wii  duu  naat  nou  iz  aen  ou.shən");
	});
	it("MAPA 2 : Stress 1", function() {
	let result = transcriber.Transcribe("Alphabet: What we know is a drop, what we do not know is an ocean",1,1,0,0,0);
	expect(result).to.equal("áél.fə.bet  :  wát  wíí  nóu  íz  ə  drááp  ,  wát  wíí  dúú  náát  nóu  íz  áén  óu.shən");
	});
	it("MAPA 3 : Stress 2", function() {
	let result = transcriber.Transcribe("Alphabet: What we know is a drop, what we do not know is an ocean",1,0,1,0,0);
	expect(result).to.equal("ael.fə.bët  :  wat  wii  nou  iz  ə  draap  ,  wat  wii  duu  naat  nou  iz  aen  ou.shən");
	});
	it("MAPA 4 : Stress 12", function() {
	let result = transcriber.Transcribe("Alphabet: What we know is a drop, what we do not know is an ocean",1,1,1,0,0);
	expect(result).to.equal("áél.fə.bët  :  wát  wíí  nóu  íz  ə  drááp  ,  wát  wíí  dúú  náát  nóu  íz  áén  óu.shən");
	});
	it("MAPA 5 : Uppercase", function() {
	let result = transcriber.Transcribe("Alphabet: What we know is a drop, what we do not know is an ocean",1,0,0,1,0);
	expect(result).to.equal("aeL.Fə.BeT  :  WaT  Wii  Nou  iZ  ə  DRaaP  ,  WaT  Wii  Duu  NaaT  Nou  iZ  aeN  ou.SHəN");
	});
	it("MAPA 6 : Fusion", function() {
	let result = transcriber.Transcribe("What we know is a drop, what we do not know is an ocean",1,0,0,0,1);
	expect(result).to.equal("what { wat }  we { wii }  know { nou }  is { iz }  a { ə }  drop { draap }  ,  what { wat }  we { wii }  do { duu }  not { naat }  know { nou }  is { iz }  an { aen }  ocean { ou.shən }");
	});

});
