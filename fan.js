img = "";
status = "";
objectDetector = "";

function preload() {
    img = loadImage('fan.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Fan", 190, 100);
    noFill();
    stroke('#FF0000');
    rect(190, 70, 300, 900);


}

function modelLoaded() {
    console.log("Model Loaded !")
    status = true;
    ojectDetector.detect(img, gotResult);
}

function gotResult(error, result) {
    if (error) {
        console.log(error);
    }
    console.log(result);
}