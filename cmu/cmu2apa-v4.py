
# Carnegie Mellon University ( BSD License )

# The CMU Pronouncing Dictionary ( cmudict-0.7b )

# http://www.speech.cs.cmu.edu/cgi-bin/cmudict

# Python Script cmu2apa.py by Armotus ( Alex )

# cmudict = open("cmudict-0.7b", "r", encoding="utf8");

import re

cmudict = open("cmudict-0.7b", "r");

cmutext = cmudict.readlines();

for i in range (len(cmutext)):

	apa1 = cmutext[i];

	apa2 = apa1.index('  ');

	# PART A

	apaA = apa1[:apa2];

	apaA = apaA.lower();

	apaA = apaA.replace("(3)", "(4)");

	apaA = apaA.replace("(2)", "(3)");

	apaA = apaA.replace("(1)", "(2)");

	# PART B

	apaB = apa1[apa2+2:-1];

	apaB = apaB + ' ';

	# VOWELS

	apaB = apaB.replace("AA0 ", "ç15aq ç");

	apaB = apaB.replace("AA1 ", "ç35áq ç"); 

	apaB = apaB.replace("AA2 ", "ç25äq ç");


	apaB = apaB.replace("AE0 ", "ç16ax ç");

	apaB = apaB.replace("AE1 ", "ç36áx ç");

	apaB = apaB.replace("AE2 ", "ç26äx ç");


	apaB = apaB.replace("AH0 ", "ç16ox ç");

	apaB = apaB.replace("AH1 ", "ç36áh ç");

	apaB = apaB.replace("AH2 ", "ç26äh ç");


	apaB = apaB.replace("AO0 ", "ç15oq ç");

	apaB = apaB.replace("AO1 ", "ç35óq ç");

	apaB = apaB.replace("AO2 ", "ç25öq ç");


	apaB = apaB.replace("AW0 ", "ç14au ç");

	apaB = apaB.replace("AW1 ", "ç34áu ç");

	apaB = apaB.replace("AW2 ", "ç24äu ç");


	apaB = apaB.replace("AY0 ", "ç14ai ç");

	apaB = apaB.replace("AY1 ", "ç34ái ç");

	apaB = apaB.replace("AY2 ", "ç24äi ç");


	apaB = apaB.replace("EH0 ", "ç16eh ç");

	apaB = apaB.replace("EH1 ", "ç36éh ç");

	apaB = apaB.replace("EH2 ", "ç26ëh ç");


	apaB = apaB.replace("ER0 ", "ç16ox~ ç");

	apaB = apaB.replace("ER1 ", "ç35éq~ ç");

	apaB = apaB.replace("ER2 ", "ç25ëq~ ç");


	apaB = apaB.replace("EY0 ", "ç14ei ç");

	apaB = apaB.replace("EY1 ", "ç34éi ç");

	apaB = apaB.replace("EY2 ", "ç24ëi ç");


	apaB = apaB.replace("IH0 ", "ç16ih ç");

	apaB = apaB.replace("IH1 ", "ç36íh ç");

	apaB = apaB.replace("IH2 ", "ç26ïh ç");


	apaB = apaB.replace("IY0 ", "ç15iq ç");

	apaB = apaB.replace("IY1 ", "ç35íq ç");

	apaB = apaB.replace("IY2 ", "ç25ïq ç");


	apaB = apaB.replace("OW0 ", "ç14ou ç");

	apaB = apaB.replace("OW1 ", "ç34óu ç");

	apaB = apaB.replace("OW2 ", "ç24öu ç");


	apaB = apaB.replace("OY0 ", "ç14oi ç");

	apaB = apaB.replace("OY1 ", "ç34ói ç");

	apaB = apaB.replace("OY2 ", "ç24öi ç");


	apaB = apaB.replace("UH0 ", "ç16uh ç");

	apaB = apaB.replace("UH1 ", "ç36úh ç");

	apaB = apaB.replace("UH2 ", "ç26üh ç");


	apaB = apaB.replace("UW0 ", "ç15uq ç");

	apaB = apaB.replace("UW1 ", "ç35úq ç");

	apaB = apaB.replace("UW2 ", "ç25üq ç");

	# CONSONANTS

	apaB = apaB.replace("B ", "B ");

	apaB = apaB.replace("CH ", "C ");

	apaB = apaB.replace("D ", "D ");

	apaB = apaB.replace("DH ", "Ď ");

	apaB = apaB.replace("F ", "F ");

	apaB = apaB.replace("G ", "G ");

	apaB = apaB.replace("HH ", "H ");

	apaB = apaB.replace("JH ", "Ĵ ");

	apaB = apaB.replace("K ", "K ");

	apaB = apaB.replace("L ", "L ");

	apaB = apaB.replace("M ", "M ");

	apaB = apaB.replace("N ", "N ");

	apaB = apaB.replace("NG ", "Ň ");

	apaB = apaB.replace("P ", "P ");

	apaB = apaB.replace("R ", "R ");

	apaB = apaB.replace("S ", "S ");

	apaB = apaB.replace("SH ", "Š ");

	apaB = apaB.replace("T ", "T ");

	apaB = apaB.replace("TH ", "Ť ");

	apaB = apaB.replace("V ", "V ");

	apaB = apaB.replace("W ", "W ");

	apaB = apaB.replace("Y ", "Y ");

	apaB = apaB.replace("Z ", "Z ");

	apaB = apaB.replace("ZH ", "Ž ");

	# SYLLABLE

	# .7 ( . ) MAXIMAL ONSET PRINCIPLE ( STRONG )

	# .8 ( ! ) MAXIMAL ONSET PRINCIPLE < WEAK SYLLABLE PRINCIPLE ( AMBISYLLABICITY ) ( ONE AFFECTED INTERVOCALIC CONSONANT )

	# .9 ( ¦ ) MAXIMAL ONSET PRINCIPLE < WEAK SYLLABLE PRINCIPLE ( AMBISYLLABICITY ) ( TWO AFFECTED INTERVOCALIC CONSONANTS )

	# .0 ( | ) MAXIMAL ONSET PRINCIPLE < WEAK SYLLABLE PRINCIPLE < EXCEPTIONS H, W and Y ( ONE AFFECTED INTERVOCALIC CONSONANT )

	apaB = apaB.replace("çç", "çĦ ç");

	if apaB[0] == "ç" :

		apaB = "Ħ " + apaB;

	if apaB[-1] == "ç" :

		apaB = apaB[:-1];

	apaB = apaB.replace(" ", "");

	apaB = apaB.split("ç");

	C1 = {"H", "W", "Y"};

	C2 = {"BL", "FL", "GL", "KL", "PL", "SL", "ŠL", "ŤL", "BR", "DR", "FR", "GR", "KR", "PR", "ŠR", "TR", "ŤR", "DW", "GW", "HW", "KW", "PW", "SW", "TW", "ŤW", "VW", "BY", "DY", "FY", "GY", "HY", "KY", "LY", "MY", "NY", "PY", "SY", "TY", "ŤY", "VY", "ZY", "SF", "SK", "SM", "SN", "SP", "ST", "SŤ"};

	C3 = {"SKL", "SPL", "SFR", "SKR", "SPR", "STR", "SKW", "SKY", "SMY", "SNY", "SPY", "STY"};

	n = 4;

	while len(apaB) >= n :

		if len(apaB[n-2]) == 1 :

			if apaB[n-2][-1] == "Ň" :

				apaB[n-2] = apaB[n-2] + ".7";

			elif apaB[n-2][0] == "Ħ" :

				apaB[n-2] = ".7" + apaB[n-2];

			elif ( int(apaB[n-3][0]) > int(apaB[n-1][0]) ) and int(apaB[n-3][1]) == 6 :

				for x in C1 :

					if apaB[n-2] == x :

						apaB[n-2] = ".0" + apaB[n-2];

						break;

				else :

					apaB[n-2] = apaB[n-2] + ".8";

			else :

				apaB[n-2] = ".7" + apaB[n-2];

		elif len(apaB[n-2]) == 2 :

			if apaB[n-2][-1] == "Ň" :

				apaB[n-2] = apaB[n-2] + ".7";

			elif ( int(apaB[n-3][0]) > int(apaB[n-1][0]) ) and int(apaB[n-3][1]) == 6 :

				for x in C2 :

					if apaB[n-2] == x :

						apaB[n-2] = apaB[n-2][0] + ".8" + apaB[n-2][1];

						break;

				else :

					apaB[n-2] = apaB[n-2][0] + ".7" + apaB[n-2][1];

			else :

				for x in C2 :

					if apaB[n-2] == x :

						apaB[n-2] = ".7" + apaB[n-2];

						break;

				else :

					apaB[n-2] = apaB[n-2][0] + ".7" + apaB[n-2][1];

		elif len(apaB[n-2]) == 3 :

			if apaB[n-2][-1] == "Ň" :

				apaB[n-2] = apaB[n-2] + ".7";

			elif ( int(apaB[n-3][0]) > int(apaB[n-1][0]) ) and int(apaB[n-3][1]) == 6 :

				for x in C3 :

					if apaB[n-2] == x :

						for x in C2 :

							if apaB[n-2][1:3] == x :

								apaB[n-2] = apaB[n-2][0] + ".8" + apaB[n-2][1:3];

								break;

						else :

							apaB[n-2] = apaB[n-2][:2] + ".9" + apaB[n-2][2];

						break;

				else :

					for x in C2 :

						if apaB[n-2][1:3] == x :

							apaB[n-2] = apaB[n-2][0] + ".7" + apaB[n-2][1:3];

							break;

					else :

						apaB[n-2] = apaB[n-2][:2] + ".7" + apaB[n-2][2];

			else :

				for x in C3 :

					if apaB[n-2] == x :

						apaB[n-2] = ".7" + apaB[n-2];

						break;

				else :

					for x in C2 :

						if apaB[n-2][1:3] == x :

							apaB[n-2] = apaB[n-2][0] + ".7" + apaB[n-2][1:3];

							break;

					else :

						apaB[n-2] = apaB[n-2][:2] + ".7" + apaB[n-2][2];

		elif len(apaB[n-2]) >= 4 :

			c = len(apaB[n-2]);

			s = len(apaB[n-2]) - 2;

			z = len(apaB[n-2]) - 3;

			if apaB[n-2][-1] == "Ň" :

				apaB[n-2] = apaB[n-2] + ".7";

			else :

				for x in C3 :

					if apaB[n-2][z:c] == x :

						apaB[n-2] = apaB[n-2][:z] + ".7" + apaB[n-2][z:c];

						break;

				else :

					for x in C2 :

						if apaB[n-2][s:c] == x :

							apaB[n-2] = apaB[n-2][:s] + ".7" + apaB[n-2][s:c];

							break;

					else :

						apaB[n-2] = apaB[n-2][:-1] + ".7" + apaB[n-2][-1];

		n = n + 2;

	# CHANGES

	apaB = ' '.join(apaB);

	apaB = apaB.replace("Ħ", "");

	apaB = apaB.replace("4", "");

	apaB = apaB.replace("5", "");

	apaB = apaB.replace("6", "");

	apaB = apaB.replace(" ", "");


	apaB = apaB + ".";

	apaB = apaB.replace("~", "_");

	apaB = re.sub(r"(1)(\w+)(\.)", r"\2\1\3", apaB);

	apaB = re.sub(r"(2)(\w+)(\.)", r"\2\1\3", apaB);

	apaB = re.sub(r"(3)(\w+)(\.)", r"\2\1\3", apaB);

	# apaB = re.sub(r"(1)(\w+£?\w*)(\.)", r"\2\1\3", apaB);

	# apaB = re.sub(r"(2)(\w+£?\w*)(\.)", r"\2\1\3", apaB);

	# apaB = re.sub(r"(3)(\w+£?\w*)(\.)", r"\2\1\3", apaB);

	apaB = apaB.replace("_", "~");

	apaB = apaB[:-1];


	apaB = apaB.replace("1", "¹");

	apaB = apaB.replace("2", "²");

	apaB = apaB.replace("3", "³");


	apaB = apaB.replace(".7", ".");

	apaB = apaB.replace(".8", "!");

	apaB = apaB.replace(".9", "¦");

	apaB = apaB.replace(".0", "|");


	apaB = apaB.replace("H", "J");

	apaB = apaB.replace("Ď", "DH");

	apaB = apaB.replace("Ĵ", "JH");

	apaB = apaB.replace("Ň", "NH");

	apaB = apaB.replace("Š", "SH");

	apaB = apaB.replace("Ť", "TH");

	apaB = apaB.replace("Ž", "ZH");

	# apaB = apaB.lower();

	# PART C

	apaC = '  ' + '"' + apaA + '"' + ':' + ' ' + '"' + apaB + '"' + ',';

	print(apaC);

cmudict.close();

# FINAL RESULT : dictionary.js ( apadict-0.0.4 )

# APPENDIX ( TEST )

"""

  "aa0": "aq",
  "aa1": "áq",
  "aa2": "äq",
  "ae0": "ax",
  "ae1": "áx",
  "ae2": "äx",
  "ah0": "ox",
  "ah1": "áh",
  "ah2": "äh",
  "ao0": "oq",
  "ao1": "óq",
  "ao2": "öq",
  "aw0": "au",
  "aw1": "áu",
  "aw2": "äu",
  "ay0": "ai",
  "ay1": "ái",
  "ay2": "äi",
  "eh0": "eh",
  "eh1": "éh",
  "eh2": "ëh",
  "er0": "ox~",
  "er1": "éq~",
  "er2": "ëq~",
  "ey0": "ei",
  "ey1": "éi",
  "ey2": "ëi",
  "ih0": "ih",
  "ih1": "íh",
  "ih2": "ïh",
  "iy0": "iq",
  "iy1": "íq",
  "iy2": "ïq",
  "ow0": "ou",
  "ow1": "óu",
  "ow2": "öu",
  "oy0": "oi",
  "oy1": "ói",
  "oy2": "öi",
  "uh0": "uh",
  "uh1": "úh",
  "uh2": "üh",
  "uw0": "uq",
  "uw1": "úq",
  "uw2": "üq",
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
