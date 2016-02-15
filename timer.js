$(document).ready(function(){

	function displayClock (){
		
		var today = new Date()
		
		var h = today.getHours()
		var m = today.getMinutes()
		var s = today.getSeconds()
		var ms = today.getMilliseconds()
		
		m=checkTime(m);
		s=checkTime(s);


		//add a zero
		function checkTime(x){
			if (x<10) {
				x="0" + x;} 
				return x;
	  	}
	

	    $("#s").text(s);
	    $("#m").text(m);
	    $("#h").text(h);
	
		var timer = setTimeout(displayClock, 1000)


		//change color odd or even minutes
  		if (m%2 == 0) {$("#m").css("color", "#a84340");
  		} else $("#m").css("color", "#000");


  		//show different colors from array
  		if (m == 0 && s == 0){
  			colorArray()
  		}


  		//show random bg
  		if (m%5 == 0 && s == 0){
  			randomColor()
  		}
	}
	

  	//colors from array function
	function colorArray() {
	var array = ["#9376c1", "#44aa61", "#ffdfb4", "#1f70f2", "#ff0082", "#fe9a3d", "#92d2b7"];
	var rand = array[Math.floor(Math.random() * array.length)]

	$("#clock").css("color", rand);
	}


	//random background
	function randomColor() {
	var random = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

		$("#clock").css("background-color", random);
	}
	

  	displayClock()

})

