noseX=0
noseY=0

function preload(){
    clown_nose=loadImage('https://i.postimg.cc/dVtrf23W/360-F-695572024-Em-PWflg1-ZTRQ3k-Pii-Wno-KUz-H4dlvm-TOS-removebg-preview.png')
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center()
    video=createCapture(VIDEO)
    video.size(400,400)
    video.hide()
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}
function draw(){
image(video,0,0,400,400);
image(clown_nose, noseX-14, noseY-0, 30, 30);
}
function takeSnapshot(){
    save("mustachepic.png")
}
function modelLoaded(){
    console.log("PoseNet is initialized")
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results)
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y
        console.log("nose x= "+results[0].pose.nose.x)
        console.log("nose y= "+results[0].pose.nose.y)
            
        
    }
}