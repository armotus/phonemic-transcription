"use strict";
function Transcribe(text,version,syllable,stress1,stress2,lowerca,fusion) {
	// SETTINGS
	if ( text.length == 0 ) { return "" ; };
	// TEXT SETTINGS
	text = text.toString();
	text = text.toLowerCase();
	// EXCEPTION WORDS ( FOR EXAMPLE: .tokyo , .nebraska , .shakespeare )
	text = text.replace(/^(.)/g," $1").replace(/([^a-z])\.([a-z])/g,"$1Æ$2");
	// TEXT SEPARATION
	text = text.replace(/([a-z])(\´)([a-z])/g,"$1ååîîǿǿ$3");
	text = text.replace(/([a-z])(\’)([a-z])/g,"$1ååîîǿǿ$3");
	text = text.replace(/([a-z])(\')([a-z])/g,"$1ååîîǿǿ$3");
	text = text.replace(/([a-z])(\-)([a-z])/g,"$1ĵĵŗŗłł$3");
	text = text.replace(/(\n)\t+/g,"\n\n").replace(/\n/g,"Þ").replace(/\s/g," ");
	text = text.replace(/([^a-zÆ#@áàâäǎăāãåǻąæǽćċĉčçďđðéèėêëěĕēęẹəġĝğģĥħıíìîïǐĭīĩįịĵķĸĺļłľŀŉńňñņŋóòôöǒŏōõőọøǿơœŕřŗśŝšşſßťţŧþúùûüǔŭūũűůųụưẃẁŵẅýỳŷÿỹźżž])/g," $1 ");
	text = text.replace(/ååîîǿǿ/g,"'");
	text = text.replace(/ĵĵŗŗłł/g,"-");
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
		// WORD THAT IS IN THE DICTIONARY
		if ( apadict[word] ) {
			let textsyllable = apadict[word];
			// MODIFIED AMERICAN PHONETIC ALPHABET ( MAPA )
			if ( version == 1 ) {
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
				textsyllable = textsyllable.replace(/C/g,"CH");
				textsyllable = textsyllable.replace(/NH/g,"NG");
				textsyllable = textsyllable.replace(/JH/g,"ÇÇ");
				textsyllable = textsyllable.replace(/J/g,"H");
				textsyllable = textsyllable.replace(/ÇÇ/g,"J");
			};
			if ( version == 2 ) {
				textsyllable = textsyllable.replace(/ox\~/g,"ər");
				textsyllable = textsyllable.replace(/éq\~/g,"ēr³").replace(/ëq\~/g,"ēr²");
				textsyllable = textsyllable.replace(/ah/g,"a").replace(/eh/g,"e").replace(/ih/g,"i").replace(/uh/g,"u");
				textsyllable = textsyllable.replace(/áh/g,"a³").replace(/éh/g,"e³").replace(/íh/g,"i³").replace(/úh/g,"u³");
				textsyllable = textsyllable.replace(/äh/g,"a²").replace(/ëh/g,"e²").replace(/ïh/g,"i²").replace(/üh/g,"u²");
				textsyllable = textsyllable.replace(/ox/g,"ə"); // INPUT "X" KEY ( KEYBOARD ) = OUTPUT LETTER "SCHWA" ( SCREEN )
				textsyllable = textsyllable.replace(/ax/g,"æ"); // INPUT "Q" KEY ( KEYBOARD ) = OUTPUT LETTER "ASH" ( SCREEN )
				textsyllable = textsyllable.replace(/áx/g,"æ³").replace(/äx/g,"æ²");
				textsyllable = textsyllable.replace(/aq/g,"ā").replace(/iq/g,"ī").replace(/oq/g,"ō").replace(/uq/g,"ū");
				textsyllable = textsyllable.replace(/áq/g,"ā³").replace(/íq/g,"ī³").replace(/óq/g,"ō³").replace(/úq/g,"ū³");
				textsyllable = textsyllable.replace(/äq/g,"ā²").replace(/ïq/g,"ī²").replace(/öq/g,"ō²").replace(/üq/g,"ū²");
				textsyllable = textsyllable.replace(/ái/g,"ai³").replace(/éi/g,"ei³").replace(/ói/g,"oi³").replace(/áu/g,"au³").replace(/óu/g,"ou³");
				textsyllable = textsyllable.replace(/äi/g,"ai²").replace(/ëi/g,"ei²").replace(/öi/g,"oi²").replace(/äu/g,"au²").replace(/öu/g,"ou²");
				// textsyllable = textsyllable.replace(/C/g,"C");
				// textsyllable = textsyllable.replace(/C/g,"Č");
				textsyllable = textsyllable.replace(/C/g,"CH");
				// textsyllable = textsyllable.replace(/DH/g,"Ď");
				// textsyllable = textsyllable.replace(/DH/g,"Đ");
				// textsyllable = textsyllable.replace(/DH/g,"Ð");
				// textsyllable = textsyllable.replace(/NH/g,"Ň");
				textsyllable = textsyllable.replace(/NH/g,"Ŋ");
				// textsyllable = textsyllable.replace(/SH/g,"Š");
				// textsyllable = textsyllable.replace(/TH/g,"Ť");
				// textsyllable = textsyllable.replace(/TH/g,"Ŧ");
				// textsyllable = textsyllable.replace(/TH/g,"Ţ");
				// textsyllable = textsyllable.replace(/ZH/g,"Ž");
				textsyllable = textsyllable.replace(/JH/g,"ÇÇ");
				textsyllable = textsyllable.replace(/J/g,"H");
				textsyllable = textsyllable.replace(/ÇÇ/g,"J");
			};
			// SYLLABLE
			if ( syllable == 0 ) { textsyllable = textsyllable.replace(/\./g,"") ; };
			// LOWERCASE, STRESS 1 & STRESS 2
			if ( lowerca == 0 ) { textsyllable = textsyllable.toLowerCase() ; };
			if ( stress1 == 0 || version == 2 ) { textsyllable = textsyllable.replace(/á/g,"a").replace(/é/g,"e").replace(/í/g,"i").replace(/ó/g,"o").replace(/ú/g,"u") ; };
			if ( stress2 == 0 || version == 2 ) { textsyllable = textsyllable.replace(/ä/g,"a").replace(/ë/g,"e").replace(/ï/g,"i").replace(/ö/g,"o").replace(/ü/g,"u") ; };
			if ( stress1 == 0 || version == 1 ) { textsyllable = textsyllable.replace(/³/g,"") ; };
			if ( stress2 == 0 || version == 1 ) { textsyllable = textsyllable.replace(/²/g,"").replace(/¹/g,"") ; };
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
	result = result.replace(/Æ/g,".").replace(/Â( )*(\.)*/g,"");
	result = result.trim();
	// RESULT ( MAPA )
	return result;
};
module.exports = { Transcribe };
