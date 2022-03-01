left_wrist_X=0;
right_wrist_X=0;
difference=0;
function preload()
{

}
function setup()
{
video=createCapture(VIDEO);
canvas=createCanvas(400,400);
canvas.position(800,300)
pose_net=ml5.poseNet(video,model_loaded);
pose_net.on("pose" , got_poses)
}
function draw()
{
background("white");
fill("maroon");
textSize(difference)
text("Kiara",0,200);
document.getElementById("font_size").innerHTML="Font Size is "+ difference +" px"
}
function model_loaded()
{
    console.log("Pose Net is on");
}
function got_poses(result)
{
if (result.length > 0) 
{
    console.log(result)
    left_wrist_X=result[0].pose.leftWrist.x;
    right_wrist_X=result[0].pose.rightWrist.x;
    difference=floor(left_wrist_X-right_wrist_X);
    console.log(difference);
}
}