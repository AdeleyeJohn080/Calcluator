var screen=document.getElementById('screen');
var date=new Date();
var firstValue;
var secondValue;
var sign;
var signn;
function power(){
	var power=document.getElementById('on').value;
	//document.getElementsByTagName('screen').innerHTML="";
	if (power == "ON") {
		document.getElementById('on').value="OFF";
		document.getElementById('screen').innerHTML=0;
		document.getElementById("on").style.background="black";
	}

	else if(power == "OFF"){
		document.getElementById('on').value="ON";
	  	document.getElementById("screen").innerHTML="";
	  	document.getElementById("on").style.background="";

	}
}


function press(x){
	signn=x;
	var p=document.getElementById('screen').innerHTML;
	document.getElementById('screen').innerHTML +=x;
	var pow=document.getElementById('on').value;
	if (pow=="ON") {
		document.getElementById("screen").innerHTML="";
	}
	else if(p == 0){
		document.getElementById('screen').innerHTML=x;
	}
	// else if (signn ==".") {
	// 		var float=parseFloat();
	// 		document.getElementById('screen').innerHTML=float;
	// 	}
}
function oper(e){
	 sign=e;
	firstValue=document.getElementById("screen").innerHTML;
	document.getElementById('screen').innerHTML="";

}

			function float(d){
						signn=d;
						document.getElementById("screen").innerHTML +=d;
						firstValue=document.getElementById("screen").innerHTML;
						if (signn){
							secondValue=document.getElementById("screen").innerHTML;
							res=parseFloat(firstValue)+parseFloat(secondValue);
							document.getElementById("screen").innerHTML=res;

						}
			}

function equals(){
		if (sign == "+") {
			secondValue=document.getElementById('screen').innerHTML;
			add=parseInt(firstValue) + parseInt(secondValue);
			document.getElementById('screen').innerHTML=add;
		}
		else if (sign == "*") {
			secondValue=document.getElementById('screen').innerHTML;
		 mult=(firstValue) * (secondValue);
	     document.getElementById("screen").innerHTML=mult;
		}
		else if (sign == "-") {
			secondValue=document.getElementById('screen').innerHTML;
			 sub=(firstValue) - (secondValue);
	  		 document.getElementById("screen").innerHTML=sub;
		}
		else if (sign == "/") {
			secondValue=document.getElementById('screen').innerHTML;
			 div=(firstValue) / (secondValue);
	  		 document.getElementById("screen").innerHTML=div;
		}
		float(d);
		// else if(){
		
		// }
			document.getElementById("date").innerHTML=date;

}



function bracket(u){
	brac=u;
	document.getElementById("screen").innerHTML+=u;
	firstValue=document.getElementById('screen').innerHTML;
	
	// if (){
	// 	brac*=(firstValue);
	// 	document.getElementById("screen").innerHTML=brac;
	// }
}

function remov(){

	var s=document.getElementById("screen").innerHTML;

	q=s.substr(0,s.length-1);
	document.getElementById("screen").innerHTML=q;
	if (q.length == 1){
		document.getElementById("screen").innerHTML = 0;
		
		
		
	}
}
function cancel(){
	document.getElementById("screen").innerHTML="0";
}
