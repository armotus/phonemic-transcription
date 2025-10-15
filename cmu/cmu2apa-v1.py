
# Carnegie Mellon University ( BSD License )

# The CMU Pronouncing Dictionary ( cmudict-0.7b )

# http://www.speech.cs.cmu.edu/cgi-bin/cmudict

# Python Script cmu2apa.py by Armotus ( Alex )

# cmudict = open("cmudict-0.7b", "r", encoding="utf8");

cmudict = open("cmudict-0.7b", "r");

cmutext = cmudict.readlines();

for i in range (len(cmutext)):

	apa1 = cmutext[i];

	apa2 = apa1.index('  ');

	# PART A

	apaA = apa1[0:apa2];

	apaA = apaA.lower();

	apaA = apaA.replace("(3)", "(4)");

	apaA = apaA.replace("(2)", "(3)");

	apaA = apaA.replace("(1)", "(2)");

	# PART B

	apaB = apa1[apa2+2:-1];

	apaB = apaB + ' ';

	# VOWELS

	apaB = apaB.replace("AA0 ", "çax ç");

	apaB = apaB.replace("AA1 ", "çáx ç"); 

	apaB = apaB.replace("AA2 ", "çäx ç");


	apaB = apaB.replace("AE0 ", "çaq ç");

	apaB = apaB.replace("AE1 ", "çáq ç");

	apaB = apaB.replace("AE2 ", "çäq ç");


	apaB = apaB.replace("AH0 ", "çoq ç");

	apaB = apaB.replace("AH1 ", "çáh ç");

	apaB = apaB.replace("AH2 ", "çäh ç");


	apaB = apaB.replace("AO0 ", "çox ç");

	apaB = apaB.replace("AO1 ", "çóx ç");

	apaB = apaB.replace("AO2 ", "çöx ç");


	apaB = apaB.replace("AW0 ", "çau ç");

	apaB = apaB.replace("AW1 ", "çáu ç");

	apaB = apaB.replace("AW2 ", "çäu ç");


	apaB = apaB.replace("AY0 ", "çai ç");

	apaB = apaB.replace("AY1 ", "çái ç");

	apaB = apaB.replace("AY2 ", "çäi ç");


	apaB = apaB.replace("EH0 ", "çeh ç");

	apaB = apaB.replace("EH1 ", "çéh ç");

	apaB = apaB.replace("EH2 ", "çëh ç");


	apaB = apaB.replace("ER0 ", "çqx ç");

	apaB = apaB.replace("ER1 ", "çéx ç");

	apaB = apaB.replace("ER2 ", "çëx ç");


	apaB = apaB.replace("EY0 ", "çei ç");

	apaB = apaB.replace("EY1 ", "çéi ç");

	apaB = apaB.replace("EY2 ", "çëi ç");


	apaB = apaB.replace("IH0 ", "çih ç");

	apaB = apaB.replace("IH1 ", "çíh ç");

	apaB = apaB.replace("IH2 ", "çïh ç");


	apaB = apaB.replace("IY0 ", "çix ç");

	apaB = apaB.replace("IY1 ", "çíx ç");

	apaB = apaB.replace("IY2 ", "çïx ç");


	apaB = apaB.replace("OW0 ", "çou ç");

	apaB = apaB.replace("OW1 ", "çóu ç");

	apaB = apaB.replace("OW2 ", "çöu ç");


	apaB = apaB.replace("OY0 ", "çoi ç");

	apaB = apaB.replace("OY1 ", "çói ç");

	apaB = apaB.replace("OY2 ", "çöi ç");


	apaB = apaB.replace("UH0 ", "çuh ç");

	apaB = apaB.replace("UH1 ", "çúh ç");

	apaB = apaB.replace("UH2 ", "çüh ç");


	apaB = apaB.replace("UW0 ", "çux ç");

	apaB = apaB.replace("UW1 ", "çúx ç");

	apaB = apaB.replace("UW2 ", "çüx ç");

	# CONSONANTS

	apaB = apaB.replace("B ", "B ");

	apaB = apaB.replace("CH ", "C ");

	apaB = apaB.replace("D ", "D ");

	apaB = apaB.replace("DH ", "DH ");

	apaB = apaB.replace("F ", "F ");

	apaB = apaB.replace("G ", "G ");

	apaB = apaB.replace("HH ", "J ");

	apaB = apaB.replace("JH ", "JH ");

	apaB = apaB.replace("K ", "K ");

	apaB = apaB.replace("L ", "L ");

	apaB = apaB.replace("M ", "M ");

	apaB = apaB.replace("N ", "N ");

	apaB = apaB.replace("NG ", "NH ");

	apaB = apaB.replace("P ", "P ");

	apaB = apaB.replace("R ", "R ");

	apaB = apaB.replace("S ", "S ");

	apaB = apaB.replace("SH ", "SH ");

	apaB = apaB.replace("T ", "T ");

	apaB = apaB.replace("TH ", "TH ");

	apaB = apaB.replace("V ", "V ");

	apaB = apaB.replace("W ", "W ");

	apaB = apaB.replace("Y ", "Y ");

	apaB = apaB.replace("Z ", "Z ");

	apaB = apaB.replace("ZH ", "ZH ");

	# VOWEL SYLLABLES

	apaB = apaB.replace(" ", "");

	apaB = apaB.replace("çç", ".");

	apaB = apaB.replace("ç", "");

	# CONSONANT SYLLABLES ( IN DEVELOPMENT )

	# apaB = apaB.lower();

	# JAVASCRIPT

	apaAB = '  ' + '"' + apaA + '"' + ':' + ' ' + '"' + apaB + '"' + ',';

	print(apaAB);

cmudict.close();

# FINAL RESULT : dictionary.js ( apadict-0.0.1 )

# APPENDIX I ( PHONEMES )

"""

A0 • Carnegie Mellon University ( CMU )

|  AH , EH , IH , UH , AE , AH0 , ER0  |  AA , ER , IY , AO , UW  |  AY , EY , OY , AW , OW  |  Stress : 0 , 1 , 2  |

|  B , CH , D , F , G , HH , K , L , M , N , P , R , S , T , V , W , Y , Z  |  DH , JH , NG , SH , TH , ZH  |

A1 • American Phonetic Alphabet ( APA )

|  ah , eh , ih , uh , aq , oq , qx  |  ax , ex , ix , ox , ux  |  ai , ei , oi , au , ou  |  Stress : a , á , ä  |

|  b , c , d , f , g , j , k , l , m , n , p , r , s , t , v , w , y , z  |  dh , jh , nh , sh , th , zh  |

A2 • Modified American Phonetic Alphabet ( MAPA )

|  a , e , i , u , ae , ə , əə  |  aa , ee , ii , oo , uu  |  ai , ei , oi , au , ou  |  Stress : a , á , ä  |

|  b , ch , d , f , g , h , k , l , m , n , p , r , s , t , v , w , y , z  |  dh , j , ng , sh , th , zh  |

A3 • International Phonetic Alphabet ( IPA )

|  ʌ , ɛ , ɪ , ʊ , æ , ə , ɚ  |  ɑː , ɝː , iː , ɔː , uː  |  aɪ , eɪ , ɔɪ , aʊ , oʊ  |  Stress : . , ˈ , ˌ  |

|  b , t͡ʃ , d , f , g , h , k , l , m , n , p , r , s , t , v , w , j , z  |  ð , d͡ʒ , ŋ , ʃ , θ , ʒ  |

E1 • English Phonetic Alphabet ( EPA )

|  ah , eh , ih , oh , uh , aq , oq  |  ax , ex , ix , ox , ux  |  eq , iq , uq , ai , ei , oi , au , ou  |

|  a:i:x , a:u:x  |  e:i:x , o:i:x , o:u:x  |  Stress : a , á , ä  |

|  b , c , d , f , g , j , k , l , m , n , p , r , s , t , v , w , y , z  |  dh , jh , nh , sh , th , zh  |

E2 • Modified English Phonetic Alphabet ( MEPA )

|  a , e , i , o , u , ae , ə  |  aa , ee , ii , oo , uu  |  eə , iə , uə , ai , ei , oi , au , əu  |

|  aiə , auə  |  ei.ə , oi.ə , əu.ə  |  Stress : a , á , ä  |  Note : əú = ə´u , əü = ə¨u  |

|  b , ch , d , f , g , h , k , l , m , n , p , r , s , t , v , w , y , z  |  dh , j , ng , sh , th , zh  |

E3 • International Phonetic Alphabet ( IPA )

|  ʌ , e , ɪ , ɒ , ʊ , æ , ə  |  ɑː , ɜː , iː , ɔː , uː  |  eə , ɪə , ʊə , aɪ , eɪ , ɔɪ , aʊ , əʊ  |

|  aɪə , aʊə  |  eɪ.ə , ɔɪ.ə , əʊ.ə  |  Stress : . , ˈ , ˌ  |

|  b , t͡ʃ , d , f , g , h , k , l , m , n , p , r , s , t , v , w , j , z  |  ð , d͡ʒ , ŋ , ʃ , θ , ʒ  |

"""

# APPENDIX II ( TEST )

"""

  "aa0": "ax",
  "aa1": "áx",
  "aa2": "äx",
  "ae0": "aq",
  "ae1": "áq",
  "ae2": "äq",
  "ah0": "oq",
  "ah1": "áh",
  "ah2": "äh",
  "ao0": "ox",
  "ao1": "óx",
  "ao2": "öx",
  "aw0": "au",
  "aw1": "áu",
  "aw2": "äu",
  "ay0": "ai",
  "ay1": "ái",
  "ay2": "äi",
  "eh0": "eh",
  "eh1": "éh",
  "eh2": "ëh",
  "er0": "qx",
  "er1": "éx",
  "er2": "ëx",
  "ey0": "ei",
  "ey1": "éi",
  "ey2": "ëi",
  "ih0": "ih",
  "ih1": "íh",
  "ih2": "ïh",
  "iy0": "ix",
  "iy1": "íx",
  "iy2": "ïx",
  "ow0": "ou",
  "ow1": "óu",
  "ow2": "öu",
  "oy0": "oi",
  "oy1": "ói",
  "oy2": "öi",
  "uh0": "uh",
  "uh1": "úh",
  "uh2": "üh",
  "uw0": "ux",
  "uw1": "úx",
  "uw2": "üx",
  "b": "B",
  "ch": "C",
  "d": "D",
  "dh": "DH",
  "f": "F",
  "g": "G",
  "hh": "J",
  "jh": "JH",
  "k": "K",
  "l": "L",
  "m": "M",
  "n": "N",
  "ng": "NH",
  "p": "P",
  "r": "R",
  "s": "S",
  "sh": "SH",
  "t": "T",
  "th": "TH",
  "v": "V",
  "w": "W",
  "y": "Y",
  "z": "Z",
  "zh": "ZH",

"""
