"use strict";
let v = 1;
let y = 0;
let s = 0;
let n = 0;
let l = 0;
let t = 0;
let z = 0;
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let themeValue = 2;
let myInputW = 810;
let myInputH = 240;
let myArea = 0;
let myMAPA = document.getElementById("myMAPA");
let mySAPA = document.getElementById("mySAPA");
let mySyll = document.getElementById("mySyll");
let myStr1 = document.getElementById("myStr1");
let myStr2 = document.getElementById("myStr2");
let myCase = document.getElementById("myCase");
let myFusi = document.getElementById("myFusi");
let myST1a = document.getElementById("myST1a");
let myST1b = document.getElementById("myST1b");
let myST2a = document.getElementById("myST2a");
let myST2b = document.getElementById("myST2b");
// TOP BUTTON PANEL
function myfunMAPA() {
	if ( myMAPA.checked == true ) {
		document.getElementById("mySAPA").checked = false;
		document.getElementById("myST1b").style.display = "none";
		document.getElementById("myST1a").style.display = "inline";
		document.getElementById("myST2b").style.display = "none";
		document.getElementById("myST2a").style.display = "inline";
		myCookie();
		if ( a == 0 ) {
			let i = 0;
			while ( i < 3 ) {
				document.getElementsByClassName("phas")[i].style.display = "none";
				document.getElementsByClassName("pham")[i].style.display = "block";
				i = i + 1;
			};
		};
	} else {
		document.getElementById("myMAPA").checked = true;
		myfunMAPA();
	};
};
function myfunSAPA() {
	if ( mySAPA.checked == true ) {
		document.getElementById("myMAPA").checked = false;
		document.getElementById("myST1a").style.display = "none";
		document.getElementById("myST1b").style.display = "inline";
		document.getElementById("myST2a").style.display = "none";
		document.getElementById("myST2b").style.display = "inline";
		myCookie();
		if ( a == 0 ) {
			let i = 0;
			while ( i < 3 ) {
				document.getElementsByClassName("pham")[i].style.display = "none";
				document.getElementsByClassName("phas")[i].style.display = "block";
				i = i + 1;
			};
		};
	} else {
		document.getElementById("mySAPA").checked = true;
		myfunSAPA();
	};
};
function myFunction() {
	myCookie();
};
function myPho() {
	if ( a == 0 ) {
		let i = 0;
		while ( i < 23 ) {
			document.getElementsByClassName("phop")[i].style.display = "block";
			i = i + 1;
		};
		i = 0;
		while ( i < 10 ) {
			document.getElementsByClassName("phos")[i].style.display = "inline";
			i = i + 1;
		};
		i = 0;
		while ( i < 6 ) {
			document.getElementsByClassName("phoz")[i].style.display = "none";
			i = i + 1;
		};
		a = 1;
	} else {
		let i = 0;
		while ( i < 23 ) {
			document.getElementsByClassName("phop")[i].style.display = "none";
			i = i + 1;
		};
		i = 0;
		while ( i < 10 ) {
			document.getElementsByClassName("phos")[i].style.display = "none";
			i = i + 1;
		};
		i = 0;
		while ( i < 6 ) {
			document.getElementsByClassName("phoz")[i].style.display = "inline";
			i = i + 1;
		};
		a = 0;
	};
	if ( a == 1 ) {
		let i = 0;
		while ( i < 3 ) {
			document.getElementsByClassName("phas")[i].style.display = "block";
			document.getElementsByClassName("pham")[i].style.display = "block";
			i = i + 1;
		};
	};
	if ( a == 0 && myMAPA.checked == true ) {
		let i = 0;
		while ( i < 3 ) {
			document.getElementsByClassName("phas")[i].style.display = "none";
			document.getElementsByClassName("pham")[i].style.display = "block";
			i = i + 1;
		};
	};
	if ( a == 0 && mySAPA.checked == true ) {
		let i = 0;
		while ( i < 3 ) {
			document.getElementsByClassName("pham")[i].style.display = "none";
			document.getElementsByClassName("phas")[i].style.display = "block";
			i = i + 1;
		};
	};
};
function myPhi() {
	if ( b == 0 ) {
		let i = 0;
		while ( i < 1 ) {
			document.getElementsByClassName("phip")[i].style.display = "block";
			i = i + 1;
		};
		i = 0;
		while ( i < 2 ) {
			document.getElementsByClassName("phis")[i].style.display = "inline";
			i = i + 1;
		};
		b = 1;
	} else {
		let i = 0;
		while ( i < 1 ) {
			document.getElementsByClassName("phip")[i].style.display = "none";
			i = i + 1;
		};
		i = 0;
		while ( i < 2 ) {
			document.getElementsByClassName("phis")[i].style.display = "none";
			i = i + 1;
		};
		b = 0;
	};
};
function myBib() {
	if ( c == 0 ) {
		let i = 0;
		while ( i < 4 ) {
			document.getElementsByClassName("bibp")[i].style.display = "block";
			i = i + 1;
		};
		i = 0;
		while ( i < 2 ) {
			document.getElementsByClassName("bibs")[i].style.display = "inline";
			i = i + 1;
		};
		c = 1;
	} else {
		let i = 0;
		while ( i < 4 ) {
			document.getElementsByClassName("bibp")[i].style.display = "none";
			i = i + 1;
		};
		i = 0;
		while ( i < 2 ) {
			document.getElementsByClassName("bibs")[i].style.display = "none";
			i = i + 1;
		};
		c = 0;
	};
};
function myPro() {
	if ( d == 0 ) {
		a = 0;
		b = 0;
		c = 0;
		myPho();
		myPhi();
		myBib();
		d = 1;
	} else {
		a = 1;
		b = 1;
		c = 1;
		myPho();
		myPhi();
		myBib();
		d = 0;
	};
	myCookie();
};
// LOWER BUTTON PANEL
function myChange() {
	let text;
	text = document.getElementById("myInput").value.toString();
	if ( myMAPA.checked == true ) { v = 1 };
	if ( mySAPA.checked == true ) { v = 2 };
	if ( mySyll.checked == true ) { y = 1 } else { y = 0 };
	if ( myStr1.checked == true ) { s = 1 } else { s = 0 };
	if ( myStr2.checked == true ) { n = 1 } else { n = 0 };
	if ( myCase.checked == true ) { l = 1 } else { l = 0 };
	if ( myFusi.checked == true ) { z = 1 } else { z = 0 };
	text = Transcribe(text,v,y,s,n,l,z);
	document.getElementById("myResult").value = text;
	document.getElementById("myInput").scrollTop = 0;
	document.getElementById("myResult").scrollTop = 0;
};
function myClear() {
	document.getElementById("myInput").value = "";
	document.getElementById("myResult").value = "";
};
function myAaTex() {
	let amatex = document.getElementById("myInput").value.toString();
	document.getElementById("myInput").value = myMoTex(amatex);
	document.getElementById("myInput").scrollTop = 0;
	document.getElementById("myResult").scrollTop = 0;
};
function myMoTex(abtext) {
	abtext = abtext.toLowerCase();
	// let abtext = abtext.replace(/\s+/g, " ");
	// let abtext = abtext.trim();
	abtext = abtext.replace(/\n+/g, "êăõ");
	abtext = abtext.replace(/\s+/g, " ");
	abtext = abtext.replace(/êăõ* /g, "\n\n");
	abtext = abtext.replace(/êăõ/g, "\n\n");
	abtext = abtext.trim();
	// abtext = abtext.replace(/«/g,'"').replace(/»/g,'"').replace(/“/g,'"').replace(/”/g,'"').replace(/‘/g,"'").replace(/’/g,"'").replace(/`/g,"'").replace(/´/g,"'");
	// abtext = abtext.replace(/[^a-z0-9 áéíóúüñ\n",:'\.\—\_\-?¿!¡;\(\)\[\]\{\}\…\+\=]/g,"");
	return abtext;
};
function mySave() {
	let text1 = document.getElementById("myInput").value;
	let text2 = document.getElementById("myResult").value;
	let text3 = "=== ORIGINAL TEXT ===" + "\n\n" + text1 + "\n\n" + "=== PHONEMES TEXT ===" + "\n\n" + text2;
	let text4 = text3.replace(/\n/g, "\r\n");
	let text5 = text4.replace(/\r+/g, "\r");
	let factor = document.createElement('a');
	factor.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text5));
	factor.setAttribute("download", "text.txt");
	factor.style.display = "none";
	document.body.appendChild(factor);
	factor.click();
	document.body.removeChild(factor);
};
function myCopy() {
	let text1 = document.getElementById("myInput").value;
	let text2 = document.getElementById("myResult").value;
	let text3 = "=== ORIGINAL TEXT ===" + "\n\n" + text1 + "\n\n" + "=== PHONEMES TEXT ===" + "\n\n" + text2;
	let text4 = text3.replace(/\n/g, "\r\n");
	let text5 = text4.replace(/\r+/g, "\r");
	const textArea = document.createElement("textarea");
	textArea.value = text2;
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand("copy");
	document.body.removeChild(textArea);
	// window.alert("Good");
	document.getElementById("myCopy").innerHTML = "Good";
	setTimeout( function() { document.getElementById("myCopy").innerHTML = "Copy"; }, 1800 );
};
// THEME
function myTheme() {
	if ( themeValue == 2 ) {
		document.body.style.color = "#efefef";
		document.body.style.backgroundColor = "#303030";
		let i = 0;
		while ( i < 2 ) {
			document.getElementsByTagName("textarea")[i].style.color = "#efefef";
			document.getElementsByTagName("textarea")[i].style.backgroundColor = "#303030";
			document.getElementsByTagName("textarea")[i].style.border = "1px solid #969696";
			document.getElementsByTagName("textarea")[i].style.scrollbarColor = "#2b2b2b #363636";
			i = i + 1;
		};
		let u = 0;
		while ( u < 6 ) {
			document.getElementsByTagName("button")[u].style.color = "#efefef";
			document.getElementsByTagName("button")[u].style.backgroundColor = "#303030";
			document.getElementsByTagName("button")[u].style.border = "1px solid #969696";
			u = u + 1;
		};
		let a = 0;
		while ( a < 23 ) {
			document.getElementsByTagName("a")[a].style.color = "#c63636";
			document.getElementsByTagName("a")[a].style.backgroundColor = "#303030";
			a = a + 1;
		};
		themeValue = 1;
		t = 2;
		myCookie();
	} else {
		document.body.style.color = "#181818";
		document.body.style.backgroundColor = "#ffffff";
		let i = 0;
		while ( i < 2 ) {
			document.getElementsByTagName("textarea")[i].style.color = "#181818";
			document.getElementsByTagName("textarea")[i].style.backgroundColor = "#ffffff";
			document.getElementsByTagName("textarea")[i].style.border = "1px solid #999999";
			document.getElementsByTagName("textarea")[i].style.scrollbarColor = "#c9c9c9 #fbfbfb";
			i = i + 1;
		};
		let u = 0;
		while ( u < 6 ) {
			document.getElementsByTagName("button")[u].style.color = "#181818";
			document.getElementsByTagName("button")[u].style.backgroundColor = "#ffffff";
			document.getElementsByTagName("button")[u].style.border = "1px solid #999999";
			u = u + 1;
		};
		let a = 0;
		while ( a < 23 ) {
			document.getElementsByTagName("a")[a].style.color = "#0000ff";
			document.getElementsByTagName("a")[a].style.backgroundColor = "#ffffff";
			a = a + 1;
		};
		themeValue = 2;
		t = 1;
		myCookie();
	};
};
// TEXTAREA
function mySize() {
	myInputW = document.getElementById("myInput").offsetWidth;
	myInputH = document.getElementById("myInput").offsetHeight;
	myTextarea();
};
function myTextarea() {
	if ( myInputW < 810 ) { myInputW = 810; };
	if ( myInputH < 240 ) { myInputH = 240; };
	if ( myInputW > document.getElementById("main").offsetWidth ) { myInputW = document.getElementById("main").offsetWidth; };
	if ( myInputH > screen.height ) { myInputH = screen.height; };
	if ( myArea == 1 ) {
		myInputW = document.getElementById("main").offsetWidth;
		myInputH = screen.height;
	};
	let i = 0;
	while ( i < 2 ) {
		document.getElementsByTagName("textarea")[i].style.width = myInputW + "px";
		document.getElementsByTagName("textarea")[i].style.height = myInputH + "px";
		i = i + 1;
	};
	myCookie();
};
// COOKIES
function myCookie() {
	if ( myMAPA.checked == true ) { v = 1 };
	if ( mySAPA.checked == true ) { v = 2 };
	if ( mySyll.checked == true ) { y = 1 } else { y = 0 };
	if ( myStr1.checked == true ) { s = 1 } else { s = 0 };
	if ( myStr2.checked == true ) { n = 1 } else { n = 0 };
	if ( myCase.checked == true ) { l = 1 } else { l = 0 };
	if ( myFusi.checked == true ) { z = 1 } else { z = 0 };
	document.cookie = "phonemic=" + v + "," + y + "," + s + "," + n + "," + l + "," + z + "," + t + "," + myInputW + "," + myInputH + "," + myArea + "," + d + ",~" + "; max-age=31415926 ; path=/";
};
// SETTING
function mySetting() {
	if ( document.cookie.search(/phonemic=/) !== -1 ) {
		let settingDecode = decodeURIComponent(document.cookie);
		let settingValue = settingDecode.replace(/^.*(phonemic=)(.*)(,~).*/,"$2");
		let settingLista = settingValue.trim().split(",");
		if ( settingLista[0] == 1 ) { document.getElementById("myMAPA").checked = true ; myfunMAPA(); };
		if ( settingLista[0] == 2 ) { document.getElementById("mySAPA").checked = true ; myfunSAPA(); };
		if ( settingLista[1] == 1 ) { document.getElementById("mySyll").checked = true ; myFunction(); };
		if ( settingLista[1] == 0 ) { document.getElementById("mySyll").checked = false ; myFunction(); };
		if ( settingLista[2] == 1 ) { document.getElementById("myStr1").checked = true ; myFunction(); };
		if ( settingLista[2] == 0 ) { document.getElementById("myStr1").checked = false ; myFunction(); };
		if ( settingLista[3] == 1 ) { document.getElementById("myStr2").checked = true ; myFunction(); };
		if ( settingLista[3] == 0 ) { document.getElementById("myStr2").checked = false ; myFunction(); };
		if ( settingLista[4] == 1 ) { document.getElementById("myCase").checked = true ; myFunction(); };
		if ( settingLista[4] == 0 ) { document.getElementById("myCase").checked = false ; myFunction(); };
		if ( settingLista[5] == 1 ) { document.getElementById("myFusi").checked = true ; myFunction(); };
		if ( settingLista[5] == 0 ) { document.getElementById("myFusi").checked = false ; myFunction(); };
		if ( settingLista[6] == 1 || settingLista[6] == 2 ) { themeValue = settingLista[6] ; myTheme(); };
		if ( settingLista[7] !== undefined ) { myInputW = settingLista[7]; };
		if ( settingLista[8] !== undefined ) { myInputH = settingLista[8]; };
		if ( settingLista[9] !== undefined ) { myArea = settingLista[9]; };
		if ( settingLista[10] == 0 ) { d = 1 ; myPro(); };
		if ( settingLista[10] == 1 ) { d = 0 ; myPro(); };
		myTextarea();
	};
};
// TEXTAREA
function myModeT() {
	if ( myArea == 0 ) {
		myArea = 1;
		myCookie();
		myTextarea();
	} else {
		myInputW = 810;
		myInputH = 240;
		myArea = 0;
		myCookie();
		myTextarea();
	};
};
// RESPONSIVE
function myResponsive() {
	let widthMain = document.getElementById("main").offsetWidth;
	// MARGENS VALUES
	let valueMargen = myCalculation( widthMain, 300, 700, 0.45, 1.20 ) ;
	document.getElementById("main").style.margin = 0 + "em" + " " + valueMargen + "em" ;
	// FONT-SIZE MAIN
	let valueMfs = myCalculation( widthMain, 200, 600, 16, 20 ) ;
	document.getElementById("main").style.fontSize = valueMfs + "px" ;
	// FONT-SIZE H1 & H2
	let valueHfs = myCalculation( widthMain, 200, 600, 24, 36 ) ;
	let widthH1 = myCalculation( widthMain, 120, 230, 0.60, 1 ) ;
	if ( widthMain < 174 ) { document.getElementById("Title").innerHTML = "PHONEMIC TRANSCR."; };
	if ( widthMain >= 174 ) { document.getElementById("Title").innerHTML = "PHONEMIC TRANSCRIPTION"; };
	document.getElementsByTagName("h1")[0].style.fontSize = valueHfs * widthH1 + "px" ;
	let i = 0;
	while ( i < 6 ) {
		document.getElementsByTagName("h2")[i].style.fontSize = valueHfs * 0.70 + "px" ;
		i = i + 1;
	};
	myTextarea();
};
// RESPONSIVE CALCULATION
function myCalculation ( X, Xa, Xb, Ya, Yb ) {
	if ( Xa !== Xb ) {
		if ( ( Xa < Xb ) && ( X <= Xa ) ) { let Y = Number ( Ya ); return Y; };
		if ( ( Xa < Xb ) && ( X >= Xb ) ) { let Y = Number ( Yb ); return Y; };
		if ( ( Xa > Xb ) && ( X >= Xa ) ) { let Y = Number ( Ya ); return Y; };
		if ( ( Xa > Xb ) && ( X <= Xb ) ) { let Y = Number ( Yb ); return Y; };
		if ( ( X > Xa && X < Xb ) || ( X > Xb && X < Xa ) ) {
			let Y = Number ( [ Yb * ( X - Xa ) + Ya * ( Xb - X ) ] / [ ( Xb - Xa ) ] );
			return Y;
		};
	} else {
		return false;
	};
};
// START
mySetting();
myResponsive();
window.addEventListener( "resize", myResponsive );
