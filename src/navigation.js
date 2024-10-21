import gsap from "gsap";

setListener();
function setListener(){
    let pages = document.getElementsByClassName("pages");
    let text = document.getElementsByClassName("tabText");
    for (let index = 0; index < pages.length; index++) {
        pages[index].addEventListener('mouseenter',function(e){
            gsap.to(text[index],{
                scale:1.2,
                duration: 0.15,
                ease: 'none',
            })
        });
        pages[index].addEventListener('mouseleave',function(e){
            gsap.to(text[index],{
                scale:1,
                duration: 0.15,
                ease: 'none',
            })
        });
    }
}

let one = 1;
fillNav();
window.addEventListener("resize", fillNav);


function fillNav(){
    

    let back = document.getElementsByClassName("backweb");
    let mid = document.getElementsByClassName("mid-web");
    let end = document.getElementById("end-of-web");


    for (let index = 0; index < back.length; index++) {
        let b = back[index];
        
        b.style.marginLeft = back[1].clientWidth * -0.27 + "px";
        let ml = mid[0].clientWidth * -0.1656 + "px";
        if(index>0){
            let m = mid[index-1];
            m.style.marginLeft = ml;
            if(index==back.length-1){
                end.style.marginLeft = ml;
            }
        }
    }

    //figure out weird offset when refresh and resized
    //724 and 723 output same width for inner and web

    let x = document.getElementById("outer");
    let y = document.getElementById("inner");
    let z = document.getElementsByClassName("added");

    if(y.clientWidth < x.clientWidth){
        //add eelement
        addWeb();
        fillNav();
        // if(one==1){
        //     addWeb();
        //     yeh=0
        //     fillNav();
        // }
    }
    else{
        
        // console.log(x.clientWidth);
        // console.log(z.length);
        // console.log( Math.ceil((x.clientWidth - 377.297)/172));
        //534.359 is the inner at full so comment out the addWeb() and fillnav() in the if statement above
        //173.11 is the extender size at full and only one so comment out addWeb() and fillnav() and uncomment the if statement under it to only add one web
        if(window.innerWidth>=576){
            if(x.clientWidth>=534.359){
                if(z.length!=0 && z.length > Math.ceil((x.clientWidth - 534.359)/173.11)){
                    deleteWeb();
                    fillNav();
                }
            }
            else{
                if(z.length > 0){
                    let t = document.getElementById("extender");
                    t.innerHTML='';
                }
            }
        }
        else{
            if(x.clientWidth>=263.156){
                if(z.length!=0 && z.length > Math.ceil((x.clientWidth - 263.156)/87.719)){
                    deleteWeb();
                    fillNav();
                }
            }
            else{
                if(z.length > 0){
                    let t = document.getElementById("extender");
                    t.innerHTML='';
                }
            }
        }
        
    }
}

function addWeb(){
    let x = document.getElementById("extender");
    const y = ` <div class="flexable mid-web">
                    <div class="frontweb added">
                        <svg class="front" width="107" height="66" viewBox="0 0 107 66" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.07489 64.5L78.0522 1.5H102.925L28.9478 64.5H4.07489Z" fill="white" stroke="black" stroke-width="3"/>
                        </svg>  
                    </div>             
                    <div class="backweb">
                        <svg class="back" width="107" height="66" viewBox="0 0 107 66" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.07489 64.5L78.0522 1.5H102.925L28.9478 64.5H4.07489Z" fill="#C2C2C2" stroke="black" stroke-width="3"/>
                        </svg>  
                    </div>
                </div>
                `;
    x.insertAdjacentHTML("beforeend",y);
    // console.log("entered");
}

function deleteWeb(){
    let x = document.getElementById("extender");
    // console.log(x.lastElementChild);
    x.removeChild(x.lastElementChild);
}


//fix adjustments at this time math.ceil(x - ??? / ???)
//then do resizing of whole nav bar



// Look into negative spadde between for flex objects https://tailwindcss.com/docs/space