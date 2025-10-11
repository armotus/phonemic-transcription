
# Carnegie Mellon University ( BSD License )

# The CMU Pronouncing Dictionary ( cmudict-0.7b )

# http://www.speech.cs.cmu.edu/cgi-bin/cmudict

# Python Script cmu2apa.py by Armotus ( Alex )

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

	apaB = apaB.replace("AA0 ", "çaq ç");

	apaB = apaB.replace("AA1 ", "çáq ç"); 

	apaB = apaB.replace("AA2 ", "çäq ç");


	apaB = apaB.replace("AE0 ", "çax ç");

	apaB = apaB.replace("AE1 ", "çáx ç");

	apaB = apaB.replace("AE2 ", "çäx ç");


	apaB = apaB.replace("AH0 ", "çox ç");

	apaB = apaB.replace("AH1 ", "çáh ç");

	apaB = apaB.replace("AH2 ", "çäh ç");


	apaB = apaB.replace("AO0 ", "çoq ç");

	apaB = apaB.replace("AO1 ", "çóq ç");

	apaB = apaB.replace("AO2 ", "çöq ç");


	apaB = apaB.replace("AW0 ", "çau ç");

	apaB = apaB.replace("AW1 ", "çáu ç");

	apaB = apaB.replace("AW2 ", "çäu ç");


	apaB = apaB.replace("AY0 ", "çai ç");

	apaB = apaB.replace("AY1 ", "çái ç");

	apaB = apaB.replace("AY2 ", "çäi ç");


	apaB = apaB.replace("EH0 ", "çeh ç");

	apaB = apaB.replace("EH1 ", "çéh ç");

	apaB = apaB.replace("EH2 ", "çëh ç");


	apaB = apaB.replace("ER0 ", "çxq ç");

	apaB = apaB.replace("ER1 ", "çéq ç");

	apaB = apaB.replace("ER2 ", "çëq ç");


	apaB = apaB.replace("EY0 ", "çei ç");

	apaB = apaB.replace("EY1 ", "çéi ç");

	apaB = apaB.replace("EY2 ", "çëi ç");


	apaB = apaB.replace("IH0 ", "çih ç");

	apaB = apaB.replace("IH1 ", "çíh ç");

	apaB = apaB.replace("IH2 ", "çïh ç");


	apaB = apaB.replace("IY0 ", "çiq ç");

	apaB = apaB.replace("IY1 ", "çíq ç");

	apaB = apaB.replace("IY2 ", "çïq ç");


	apaB = apaB.replace("OW0 ", "çou ç");

	apaB = apaB.replace("OW1 ", "çóu ç");

	apaB = apaB.replace("OW2 ", "çöu ç");


	apaB = apaB.replace("OY0 ", "çoi ç");

	apaB = apaB.replace("OY1 ", "çói ç");

	apaB = apaB.replace("OY2 ", "çöi ç");


	apaB = apaB.replace("UH0 ", "çuh ç");

	apaB = apaB.replace("UH1 ", "çúh ç");

	apaB = apaB.replace("UH2 ", "çüh ç");


	apaB = apaB.replace("UW0 ", "çuq ç");

	apaB = apaB.replace("UW1 ", "çúq ç");

	apaB = apaB.replace("UW2 ", "çüq ç");

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