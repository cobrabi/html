var i=document.getElementById("inputbox").value
function one(){
    document.getElementById("inputbox").value+="1"
}
function two(){
    document.getElementById("inputbox").value+="2"
}
function three(){
    document.getElementById("inputbox").value+="3"
}
function equal() {
    var num1 = document.getElementById("inputbox").value;
    document.getElementById("inputbox").value = eval(num1);
}
function four(){
    document.getElementById("inputbox").value+="4"
}
function five(){
    document.getElementById("inputbox").value+="5"
}
function six(){
    document.getElementById("inputbox").value+="6"
}
function seven(){
    document.getElementById("inputbox").value+="7"
}
function eight(){
    document.getElementById("inputbox").value+="8"
}
function nine(){
    document.getElementById("inputbox").value+="9"
}
function zero(){
    document.getElementById("inputbox").value+="0"
}
function dzero(){
    document.getElementById("inputbox").value+="00"
}
function add(){
    document.getElementById("inputbox").value+="+"
}
function sub(){
    document.getElementById("inputbox").value+="-"
}
function div(){
    document.getElementById("inputbox").value+="/"
}
function mult(){
    document.getElementById("inputbox").value+="*"
}
function dolt(){
    document.getElementById("inputbox").value+="."
}
function ac(){
    document.getElementById("inputbox").value =""
}
function percentage(){
    document.getElementById("inputbox").value ="%"
}
function del(){
     
     var ev = document.getElementById('inputbox');
     ev.value = ev.value.slice(0,-1);
}
