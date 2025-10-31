"use strict";
function Transcribe(text,version,syllable,stress1,stress2,lowerca,fusion,principle) {
	// SETTINGS
	if ( text.length == 0 ) { return "" ; };
	// TEXT SETTINGS
	text = text.toString();
	text = text.toLowerCase();
	// EXCEPTION WORDS ( FOR EXAMPLE: .tokyo , .nebraska , .shakespeare )
	text = text.replace(/^(.)/g," $1").replace(/([^a-z])\.([a-z])/g,"$1Æ$2");
	// TEXT SEPARATION
	text = text.replace(/([a-z]+)(\´)([a-z]+)/g,"$1åîǿ$3");
	text = text.replace(/([a-z]+)(\’)([a-z]+)/g,"$1åîǿ$3");
	text = text.replace(/([a-z]+)(\')([a-z]+)/g,"$1åîǿ$3");
	text = text.replace(/(\n)\t+/g,"\n\n").replace(/\n/g,"Þ").replace(/\s/g," ");
	text = text.replace(/([^a-z\.\-Æ#@áàâäǎăāãåǻąæǽćċĉčçďđðéèėêëěĕēęẹəġĝğģĥħıíìîïǐĭīĩįịĵķĸĺļłľŀŉńňñņŋóòôöǒŏōõőọøǿơœŕřŗśŝšşſßťţŧþúùûüǔŭūũűůųụưẃẁŵẅýỳŷÿỹźżž])/g," $1 ");
	text = text.replace(/åîǿ/g,"'");
	text = text.replace(/ {2,}/g," ");
	text = text.trim();
	// TEXT ARRAY
	let ListT = text.split(" ");
	let positionT = 0;
	let result = "";
	// TEXT PROCESS
	while ( ListT[positionT] ) {
		// WORD PROCESS
		let word = ListT[positionT];
		// EXCEPTION BLOCK : { TEXT }
		if ( word == "{" ) {
			let positionB = ListT.indexOf("}", positionT);
			while ( positionB !== -1 && positionT < positionB ) {
				result = result + word + " ";
				positionT = positionT + 1;
				word = ListT[positionT];
				continue;
			};
		};
		// EXCEPTION CHARACTERS ( Æ , # , @ , etc )
		if ( word.search(/[Æ#@áàâäǎăāãåǻąæǽćċĉčçďđðéèėêëěĕēęẹəġĝğģĥħıíìîïǐĭīĩįịĵķĸĺļłľŀŉńňñņŋóòôöǒŏōõőọøǿơœŕřŗśŝšşſßťţŧþúùûüǔŭūũűůųụưẃẁŵẅýỳŷÿỹźżž]/g) !== -1 ) {
			result = result + word + "  ";
			positionT = positionT + 1;
			word = ListT[positionT];
			continue;
		};
		// WORD WITH PERIOD ( . )
		const perioda = /[a-z]+(\.){2,}$/;
		if ( perioda.test(word) ) {		
			let worda = word.replace(/((\.){2,})$/g," $1");
			let ListP = worda.split(" ");
			ListT.splice(positionT, 1, ListP[0], ListP[1]);
			continue;
		};
		const period = /[a-z]+(\.)$/;
		if ( period.test(word) ) {
			if ( apadict[word] == undefined ) {
				let wordz = word.slice(0,-1);
				ListT.splice(positionT, 1, wordz, ".");
				continue;
			};
		};
		// WORD WITH HYPHEN ( - )
		const hyphena = /^(\-){1,}[a-z]+/;
		if ( hyphena.test(word) ) {
				let worda = word.replace(/^(\-){1,}/g,"");
				ListT.splice(positionT, 1, "-", worda);
				continue;
		};
		const hyphenz = /[a-z]+(\-){1,}$/;
		if ( hyphenz.test(word) ) {
				let wordz = word.replace(/(\-){1,}$/g,"");
				ListT.splice(positionT, 1, wordz, "-");
				continue;
		};
		const hyphen = /^[a-z]+((\-)([a-z]+)){1,}$/;
		if ( hyphen.test(word) ) {
			if ( apadict[word] == undefined ) {
				let ListH = word.split("-");
				let w = ListH[0];
				let n = 1;
				while ( n < ListH.length-1 ) {
					w = w + "-" + ListH[n];
					n = n + 1;
				};
				ListT.splice(positionT, 1, w, "-", ListH[ListH.length-1]);
				continue;
			};
		};
		// WORD THAT IS IN THE DICTIONARY
		if ( apadict[word] ) {
			let textsyllable = apadict[word];
			// MAXIMAL ONSET PRINCIPLE ( STRONG )
			if ( principle == 1 ) {
				textsyllable = textsyllable.replace(/DH/g,"Ď").replace(/JH/g,"Ĵ").replace(/NH/g,"Ň").replace(/SH/g,"Š").replace(/TH/g,"Ť").replace(/ZH/g,"Ž");
				textsyllable = textsyllable.replace(/([BCDFGJKLMNPRSTVWYZĎĴŇŠŤŽ]{1})([³²¹])(\!)/g,"$2.$1"); // ONE AFFECTED INTERVOCALIC CONSONANT
				textsyllable = textsyllable.replace(/([BCDFGJKLMNPRSTVWYZĎĴŇŠŤŽ]{2})([³²¹])(\¦)/g,"$2.$1"); // TWO AFFECTED INTERVOCALIC CONSONANTS
				textsyllable = textsyllable.replace(/Ď/g,"DH").replace(/Ĵ/g,"JH").replace(/Ň/g,"NH").replace(/Š/g,"SH").replace(/Ť/g,"TH").replace(/Ž/g,"ZH");
			};
			// WEAK SYLLABLE PRINCIPLE ( AMBISYLLABICITY )
			if ( principle == 2 ) {
				textsyllable = textsyllable.replace(/DH/g,"Ď").replace(/JH/g,"Ĵ").replace(/NH/g,"Ň").replace(/SH/g,"Š").replace(/TH/g,"Ť").replace(/ZH/g,"Ž");
				textsyllable = textsyllable.replace(/([BCDFGJKLMNPRSTVWYZĎĴŇŠŤŽ]{1})([³²¹])(\!)/g,"$2:$1"); // ONE AFFECTED INTERVOCALIC CONSONANT
				textsyllable = textsyllable.replace(/([BCDFGJKLMNPRSTVWYZĎĴŇŠŤŽ]{2})([³²¹])(\¦)/g,"$2:$1"); // TWO AFFECTED INTERVOCALIC CONSONANTS
				textsyllable = textsyllable.replace(/Ď/g,"DH").replace(/Ĵ/g,"JH").replace(/Ň/g,"NH").replace(/Š/g,"SH").replace(/Ť/g,"TH").replace(/Ž/g,"ZH");
			};
			// MODIFIED AMERICAN PHONETIC ALPHABET ( MAPA )
			if ( version == 1 ) {
				// VOWELS
				textsyllable = textsyllable.replace(/ox\~/g,"ər");
				textsyllable = textsyllable.replace(/éq\~/g,"éér").replace(/ëq\~/g,"ëër");
				textsyllable = textsyllable.replace(/ah/g,"a").replace(/eh/g,"e").replace(/ih/g,"i").replace(/uh/g,"u");
				textsyllable = textsyllable.replace(/áh/g,"á").replace(/éh/g,"é").replace(/íh/g,"í").replace(/úh/g,"ú");
				textsyllable = textsyllable.replace(/äh/g,"ä").replace(/ëh/g,"ë").replace(/ïh/g,"ï").replace(/üh/g,"ü");
				textsyllable = textsyllable.replace(/ox/g,"ə"); // INPUT "X" KEY ( KEYBOARD ) = OUTPUT LETTER "SCHWA" ( SCREEN )
				textsyllable = textsyllable.replace(/ax/g,"ae"); // INPUT "Q" KEY ( KEYBOARD ) = OUTPUT LETTER "ASH" ( SCREEN )
				textsyllable = textsyllable.replace(/áx/g,"áé").replace(/äx/g,"äë");
				textsyllable = textsyllable.replace(/aq/g,"aa").replace(/iq/g,"ii").replace(/oq/g,"oo").replace(/uq/g,"uu");
				textsyllable = textsyllable.replace(/áq/g,"áá").replace(/íq/g,"íí").replace(/óq/g,"óó").replace(/úq/g,"úú");
				textsyllable = textsyllable.replace(/äq/g,"ää").replace(/ïq/g,"ïï").replace(/öq/g,"öö").replace(/üq/g,"üü");
				// CONSONANTS
				textsyllable = textsyllable.replace(/C/g,"CH");
				textsyllable = textsyllable.replace(/NH/g,"NG");
				textsyllable = textsyllable.replace(/JH/g,"ÇÇ");
				textsyllable = textsyllable.replace(/J/g,"H");
				textsyllable = textsyllable.replace(/ÇÇ/g,"J");
				// STRESS
				textsyllable = textsyllable.replace(/³/g,"").replace(/²/g,"").replace(/¹/g,"");
			};
			if ( version == 2 ) {
				// VOWELS
				textsyllable = textsyllable.replace(/ox\~/g,"ər");
				textsyllable = textsyllable.replace(/éq\~/g,"ēr").replace(/ëq\~/g,"ēr");
				textsyllable = textsyllable.replace(/ah/g,"a").replace(/eh/g,"e").replace(/ih/g,"i").replace(/uh/g,"u");
				textsyllable = textsyllable.replace(/áh/g,"a").replace(/éh/g,"e").replace(/íh/g,"i").replace(/úh/g,"u");
				textsyllable = textsyllable.replace(/äh/g,"a").replace(/ëh/g,"e").replace(/ïh/g,"i").replace(/üh/g,"u");
				textsyllable = textsyllable.replace(/ox/g,"ə"); // INPUT "X" KEY ( KEYBOARD ) = OUTPUT LETTER "SCHWA" ( SCREEN )
				textsyllable = textsyllable.replace(/ax/g,"æ"); // INPUT "Q" KEY ( KEYBOARD ) = OUTPUT LETTER "ASH" ( SCREEN )
				textsyllable = textsyllable.replace(/áx/g,"æ").replace(/äx/g,"æ");
				textsyllable = textsyllable.replace(/aq/g,"ā").replace(/iq/g,"ī").replace(/oq/g,"ō").replace(/uq/g,"ū");
				textsyllable = textsyllable.replace(/áq/g,"ā").replace(/íq/g,"ī").replace(/óq/g,"ō").replace(/úq/g,"ū");
				textsyllable = textsyllable.replace(/äq/g,"ā").replace(/ïq/g,"ī").replace(/öq/g,"ō").replace(/üq/g,"ū");
				textsyllable = textsyllable.replace(/ái/g,"ai").replace(/éi/g,"ei").replace(/ói/g,"oi").replace(/áu/g,"au").replace(/óu/g,"ou");
				textsyllable = textsyllable.replace(/äi/g,"ai").replace(/ëi/g,"ei").replace(/öi/g,"oi").replace(/äu/g,"au").replace(/öu/g,"ou");
				// CONSONANTS
				// textsyllable = textsyllable.replace(/C/g,"C");
				// textsyllable = textsyllable.replace(/C/g,"Č"); // INPUT "CH" or "CG" or "CC" or "C$" KEY ( KEYBOARD )
				textsyllable = textsyllable.replace(/C/g,"CH");
				// textsyllable = textsyllable.replace(/DH/g,"Ď"); // INPUT "DH" or "DG" or "DD" or "D$" KEY ( KEYBOARD )
				// textsyllable = textsyllable.replace(/DH/g,"Đ"); // INPUT "DH" or "DG" or "DD" or "D$" KEY ( KEYBOARD )
				// textsyllable = textsyllable.replace(/DH/g,"Ð"); // INPUT "DH" or "DG" or "DD" or "D$" KEY ( KEYBOARD )
				// textsyllable = textsyllable.replace(/NH/g,"Ň"); // INPUT "NH" or "NG" or "NN" or "N$" KEY ( KEYBOARD )
				textsyllable = textsyllable.replace(/NH/g,"Ŋ"); // INPUT "NH" or "NG" or "NN" or "N$" KEY ( KEYBOARD )
				// textsyllable = textsyllable.replace(/SH/g,"Š"); // INPUT "SH" or "SG" or "SS" or "S$" KEY ( KEYBOARD )
				// textsyllable = textsyllable.replace(/TH/g,"Ť"); // INPUT "TH" or "TG" or "TT" or "T$" KEY ( KEYBOARD )
				// textsyllable = textsyllable.replace(/TH/g,"Ŧ"); // INPUT "TH" or "TG" or "TT" or "T$" KEY ( KEYBOARD )
				// textsyllable = textsyllable.replace(/TH/g,"Ţ"); // INPUT "TH" or "TG" or "TT" or "T$" KEY ( KEYBOARD )
				// textsyllable = textsyllable.replace(/ZH/g,"Ž"); // INPUT "ZH" or "ZG" or "ZZ" or "Z$" KEY ( KEYBOARD )
				// textsyllable = textsyllable.replace(/ZH/g,"Ż"); // INPUT "ZH" or "ZG" or "ZZ" or "Z$" KEY ( KEYBOARD )
				textsyllable = textsyllable.replace(/ZH/g,"Ş"); // INPUT "ZH" or "ZG" or "ZZ" or "Z$" KEY ( KEYBOARD )
				textsyllable = textsyllable.replace(/JH/g,"ÇÇ");
				textsyllable = textsyllable.replace(/J/g,"H");
				textsyllable = textsyllable.replace(/ÇÇ/g,"J");
				// STRESS
				textsyllable = textsyllable.replace(/á/g,"a").replace(/é/g,"e").replace(/í/g,"i").replace(/ó/g,"o").replace(/ú/g,"u");
				textsyllable = textsyllable.replace(/ä/g,"a").replace(/ë/g,"e").replace(/ï/g,"i").replace(/ö/g,"o").replace(/ü/g,"u");
			};
			// SYLLABLE
			if ( syllable == 0 ) { textsyllable = textsyllable.replace(/\./g,"") ; };
			if ( syllable == 0 ) { textsyllable = textsyllable.replace(/\!/g,"") ; };
			if ( syllable == 0 ) { textsyllable = textsyllable.replace(/\¦/g,"") ; };
			if ( syllable == 0 ) { textsyllable = textsyllable.replace(/\|/g,"") ; };
			if ( syllable == 1 ) { textsyllable = textsyllable.replace(/\!/g,".") ; };
			if ( syllable == 1 ) { textsyllable = textsyllable.replace(/\¦/g,".") ; };
			if ( syllable == 1 ) { textsyllable = textsyllable.replace(/\|/g,".") ; };
			// LOWERCASE, STRESS 1 & STRESS 2
			if ( lowerca == 0 ) { textsyllable = textsyllable.toLowerCase() ; };
			if ( stress1 == 0 && version == 1 ) { textsyllable = textsyllable.replace(/á/g,"a").replace(/é/g,"e").replace(/í/g,"i").replace(/ó/g,"o").replace(/ú/g,"u") ; };
			if ( stress2 == 0 && version == 1 ) { textsyllable = textsyllable.replace(/ä/g,"a").replace(/ë/g,"e").replace(/ï/g,"i").replace(/ö/g,"o").replace(/ü/g,"u") ; };
			if ( stress1 == 0 && version == 2 ) { textsyllable = textsyllable.replace(/³/g,"").replace(/¹/g,"") ; };
			if ( stress2 == 0 && version == 2 ) { textsyllable = textsyllable.replace(/²/g,"").replace(/¹/g,"") ; };
			// SCHWA & ASH ( VERSION 2 )
			// if ( version == 2 ) { textsyllable = textsyllable.replace(/ə/g,"ë") ; };
			// if ( version == 2 ) { textsyllable = textsyllable.replace(/æ/g,"ä") ; };
			// FUSION
			if ( fusion == 0 ) { result = result + textsyllable + "  "; };
			if ( fusion == 1 ) { result = result + word + " { " + textsyllable + " }" + "  "; };
			positionT = positionT + 1;
			word = ListT[positionT];
			continue;
		};
		// ANOTHER WORD, NUMBER OR SIGN
		if ( true ) {
			result = result + word + "  ";
			positionT = positionT + 1;
			word = ListT[positionT];
			continue;
		};
	};
	// RESULT SETTINGS
	result = result.replace(/(\d)( )*(\,|\;|\.|\:)?( )*(?=(\d))/g,"$1$3");
	result = result.replace(/Þ/g,"\n").replace(/ *\n */g,"\n").replace(/\n{3,}/g,"\n\n");
	result = result.replace(/Æ/g,".").replace(/ {3,}/g,"  ");
	result = result.trim();
	// RESULT ( MAPA )
	return result;
};
// module.exports = { Transcribe };
