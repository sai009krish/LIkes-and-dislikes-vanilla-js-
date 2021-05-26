var x = document.getElementById("i1"); 
var a = document.getElementById("s1");
var y = document.getElementById("i2");
var b = document.getElementById("s2");


var i = localStorage.getItem("like") || 0 ;
 var j = localStorage.getItem("dislike") || 0 ;
 a.innerHTML = i;
 b.innerHTML = j;


 x.addEventListener ("click", function(){
     i++;
     localStorage.setItem("like", i);
     a.innerHTML = i;
 });

 y.addEventListener ("click", function(){
     j++;
     localStorage.setItem("dislike", j);
     b.innerHTML = j;
 });
