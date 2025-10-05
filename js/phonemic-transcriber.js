"use strict";
function Transcribe(text,syllable,stress1,stress2,lowerca,fusion) {
	// SETTINGS
	if ( text.length == 0 ) { return "" ; };
	// TEXT SETTINGS
	text = text.toString();
	text = text.toLowerCase();
	// EXCEPTION WORDS ( FOR EXAMPLE: .tokyo , .nebraska , .shakespeare )
	text = text.replace(/^(.)/g," $1").replace(/([^a-z])\.([a-z])/g,"$1Æ$2");
	// TEXT SEPARATION
	text = text.replace(/(\n)\t+/g,"\n\n").replace(/\n/g,"Þ").replace(/\s/g," ");
	text = text.replace(/([^a-z'Æ#@áàâäǎăāãåǻąæǽćċĉčçďđðéèėêëěĕēęẹəġĝğģĥħıíìîïǐĭīĩįịĵķĸĺļłľŀŉńňñņŋóòôöǒŏōõőọøǿơœŕřŗśŝšşſßťţŧþúùûüǔŭūũűůųụưẃẁŵẅýỳŷÿỹźżž])/g," $1 ");
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
			let textsyllable;
			if ( syllable == 1 ) { textsyllable = apadict[word] ; };
			if ( syllable == 0 ) { textsyllable = apadict[word].replace(/\./g,"") ; };
			// LOWERCASE, STRESS 1 & STRESS 2
			if ( lowerca == 0 ) { textsyllable = textsyllable.toLowerCase() ; };
			if ( stress1 == 0 ) { textsyllable = textsyllable.replace(/á/g,"a").replace(/é/g,"e").replace(/í/g,"i").replace(/ó/g,"o").replace(/ú/g,"u") ; };
			if ( stress2 == 0 ) { textsyllable = textsyllable.replace(/ä/g,"a").replace(/ë/g,"e").replace(/ï/g,"i").replace(/ö/g,"o").replace(/ü/g,"u") ; };
			// MODIFIED AMERICAN PHONETIC ALPHABET ( MAPA )
			textsyllable = textsyllable.replace(/ah/g,"a").replace(/eh/g,"e").replace(/ih/g,"i").replace(/uh/g,"u");
			textsyllable = textsyllable.replace(/áh/g,"á").replace(/éh/g,"é").replace(/íh/g,"í").replace(/úh/g,"ú");
			textsyllable = textsyllable.replace(/äh/g,"ä").replace(/ëh/g,"ë").replace(/ïh/g,"ï").replace(/üh/g,"ü");
			textsyllable = textsyllable.replace(/oq/g,"ə"); // INPUT "Q" KEY ( KEYBOARD ) =  OUTPUT LETTER "SCHWA" ( SCREEN )
			textsyllable = textsyllable.replace(/aq/g,"ae").replace(/áq/g,"áé").replace(/äq/g,"äë"); // INPUT "X" KEY ( KEYBOARD ) =  OUTPUT LETTER "AE" ( SCREEN )
			textsyllable = textsyllable.replace(/ax/g,"aa").replace(/ex/g,"ee").replace(/ix/g,"ii").replace(/ox/g,"oo").replace(/ux/g,"uu");
			textsyllable = textsyllable.replace(/áx/g,"áá").replace(/éx/g,"éé").replace(/íx/g,"íí").replace(/óx/g,"óó").replace(/úx/g,"úú");
			textsyllable = textsyllable.replace(/äx/g,"ää").replace(/ëx/g,"ëë").replace(/ïx/g,"ïï").replace(/öx/g,"öö").replace(/üx/g,"üü");
			textsyllable = textsyllable.replace(/qx/g,"əə");
			textsyllable = textsyllable.replace(/nh/g,"ng").replace(/NH/g,"NG");
			textsyllable = textsyllable.replace(/c/g,"ch").replace(/C/g,"CH");
			textsyllable = textsyllable.replace(/jh/g,"çç").replace(/JH/g,"ÇÇ");
			textsyllable = textsyllable.replace(/j/g,"h").replace(/J/g,"H");
			textsyllable = textsyllable.replace(/çç/g,"j").replace(/ÇÇ/g,"J");
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
// APA DICTIONARY
const apadict = {
  "a": "oq",
  "alphabet": "áqL.Foq.BëhT",
  "an": "áqN",
  "do": "Dúx",
  "drop": "DRáxP",
  "is": "íhZ",
  "know": "Nóu",
  "not": "NáxT",
  "ocean": "óu.SHoqN",
  "we": "Wíx",
  "what": "WáhT"
};
module.exports = { Transcribe };