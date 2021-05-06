img = "";
status = "";
objectDetector = "";

function preload() {
    img = loadImage('lock_key.jpg');
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
    text("Lock_Key", 95, 110);
    noFill();
    stroke('#FF0000');
    rect(50, 70, 530, 340);



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