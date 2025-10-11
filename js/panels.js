"use strict";
let v = 1;
let y = 0;
let s = 0;
let n = 0;
let l = 0;
let t = 0;
let z = 0;
let themeValue = 2;
let myInputW = 810;
let myInputH = 240;
let myArea = 0;
let myAPA = document.getElementById("myAPA");
let myBox1 = document.getElementById("myBox1");
let myBox2 = document.getElementById("myBox2");
let myBox3 = document.getElementById("myBox3");
let myBox4 = document.getElementById("myBox4");
let myBox5 = document.getElementById("myBox5");
// TOP BUTTON PANEL
function myfunMAPA() {
	if ( myAPA.checked == true ) {
		myCookie();
	} else {
		document.getElementById("myAPA").checked = true;
		myfunMAPA();
	};
};
function myFunction1() {
	myCookie();
};
function myFunction2() {
	myCookie();
};
function myFunction3() {
	myCookie();
};
function myFunction4() {
	myCookie();
};
function myFunction5() {
	myCookie();
};
// LOWER BUTTON PANEL
function myChange() {
	let text;
	text = document.getElementById("myInput").value.toString();
	if ( myAPA.checked == true ) { v = 1 };
	if ( myBox1.checked == true ) { y = 1 } else { y = 0 };
	if ( myBox2.checked == true ) { s = 1 } else { s = 0 };
	if ( myBox3.checked == true ) { n = 1 } else { n = 0 };
	if ( myBox4.checked == true ) { l = 1 } else { l = 0 };
	if ( myBox5.checked == true ) { z = 1 } else { z = 0 };
	text = Transcribe(text,y,s,n,l,z);
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
		while ( a < 18 ) {
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
		while ( a < 18 ) {
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
	if ( myAPA.checked == true ) { v = 1 };
	if ( myBox1.checked == true ) { y = 1 } else { y = 0 };
	if ( myBox2.checked == true ) { s = 1 } else { s = 0 };
	if ( myBox3.checked == true ) { n = 1 } else { n = 0 };
	if ( myBox4.checked == true ) { l = 1 } else { l = 0 };
	if ( myBox5.checked == true ) { z = 1 } else { z = 0 };
	document.cookie = "phonemic=" + v + "," + y + "," + s + "," + n + "," + l + "," + z + "," + t + "," + myInputW + "," + myInputH + "," + myArea + ",~" + "; max-age=31415926 ; path=/";
};
// SETTING
function mySetting() {
	if ( document.cookie.search(/phonemic=/) !== -1 ) {
		let settingDecode = decodeURIComponent(document.cookie);
		let settingValue = settingDecode.replace(/^.*(phonemic=)(.*)(,~).*/,"$2");
		let settingLista = settingValue.trim().split(",");
		if ( settingLista[0] == 1 ) { document.getElementById("myAPA").checked = true ; myfunMAPA(); };
		if ( settingLista[1] == 1 ) { document.getElementById("myBox1").checked = true ; myFunction1(); };
		if ( settingLista[1] == 0 ) { document.getElementById("myBox1").checked = false ; myFunction1(); };
		if ( settingLista[2] == 1 ) { document.getElementById("myBox2").checked = true ; myFunction2(); };
		if ( settingLista[2] == 0 ) { document.getElementById("myBox2").checked = false ; myFunction2(); };
		if ( settingLista[3] == 1 ) { document.getElementById("myBox3").checked = true ; myFunction3(); };
		if ( settingLista[3] == 0 ) { document.getElementById("myBox3").checked = false ; myFunction3(); };
		if ( settingLista[4] == 1 ) { document.getElementById("myBox4").checked = true ; myFunction4(); };
		if ( settingLista[4] == 0 ) { document.getElementById("myBox4").checked = false ; myFunction4(); };
		if ( settingLista[5] == 1 ) { document.getElementById("myBox5").checked = true ; myFunction5(); };
		if ( settingLista[5] == 0 ) { document.getElementById("myBox5").checked = false ; myFunction5(); };
		if ( settingLista[6] == 1 || settingLista[6] == 2 ) { themeValue = settingLista[6] ; myTheme(); };
		if ( settingLista[7] !== undefined ) { myInputW = settingLista[7]; };
		if ( settingLista[8] !== undefined ) { myInputH = settingLista[8]; };
		if ( settingLista[9] !== undefined ) { myArea = settingLista[9]; };
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
	while ( i < 5 ) {
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