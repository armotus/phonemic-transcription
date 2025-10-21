"use strict";

// npm test

let expect = require("chai").expect;
let transcriber = require("../js/phonemic-transcriber.js");

describe("#phonemic-transcriber", function() {

	// Mode MAPA

	it("MAPA 1 : Syllable", function() {
	let result = transcriber.Transcribe("Alphabet: What we know is a drop, what we do not know is an ocean",1,1,0,0,0,0);
	expect(result).to.equal("ael.fə.bet  :  wat  wii  nou  iz  ə  draap  ,  wat  wii  duu  naat  nou  iz  aen  ou.shən");
	});
	it("MAPA 2 : Stress 1", function() {
	let result = transcriber.Transcribe("Alphabet: What we know is a drop, what we do not know is an ocean",1,1,1,0,0,0);
	expect(result).to.equal("áél.fə.bet  :  wát  wíí  nóu  íz  ə  drááp  ,  wát  wíí  dúú  náát  nóu  íz  áén  óu.shən");
	});
	it("MAPA 3 : Stress 2", function() {
	let result = transcriber.Transcribe("Alphabet: What we know is a drop, what we do not know is an ocean",1,1,0,1,0,0);
	expect(result).to.equal("ael.fə.bët  :  wat  wii  nou  iz  ə  draap  ,  wat  wii  duu  naat  nou  iz  aen  ou.shən");
	});
	it("MAPA 4 : Stress 12", function() {
	let result = transcriber.Transcribe("Alphabet: What we know is a drop, what we do not know is an ocean",1,1,1,1,0,0);
	expect(result).to.equal("áél.fə.bët  :  wát  wíí  nóu  íz  ə  drááp  ,  wát  wíí  dúú  náát  nóu  íz  áén  óu.shən");
	});
	it("MAPA 5 : Uppercase", function() {
	let result = transcriber.Transcribe("Alphabet: What we know is a drop, what we do not know is an ocean",1,1,0,0,1,0);
	expect(result).to.equal("aeL.Fə.BeT  :  WaT  Wii  Nou  iZ  ə  DRaaP  ,  WaT  Wii  Duu  NaaT  Nou  iZ  aeN  ou.SHəN");
	});
	it("MAPA 6 : Fusion", function() {
	let result = transcriber.Transcribe("What we know is a drop, what we do not know is an ocean",1,1,0,0,0,1);
	expect(result).to.equal("what { wat }  we { wii }  know { nou }  is { iz }  a { ə }  drop { draap }  ,  what { wat }  we { wii }  do { duu }  not { naat }  know { nou }  is { iz }  an { aen }  ocean { ou.shən }");
	});

	// Mode SAPA

	it("SAPA 1 : Syllable", function() {
	let result = transcriber.Transcribe("Alphabet: What we know is a drop, what we do not know is an ocean",2,1,0,0,0,0);
	expect(result).to.equal("æl.fə.bet  :  wat  wī  nou  iz  ə  drāp  ,  wat  wī  dū  nāt  nou  iz  æn  ou.shən");
	});
	it("SAPA 2 : Stress 1", function() {
	let result = transcriber.Transcribe("Alphabet: What we know is a drop, what we do not know is an ocean",2,1,1,0,0,0);
	expect(result).to.equal("æ³l.fə.bet  :  wa³t  wī³  nou³  i³z  ə  drā³p  ,  wa³t  wī³  dū³  nā³t  nou³  i³z  æ³n  ou³.shən");
	});
	it("SAPA 3 : Stress 2", function() {
	let result = transcriber.Transcribe("Alphabet: What we know is a drop, what we do not know is an ocean",2,1,0,1,0,0);
	expect(result).to.equal("æl.fə.be²t  :  wat  wī  nou  iz  ə  drāp  ,  wat  wī  dū  nāt  nou  iz  æn  ou.shən");
	});
	it("SAPA 4 : Stress 12", function() {
	let result = transcriber.Transcribe("Alphabet: What we know is a drop, what we do not know is an ocean",2,1,1,1,0,0);
	expect(result).to.equal("æ³l.fə.be²t  :  wa³t  wī³  nou³  i³z  ə  drā³p  ,  wa³t  wī³  dū³  nā³t  nou³  i³z  æ³n  ou³.shən");
	});
	it("SAPA 5 : Uppercase", function() {
	let result = transcriber.Transcribe("Alphabet: What we know is a drop, what we do not know is an ocean",2,1,0,0,1,0);
	expect(result).to.equal("æL.Fə.BeT  :  WaT  Wī  Nou  iZ  ə  DRāP  ,  WaT  Wī  Dū  NāT  Nou  iZ  æN  ou.SHəN");
	});
	it("SAPA 6 : Fusion", function() {
	let result = transcriber.Transcribe("What we know is a drop, what we do not know is an ocean",2,1,0,0,0,1);
	expect(result).to.equal("what { wat }  we { wī }  know { nou }  is { iz }  a { ə }  drop { drāp }  ,  what { wat }  we { wī }  do { dū }  not { nāt }  know { nou }  is { iz }  an { æn }  ocean { ou.shən }");
	});

});
