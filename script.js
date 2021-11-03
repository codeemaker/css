var slider = document.getElementById("range");
var val = document.getElementById("value");
var optbtn=document.getElementsByClassName("opt-btn")[0];
var optlist=document.getElementsByClassName("opt-list")[0];
var dataimg=document.getElementsByClassName("imgdt")[0];
		var dots=document.getElementsByClassName("img-dots")[0].children;
slider.oninput = function(e) {
  var active = e.target.value;
  val.style.width = active+"%";
}
var arr=["example.jpg","example2.jpg","example3.jpg"];
	    var i=0;
	    var ab=setInterval(()=>{
	    for(var l=0;l<dots.length;l++){
	    		if(l===i){
	    		dots[l].style.backgroundColor="#cbdce0e9";
	    		dots[l].style.padding="2px";
	    		}
	    		else{
	    		dots[l].style.backgroundColor="blue";
	    		dots[l].style.padding="0";
	    		}
	    	}
	    if(i<arr.length){
	    	dataimg.style.background="url('"+arr[i]+"') no-repeat";
	    	dataimg.style.backgroundSize="cover";
	    	i++;
	    }
	    else{
	    	dataimg.style.background="url('"+arr[0]+"') no-repeat";
	    	dataimg.style.backgroundSize="cover";
	    	dots[0].style.backgroundColor="#cbdce0e9";
	    	i=1;
	    	}
	    },2500);