import Header from "../Components/Header";
import HeaderMobile from "../Components/HeaderMobile";
import BackgroundImg from "../Components/BackgroundImg";
import TextPanel from "../Components/TextPanel";
import ImagePanel from "../Components/ImagePanel";
import ImageTextPanel from "../Components/ImageTextPanel";

const PlaceHolder = "../../images/";
// Colors
// Red: #FF4E4E
// Green: #4AC936
// Blue: #6275D8
// Gray: #424242

// Header
// <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Overview</span>,height:100, blank:"#FF4E4E",center:true}]} />

// Sub-Header
//<TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Tailwind CSS</span>, blank:"#4AC936",center:true}]}/>

// ImagePanel: props(backColor, center, image, aspectRatio, flex, width)
// <ImagePanel backColor="AntiqueWhite" center={true} image={PlaceHolder}/>

// TextPanel: props(width, fill, array={[text,height,center,align,blank(this is backgroundcolor)]})
// <TextPanel width="100" array={[{text:<span></span>, height:100, center:true, align:true, blank:#FFFFFF}]}/>

// ImageTextPanel props(width, aspectRatio, image, class, textWidth, text)
// <ImageTextPanel class="topLeft" aspectRatio="1440/900" image={PlaceHolder} text={<span></span>} />

//Image Inside of TextPanel
//<TextPanel array={{text:<span><img style={{width:"calc(100% + 7px)", marginLeft:"-5px",marginTop:"-2px", borderBottom:"black solid 4px"}} src={PlaceHolder}/></span>,height:100}]} />


// Comic //
function ComicMobile(){
    return(
        <div id="comicSmall" >
            
        </div>
    );
}
function ComicTablet(){
    return(
        <div id="comicMedium">
            
        </div>);
}
function Comic () {
    return(
        <div id="comicLarge" >
            
        </div>
    );
}


/////////////////////////////////////////////////////////////

let change = null;
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const titleName = "TITLE_NAME";
const titleFontSize = 2.7;
const linkHref = "empty"
const headerFontMax = 54;
//empty if you want no link

function Render(){
    
    if(window.innerWidth >= 1024){
        if (change !== 1){
            change = 1;
            root.render(
                <div>
                    <BackgroundImg />
                    <Header title={titleName} fontsize={titleFontSize} link={linkHref} fontMax={headerFontMax}/>
                    <Comic/>
                </div>
            );
        }
    }
    else if(window.innerWidth >= 768 && window.innerWidth < 1024){
        if (change !== 2){
            change = 2;
            root.render(
                <div>
                    <BackgroundImg />
                    <Header title={titleName} fontsize={titleFontSize} link={linkHref} fontMax={headerFontMax}/>
                    <ComicTablet/>
                </div>
            );   
        }
    }
    else{
        if (change !== 3){
            change = 3;
            root.render(
                <div>
                    <BackgroundImg />
                    <HeaderMobile title={titleName} fontsize={titleFontSize*1.9} link={linkHref}/>
                    <ComicMobile/>
                </div>
            );   
        }
    }
}
Render();
window.addEventListener('resize', Render);