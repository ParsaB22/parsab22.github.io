import Header from "../Components/Header";
import HeaderMobile from "../Components/HeaderMobile";
import BackgroundImg from "../Components/BackgroundImg";
import TextPanel from "../Components/TextPanel";
import ImagePanel from "../Components/ImagePanel";
import ImageTextPanel from "../Components/ImageTextPanel";

const portfolioWebsiteHome = "../../images/Website/portfoliowebsitehome.png";

// Comic //
function ComicMobile(){
    return(
        <div id="comicSmall" >
            <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Overview</span>,height:100, blank:"#FF4E4E",center:true},
                {text:
                    <span>
                        My <b style={{color:"red"}}>portfolio website</b> is designed to showcase not only my <em style={{textDecoration:"underline"}}>projects</em> but 
                        also my <em style={{textDecoration:"underline"}}>skillset</em> through the use of various frameworks and technologies across different 
                        sections of the site. Each page of the website is built with a specific framework, carefully chosen to highlight both my technical abilities 
                        and the strengths of the tools used.
                    </span>, center:true}]} />
                <div></div>
                    <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Tailwind CSS</span>, blank:"#4AC936",center:true},
                        {text:<span><b style={{color:"#38bdf8"}}><em>Tailwind CSS</em></b> was chosen for the <b style={{textDecoration:"underline"}}>home page</b> because 
                        of its <b><em>utility-first design philosophy</em></b>, which allows for <em>rapid</em> and <em>flexible</em> styling. I wanted the home page to be 
                        highly customizable, responsive, and visually appealing while maintaining a clean, minimal codebase. <b style={{color:"#38bdf8"}}>Tailwind</b>’s pre-defined utility 
                        classes provide the perfect balance between design and functionality.</span>,height:100}
                    ]}/>
                <div></div>
                    <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>HTML/CSS/JavaScript</span>, blank:"#4AC936",center:true},
                        {text:<span> The <b style={{textDecoration:"underline"}}>about page</b> is designed with 
                        plain <b style={{color:"red"}}><em>HTML</em></b>, <b style={{color:"royalblue"}}><em>CSS</em></b>, and <b style={{color:"orange"}}><em>JavaScript</em></b>. 
                        This choice was deliberate, as I wanted to demonstrate my 
                        ability to work without relying on frameworks, showcasing my proficiency in core web development technologies.</span>,height:100}
                    ]}/>
                <div></div>
                    <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Bootstrap</span>, blank:"#4AC936",center:true},
                        {text:<span>For the <b style={{textDecoration:"underline"}}>projects page</b>, I selected <b style={{color:"darkviolet"}}><em>Bootstrap</em></b> primarily because of 
                        its <b><em>robust grid system</em></b> and <b><em>well-established components</em></b>, making it <em>ideal</em> for managing multiple project layouts efficiently. 
                        The goal was to create a layout that could clearly present several 
                        projects without overwhelming the user, and <b style={{color:"darkviolet"}}>Bootstrap</b>’s features were a perfect fit</span>,height:100}
                    ]}/>
                <div></div>
                    <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>REACT</span>, blank:"#4AC936",center:true},
                        {text:<span> <b style={{textDecoration:"underline"}}>Each individual project information page</b> is 
                        built with <b style={{color:"hotpink"}}><em>React</em></b>, utilizing its <b>component-based architecture</b>. 
                        This allowed me to create a <span style={{textDecoration:"underline"}}>comic panel-style layout</span> for <em>each</em> project, while reusing components to minimize code redundancy. 
                        Despite <b style={{color:"hotpink"}}>React</b> typically being a single-page framework, I implemented workarounds to integrate it with the multi-page structure of my website.</span>,height:100}
                    ]}/>
                <div></div>
                    <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Gsap</span>, blank:"#4AC936",center:true},
                        {text:<span>Across <b style={{textDecoration:"underline"}}>all pages</b>, I implemented <b style={{color:"#33cc33"}}><em>GSAP</em></b> for 
                        its <b>advanced animation</b> capabilities and ability to add a polished, 
                        interactive feel to the site. My decision to use <b style={{color:"#33cc33"}}>GSAP</b> was driven by its ability to create <em>smooth</em>, <em>precise</em>, 
                        and <em>flexible</em> animations that <b>enhance the user experience</b> without
                        sacrificing performance as well as being able to seamlessly integrate across various frameworks and plain JavaScript, which was essential 
                        for my multi-framework portfolio. Additionally <b style={{color:"#33cc33"}}></b> enables complex interactive animations that contribute meaningfully 
                        to the overall user experience.</span>,height:100}
                    ]}/>

                
        </div>
    );
}
function ComicTablet(){
    return(
        <div id="comicMedium">
            <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Overview</span>,height:100, blank:"#FF4E4E",center:true},
                {text:
                    <span>
                        My <b style={{color:"red"}}>portfolio website</b> is designed to showcase not only my <em style={{textDecoration:"underline"}}>projects</em> but 
                        also my <em style={{textDecoration:"underline"}}>skillset</em> through the use of various frameworks and technologies across different 
                        sections of the site. Each page of the website is built with a specific framework, carefully chosen to highlight both my technical abilities 
                        and the strengths of the tools used.
                    </span>,center:true}]} />
                <div></div>
                <div className="row">
                    <TextPanel width="50" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Tailwind CSS</span>, blank:"#4AC936",center:true},
                        {text:<span><b style={{color:"#38bdf8"}}><em>Tailwind CSS</em></b> was chosen for the <b style={{textDecoration:"underline"}}>home page</b> because 
                        of its <b><em>utility-first design philosophy</em></b>, which allows for <em>rapid</em> and <em>flexible</em> styling. I wanted the home page to be 
                        highly customizable, responsive, and visually appealing while maintaining a clean, minimal codebase. <b style={{color:"#38bdf8"}}>Tailwind</b>’s pre-defined utility 
                        classes provide the perfect balance between design and functionality.</span>,height:100}
                    ]}/>
                    <TextPanel width="50" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>HTML/CSS/JavaScript</span>, blank:"#4AC936",center:true},
                        {text:<span> The <b style={{textDecoration:"underline"}}>about page</b> is designed with 
                        plain <b style={{color:"red"}}><em>HTML</em></b>, <b style={{color:"royalblue"}}><em>CSS</em></b>, and <b style={{color:"orange"}}><em>JavaScript</em></b>. 
                        This choice was deliberate, as I wanted to demonstrate my 
                        ability to work without relying on frameworks, showcasing my proficiency in core web development technologies.</span>,height:100}
                    ]}/>
                </div>
                <div className="row">
                    <TextPanel width="50" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Bootstrap</span>, blank:"#4AC936",center:true},
                        {text:<span>For the <b style={{textDecoration:"underline"}}>projects page</b>, I selected <b style={{color:"darkviolet"}}><em>Bootstrap</em></b> primarily because of 
                        its <b><em>robust grid system</em></b> and <b><em>well-established components</em></b>, making it <em>ideal</em> for managing multiple project layouts efficiently. 
                        The goal was to create a layout that could clearly present several 
                        projects without overwhelming the user, and <b style={{color:"darkviolet"}}>Bootstrap</b>’s features were a perfect fit</span>,height:100}
                    ]}/>
                    <TextPanel width="50" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>REACT</span>, blank:"#4AC936",center:true},
                        {text:<span> <b style={{textDecoration:"underline"}}>Each individual project information page</b> is 
                        built with <b style={{color:"hotpink"}}><em>React</em></b>, utilizing its <b>component-based architecture</b>. 
                        This allowed me to create a <span style={{textDecoration:"underline"}}>comic panel-style layout</span> for <em>each</em> project, while reusing components to minimize code redundancy. 
                        Despite <b style={{color:"hotpink"}}>React</b> typically being a single-page framework, I implemented workarounds to integrate it with the multi-page structure of my website.</span>,height:100}
                    ]}/>
                </div>
                <div className="row">
                    <TextPanel width="25" array={[{blank:"#424242", height:100},]} />

                    <TextPanel width="50" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Gsap</span>, blank:"#4AC936",center:true},
                        {text:<span>Across <b style={{textDecoration:"underline"}}>all pages</b>, I implemented <b style={{color:"#33cc33"}}><em>GSAP</em></b> for 
                        its <b>advanced animation</b> capabilities and ability to add a polished, 
                        interactive feel to the site. My decision to use <b style={{color:"#33cc33"}}>GSAP</b> was driven by its ability to create <em>smooth</em>, <em>precise</em>, 
                        and <em>flexible</em> animations that <b>enhance the user experience</b> without
                        sacrificing performance as well as being able to seamlessly integrate across various frameworks and plain JavaScript, which was essential 
                        for my multi-framework portfolio. Additionally <b style={{color:"#33cc33"}}></b> enables complex interactive animations that contribute meaningfully 
                        to the overall user experience.</span>,height:100}
                    ]}/>
                    <TextPanel width="25" array={[{blank:"#424242", height:100},]} />

                </div>
                
        </div>);
}
function Comic () {
    return(
        <div id="comicLarge" >
            <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Overview</span>,height:100, blank:"#FF4E4E",center:true},
                {text:
                <div>
                    <span>
                        My <b style={{color:"red"}}>portfolio website</b> is designed to showcase not only my <em style={{textDecoration:"underline"}}>projects</em> but 
                        also my <em style={{textDecoration:"underline"}}>skillset</em> through the use of various frameworks and technologies across different 
                        sections of the site. Each page of the website is built with a specific framework, carefully chosen to highlight both my technical abilities 
                        and the strengths of the tools used.
                    </span>
                </div>,
                center:true}]} />
                <div></div>
                <div className="row">
                    <TextPanel width="50" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Tailwind CSS</span>, blank:"#4AC936",center:true},
                        {text:<span><b style={{color:"#38bdf8"}}><em>Tailwind CSS</em></b> was chosen for the <b style={{textDecoration:"underline"}}>home page</b> because 
                        of its <b><em>utility-first design philosophy</em></b>, which allows for <em>rapid</em> and <em>flexible</em> styling. I wanted the home page to be 
                        highly customizable, responsive, and visually appealing while maintaining a clean, minimal codebase. <b style={{color:"#38bdf8"}}>Tailwind</b>’s pre-defined utility 
                        classes provide the perfect balance between design and functionality.</span>,height:100}
                    ]}/>
                    <TextPanel width="50" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>HTML/CSS/JavaScript</span>, blank:"#4AC936",center:true},
                        {text:<span> The <b style={{textDecoration:"underline"}}>about page</b> is designed with 
                        plain <b style={{color:"red"}}><em>HTML</em></b>, <b style={{color:"royalblue"}}><em>CSS</em></b>, and <b style={{color:"orange"}}><em>JavaScript</em></b>. 
                        This choice was deliberate, as I wanted to demonstrate my 
                        ability to work without relying on frameworks, showcasing my proficiency in core web development technologies.</span>,height:100}
                    ]}/>
                </div>
                <div className="row">
                    <TextPanel width="50" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Bootstrap</span>, blank:"#4AC936",center:true},
                        {text:<span>For the <b style={{textDecoration:"underline"}}>projects page</b>, I selected <b style={{color:"darkviolet"}}><em>Bootstrap</em></b> primarily because of 
                        its <b><em>robust grid system</em></b> and <b><em>well-established components</em></b>, making it <em>ideal</em> for managing multiple project layouts efficiently. 
                        The goal was to create a layout that could clearly present several 
                        projects without overwhelming the user, and <b style={{color:"darkviolet"}}>Bootstrap</b>’s features were a perfect fit</span>,height:100}
                    ]}/>
                    <TextPanel width="50" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>REACT</span>, blank:"#4AC936",center:true},
                        {text:<span> <b style={{textDecoration:"underline"}}>Each individual project information page</b> is 
                        built with <b style={{color:"hotpink"}}><em>React</em></b>, utilizing its <b>component-based architecture</b>. 
                        This allowed me to create a <span style={{textDecoration:"underline"}}>comic panel-style layout</span> for <em>each</em> project, while reusing components to minimize code redundancy. 
                        Despite <b style={{color:"hotpink"}}>React</b> typically being a single-page framework, I implemented workarounds to integrate it with the multi-page structure of my website.</span>,height:100}
                    ]}/>
                </div>
                <div className="row">
                    <TextPanel width="25" array={[{blank:"#424242", height:100},]} />
                    <TextPanel width="50" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Gsap</span>, blank:"#4AC936",center:true},
                        {text:<span>Across <b style={{textDecoration:"underline"}}>all pages</b>, I implemented <b style={{color:"#33cc33"}}><em>GSAP</em></b> for 
                        its <b>advanced animation</b> capabilities and ability to add a polished, 
                        interactive feel to the site. My decision to use <b style={{color:"#33cc33"}}>GSAP</b> was driven by its ability to create <em>smooth</em>, <em>precise</em>, 
                        and <em>flexible</em> animations that <b>enhance the user experience</b> without
                        sacrificing performance as well as being able to seamlessly integrate across various frameworks and plain JavaScript, which was essential 
                        for my multi-framework portfolio. Additionally <b style={{color:"#33cc33"}}></b> enables complex interactive animations that contribute meaningfully 
                        to the overall user experience.</span>,height:100}
                    ]}/>
                    <TextPanel width="25" array={[{blank:"#424242", height:100},]} />

                </div>
                
        </div>
    );
}


/////////////////////////////////////////////////////////////

let change = null;
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const titleName = "Parsabaghaie.com";
const titleFontSize = 2.7;
const linkHref = "empty"
const headerFontMax = 54;

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