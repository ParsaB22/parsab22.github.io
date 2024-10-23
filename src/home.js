
import gsap from "gsap";


let mouseX=null;
let mouseY=null;

let isAnimating=false;
const mid = document.getElementById('middle');

function getRelativePositionInRotatedElement(mouseX, mouseY, element, rotationAngle) {
    // Get the bounding rectangle of the element
    const rect = element.getBoundingClientRect();

    // Find the center of the element
    const cx = rect.x + rect.width / 2;
    const cy = rect.y + rect.height / 2;

    // Convert the rotation angle from degrees to radians
    const radians = rotationAngle * (Math.PI / 180);

    // Calculate the relative coordinates based on the center of the element
    const relativeX = mouseX - cx;
    const relativeY = mouseY - cy;

    // Calculate the rotated coordinates
    const rotatedX = relativeX * Math.cos(radians) + relativeY * Math.sin(radians);
    const rotatedY = -relativeX * Math.sin(radians) + relativeY * Math.cos(radians);

    // Translate back to the element's coordinate system
    const finalX = rotatedX + rect.width / 2;
    const finalY = rotatedY + rect.height / 2;

    return { x: finalX, y: finalY };
}

mid.addEventListener('mousemove', function(e) {
    // Get the bounding rectangle of the container
    const container = document.getElementById('mask-container');
    if(container.classList.contains("hidden")===true){
        container.classList.remove('hidden');
        gsap.fromTo(container, 
            {
                maskSize: 0,
            },
            {
                maskSize: '40vmin 40vmin',
                onUpdate: function(){
                    const splitMaskSize = container.style.maskSize.split('vmin');
                    const vmin = Math.min(window.innerWidth,window.innerHeight) * (splitMaskSize[0]/100);
                    const rotated = document.getElementById('rotated');

                    const l = getRelativePositionInRotatedElement(mouseX, mouseY, rotated, 2);
                    const x = l.x - vmin/2;
                    const y = l.y - vmin/2;
                    
                    // Update the position
                    container.style.maskPosition = `${x}px `+ `${y}px`;
                    // gsap.to(container, 
                    //     {
                    //         maskPosition: `${x}px `+ `${y}px`
                    //     }
                    // );
                }
            }
        );
    }
    const rotated = document.getElementById('rotated');
    // Calculate mouse position relative to the container
    mouseX = e.clientX;
    mouseY = e.clientY;

    const splitMaskSize = container.style.maskSize.split('vmin');
    const vmin = Math.min(window.innerWidth,window.innerHeight) * (splitMaskSize[0]/100);
    const l = getRelativePositionInRotatedElement(mouseX, mouseY, rotated, 2);
    const x = l.x - vmin/2;
    const y = l.y - vmin/2;
    
    // Update the position
    container.style.maskPosition = `${x}px `+ `${y}px`;
    // gsap.to(container, 
    //     {
    //         maskPosition: `${x}px `+ `${y}px`
    //     }
    // );

    // console.log(`Mouse X: ${container.clientLeft}, Mouse Y: ${mouseY - rect.y}, `);
    // console.log(splitMaskSize);

});


mid.addEventListener('mouseenter', function(){
    const container = document.getElementById('mask-container');
    if(!isAnimating && mouseX!=null){
        container.classList.remove('hidden');
        gsap.fromTo(container, 
        {
            maskSize: 0,
        },
        {
            maskSize: '40vmin 40vmin',
            onUpdate: function(){
                const rotated = document.getElementById('rotated');
                const splitMaskSize = container.style.maskSize.split('vmin');
                const vmin = Math.min(window.innerWidth,window.innerHeight) * (splitMaskSize[0]/100);
                const l = getRelativePositionInRotatedElement(mouseX, mouseY, rotated, 2);
                const x = l.x - vmin/2;
                const y = l.y - vmin/2;
                // console.log("vmin= "+splitMaskSize);
                
                // Update the position
                container.style.maskPosition = `${x}px `+ `${y}px`;  
                // gsap.to(container, 
                //     {
                //         maskPosition: `${x}px `+ `${y}px`
                //     }
                // );
            }
        });
    }
    
});
mid.addEventListener("mouseleave", function(){
    const container = document.getElementById('mask-container');
    if(!isAnimating){
        container.classList.add('hidden');
    }
});

mid.addEventListener("click", function(e){
    const container = document.getElementById('mask-container');
    //this is so brock shows up when clicked
    if(!isAnimating){
        
        if(container.classList.contains("hidden")===true){
            container.classList.remove('hidden');
        }
        gsap.fromTo(container,
            {
                // maskPosition: `${e.clientX - mid.getBoundingClientRect().left}px` + `${e.clientY - mid.getBoundingClientRect().top}`,
            }
            ,
            {
                duration:1,
                maskSize: '8000px 8000px',
                ease:"expo.in",
                onStart: function(){
                    isAnimating=true;
                },
                onUpdate: function(){
                    const rotated = document.getElementById('rotated');
                    const splitMaskSize = container.style.maskSize.split('px ');
                    const l = getRelativePositionInRotatedElement(mouseX, mouseY, rotated, 2);
                    const x = l.x - splitMaskSize[0]/2;
                    const y = l.y - splitMaskSize[0]/2;
                    
                    // Update the position
                    container.style.maskPosition = `${x}px `+ `${y}px`;
                    // gsap.to(container, 
                    //     {
                    //         maskPosition: `${x}px `+ `${y}px`
                    //     }
                    // );   
                },
                onComplete: function(){
                    const active = document.getElementById('active');
                    const maskLayer = document.getElementById('mask-container');
                    active.id = "mask-container";
                    maskLayer.id ="active";
                    maskLayer.classList.remove('hidden');
                    active.classList.add('hidden');
                    active.style.maskSize = 0;
                    isAnimating=false;
                }
            }
        );
    }
});

