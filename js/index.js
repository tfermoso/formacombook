/*
var corazon1=document.getElementById("foto1")
corazon1.onclick=function(){
    var contador1=document.getElementById("span1");
    contador1.innerHTML=parseInt(contador1.innerHTML)+1;
}
    */
var corazones=document.getElementsByClassName("fa-heart");

for (let index = 0; index < corazones.length; index++) {
    var element = corazones[index];
    element.onclick=function(c){
       var cont=c.target.nextElementSibling;
       cont.innerHTML++;
    }
    
}