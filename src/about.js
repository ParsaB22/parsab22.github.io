//
//
//
circleImgRepo();//initial call
window.onload = () => {
    circleImgRepo();
};
window.addEventListener("resize", circleImgRepo);//updated when resizing

// POSITISIONS IMAGE CIRCLE BASED OFF OF THE CURRENT WIDTH WHICH IS BASED OFF OF VIEWPORT WIDTH
function circleImgRepo(){
    let circle = document.getElementById("in");//grab circle
    let circlewidth = -circle.clientWidth/2;//half of circle width(negative)

    let sense = document.getElementById("sense");//grab spidey sense img
    if(window.innerWidth<1024){
        let offset = (circle.clientWidth - circle.clientWidth*1.35)/2//offset for image adjustment
        circle.style.top = circlewidth + "px";//top=-half of circle width
        circle.style.left = "unset";//top=-half of circle width
        document.getElementById("out").style.marginTop = circle.clientWidth/2-offset - 20 +"px";
        document.getElementById("out").style.paddingTop = circle.clientWidth/2 + 20 +"px";   
        sense.style.left = offset +"px";//set left with offset
        sense.style.top = offset +"px";//set top with offset 
    }
    else{
        let offset = (circle.clientWidth - circle.clientWidth*1.30)/2//offset for image adjustment
        circle.style.top = -circle.clientWidth*0.15 + "px";//top=-half of circle width
        circle.style.left = -circle.clientWidth*0.25 + "px";//top=-half of circle width
        document.getElementById("out").style.marginTop = 0 +"px";
        document.getElementById("out").style.paddingTop = "20px";
        sense.style.left = offset+10 +"px";//set left with offset
        sense.style.top = offset-10 +"px";//set top with offset
    }
    // sense.style.left = offset+10 +"px";//set left with offset
    // sense.style.top = offset-10 +"px";//set top with offset
}

