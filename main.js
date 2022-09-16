function preload(){
classifier=ml5.imageClassifier("DoodleNet")

}
function setup(){
canvas=createCanvas(250,250)
canvas.center()
background("white")
canvas.mouseReleased(classifyCanvas)
synth=window.speechSynthesis

}
function draw(){
strokeWeight(5)
stroke("blue")
if(mouseIsPressed){
line(pmouseX,pmouseY,mouseX,mouseY)
}

}

function clearcanvas(){
background("white")
}
function classifyCanvas(){
classifier.classify(canvas,gotResults)

}
function gotResults(error,result){
console.log(result)
 confidence=Math.round(result[0].confidence*100)
 label=result[0].label
document.getElementById("qx").innerHTML=label
document.getElementById("confidence").innerHTML=confidence+"%"
utterthis=new SpeechSynthesisUtterance(label)
synth.speak(utterthis)
}