import gsap from "gsap";

function stuff(g,r,s){
    if(window.innerWidth>=576){
        gsap.to(g.parentElement,{
            rotation: r,
            scale: s,
            duration:0.25
        })
    }
    else{
        gsap.to(g,{
            rotation: 0,
            scale: s,
            duration:0.25
        })
    }
}
document.querySelectorAll(".tile").forEach(function(t, index){
    t.addEventListener("mouseenter", () => stuff(t,0,1.075));
    t.addEventListener("mouseleave", () => stuff(t,index%2==0?-10:10,1));
});

