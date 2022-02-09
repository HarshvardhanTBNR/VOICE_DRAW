x=0;
y=0;
draw_apple="";
var SpeechRecognition=window.webkitSpeechRecognition;
recognition=new SpeechRecognition();
function start(){
document.getElementById("status").innerHTML="System is listning please say something";
recognition.start()
}
recognition.onresult=function(event){
console.log(event);
content=event.results[0][0].transcript;
document.getElementById("status").innerHTML="Speech has been recognised as : "+content;
if(content=="apples"){
x=Math.floor(Math.random()*900);
y=Math.floor(Math.random()*600);
document.getElementById("status").innerHTML="Started drawing apples";
draw_apples="set";
}
}
function setup(){
canvas=createCanvas(900,600);
}
function draw(){
if(draw_apples=="set"){
radius=Math.floor(Math.random()*700);
document.getElementById("status").innerHTML="Apples are drawn";
draw_apples=""
image("apple.jpg")
}
}