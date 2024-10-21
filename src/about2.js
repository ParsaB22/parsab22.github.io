import gsap from "gsap";
import checkmarksvg from "/images/checkmark.svg"; // Adjust based on your actual image location
import copysvg from "/images/copy.svg";
let copyID = document.getElementById("copy");
copyID.addEventListener('click', copy);
let isActive = false;
function copy(){
    let copyImg = document.getElementById("copyImg");
    let copyTimeline = gsap.timeline();
    navigator.clipboard.writeText("parsabaghaie@gmail.com");
    if(isActive===false){
        isActive=true;
        copyTimeline.to('#copyImg',
            {
                scale:0,
                duration:0.1,
                onComplete: function(){
                    copyImg.src= checkmarksvg;
                }
            }
        )
        .to('#copyImg',
            {
                scale:1,
                duration:0.1,
            }
        )
        .to('#copyImg',
            {
                delay: 0.8,
                scale:0,
                duration:0.1,
                onComplete: function(){
                    copyImg.src= copysvg;
                }
            }
        )
        .to('#copyImg',
            {
                scale:1,
                duration:0.1,
                onComplete: function(){
                    isActive=false;
                }
            }
        )
    }
}
