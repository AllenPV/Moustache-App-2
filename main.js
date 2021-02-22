noseX = 0;
noseY = 0;
function preload() {
    moustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup() {
    Canvas = createCanvas(300, 300);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.size(300, 300);
    Video.hide();
    poseNet = ml5.poseNet(Video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("poseNet loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-14;
        noseY = results[0].pose.nose.y;
    }
}

function draw() {
    image(Video,0,0,300,300);
    image(moustache,noseX,noseY,30,30);
}

function Take_Snapshot() {
    save("Photo.png");
}