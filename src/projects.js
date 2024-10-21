tiltPolaroid();
window.addEventListener("resize",tiltPolaroid);

function tiltPolaroid(){
        let polaroids = document.getElementsByClassName("polaroid");
        for (let index = 0; index < polaroids.length; index++) {
            let polar = polaroids[index];
            if(window.innerWidth>=576){
                if(index%2 == 0){
                    polar.style.transform = "rotate(-10deg)";
                }
                else{
                    polar.style.transform = "rotate(10deg)";
                }
            }
            else{
                polar.style.transform = "rotate(0deg)";
            }
        }
}
