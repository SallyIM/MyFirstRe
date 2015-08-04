	document.write("这个是JS文件里面的语句");
	//下面这句话，当JS放在BODY里面的时候就会生效，当JS在HEAD标签里面的时候就会报错
	document.getElementById("p1").style.color="red"; 
	var op;
	function out1(){
		var text="你好";
		document.write(text);
	}
	function alert1(){
		var aler="hello alert1";
		document.write(aler);
	}

	function confirm1(){
		var con1=confirm("select value");
		if (con1==true) {document.write("you choose ture");}
		else {document.write("you choose false");}
	}
	function pro1(){
		var pro=prompt("enter grades");
		if (pro>90) {alert("90 is exerlent!");}
		else {alert("come on!");}
	}
	function op1(){
		 op=window.open('http://www.imooc.com','_blank','width=300,height=200,menubar=no,toolbar=no, status=no,scrollbars=yes');

	}
	function clo1(){
		op.close();		 
	}
	function get1(){
		var ge=document.getElementById("p3");		 
		alert("p3的内容是："+ge);
	}
	function inn1(){
		var gee=document.getElementById("p3");		 
		alert("p3的内容是："+gee);
		gee.innerHTML="This is next p3";
		alert("p3的内容改为This is next p3");

	}
	function ch1(){
		var ch=document.getElementById("p3");
		ch.style.color="red";
		ch.style.fontSize="30px";
		ch.style.backgroundColor="white";
	}
	function hidep3(){
		document.getElementById("p3").style.display="none";
	}
	function showp3(){
		document.getElementById("p3").style.display="block";
	}


	












